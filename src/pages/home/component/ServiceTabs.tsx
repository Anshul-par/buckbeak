import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useGetServices } from "@/data/query/useGetServices";
import { Loading } from "@/components/ui/loading";
import { useEffect, useState } from "react";

export default function ServiceTabs() {
  const { data, isLoading, isError, error } = useGetServices();
  const [value, setValue] = useState("");

  useEffect(() => {
    if (data) {
      setValue(Object.keys(data)[0]);
    }
  }, [data]);

  if (isLoading)
    return (
      <div className="h-500px flex justify-center items-center">
        <Loading />
      </div>
    );

  if (isError) return <div>{JSON.stringify(error)}</div>;

  return (
    <div className="w-full  p-4">
      <div className="flex">
        <Tabs
          defaultValue="embedded"
          className="w-full mb-6"
          value={value}
          onValueChange={(e) => setValue(e)}
        >
          <TabsList>
            {Object.keys(data).map((key) => (
              <TabsTrigger key={key} value={key} className="text-sm">
                {key}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <Button variant="default" className="mb-6">
          Create Service
        </Button>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(600px, 1fr)",
          placeItems: "center",
          gap: "1rem",
        }}
      >
        {data[value]?.map((card: any, index: number) => (
          <Card key={index} className="p-6 m-0">
            <div className="flex items-start gap-4">
              <div className="w-8 h-8 flex items-center justify-center bg-primary/10 rounded-full text-sm font-medium">
                {index + 1}
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{card.name}</h3>
                    <p className="text-muted-foreground text-sm">
                      {card.description}
                    </p>
                  </div>
                  <div className="flex gap-2 ml-4">
                    <Button variant="ghost" size="icon" className="rounded-2xl">
                      <Pencil className="h-4 w-4  " />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-2xl">
                      <Trash2 className="h-4 w-4 text-red-600 " />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
