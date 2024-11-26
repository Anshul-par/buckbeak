import { Card } from "@/components/ui/card";
import { Pencil, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface IKeyFeature {
  heading: string;
  paragraph: string;
}

interface IProduct {
  _id: string;
  category: string;
  image: string;
  icon_image?: string;
  company_name: string;
  product_name: string;
  description: string;
  hidden: boolean;
  heading_main: string;
  heading_sub: string;
  key_features: IKeyFeature[];
  tags: string[];
  supported_platforms: string[];
  supported_gpu_architectures: string[];
  target_applications: string[];
  version: string;
  transformation_statement: string;
  __v: number;
}

export const Productcard = ({
  product,
  index,
}: {
  product: IProduct;
  index: number;
}) => {
  return (
    <div className="max-w-4xl mx-auto p-2 relative">
      <Card className="p-6">
        <div className="flex gap-6">
          <div className="flex">
            <div className="w-8 h-8 bg-background flex items-center justify-center rounded-full border text-sm font-medium">
              {index + 1}
            </div>
            <div className="w-32 h-32 relative">
              <img
                src="https://static.wixstatic.com/media/5b2533_815fa9b0e00c415887580a441ecdaee2~mv2.png/v1/fill/w_683,h_554,al_c,q_90,enc_avif,quality_auto/video%20plugin%20package.png"
                alt="Video Plugin Framework Preview"
                style={{
                  width: 128,
                  height: 128,
                }}
                className="rounded-lg object-cover"
              />
            </div>
          </div>

          <div className="flex-1">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold mb-1">
                  {product.product_name}
                </h2>
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
              </div>
              <div className="flex gap-2 ">
                <Button variant="ghost" size="icon" className="rounded-2xl ">
                  <Pencil className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-2xl text-red-600"
                >
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="text-muted-foreground mb-6">
              {product.transformation_statement}
            </p>

            <Carousel className="w-full max-w-xl">
              <CarouselContent>
                {product.key_features.map((feature, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <div className="bg-muted p-4 rounded-lg">
                        <h3 className="font-semibold mb-2">
                          {feature.heading}
                        </h3>
                        <p className="text-muted-foreground">
                          {feature.paragraph}
                        </p>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </Card>
    </div>
  );
};
