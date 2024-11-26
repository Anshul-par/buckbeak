"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MoreVertical, Upload, Pencil } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetClients } from "@/data/query/useGetClients";
import { Loading } from "@/components/ui/loading";
import { IMG_BASE } from "@/constants";

interface IClient {
  id: number;
  logo: string;
  clientname: string;
  image: any;
  tags: string[];
  projectTitle: string;
  description: string;
  industry: string;
}

export const ClientManagement = () => {
  const { data, isLoading, isError, error } = useGetClients();

  if (isLoading)
    return (
      <div className="h-[500px] flex justify-center items-center">
        <Loading />
      </div>
    );

  if (isError) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className="container mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <div className="space-y-6">
              <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center">
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Upload className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-muted-foreground">
                  Click to upload or drag and drop
                </div>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="heading">Heading</Label>
                  <Input id="heading" placeholder="Enter Heading" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="tag">Tag</Label>
                  <Input id="tag" placeholder="Enter Tag" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectTitle">Project title</Label>
                  <Input id="projectTitle" placeholder="Enter project title" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="industry">Client Industry/Field</Label>
                  <Input id="industry" placeholder="Enter industry/field" />
                </div>

                <Button className="w-full">Submit</Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="max-h-[800px] overflow-y-scroll">
          <CardContent className="p-6">
            <h2 className="text-lg font-semibold mb-6">Our Clients</h2>
            <div className="space-y-4">
              {data.data?.map((client: IClient) => (
                <div
                  key={client.id}
                  className="flex items-start space-x-4 p-4 border rounded-lg"
                >
                  <div className="w-32 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={`${IMG_BASE}${client.image.url}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold mr-2">
                        {client.clientname}
                      </h3>
                      <div className="flex flex-wrap gap-2 mr-auto">
                        {client.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-primary/10 text-primary rounded-full text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center space-x-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>Edit</DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      Project Title
                    </p>
                    <p className="text-sm mt-1">{client.projectTitle}</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Client Industry/Field
                    </p>
                    <p className="text-sm mt-1">{client.industry}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
