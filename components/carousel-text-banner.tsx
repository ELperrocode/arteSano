"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";

export const dataCarouselTop = [
  {
    id: 1,
    title: "ArteSano",
    description: "Tu bazar de confianza en la web",
    link: "#",
  },
  {
    id: 2,
    title: "Conócenos",
    description: "Todas las tiendas en un solo lugar",
    link: "#",
  },
  {
    id: 3,
    title: "RETO EMPRENDE",
    description: "SIMPOSIO UTP 2024",
    link: "#",
  },
];

const CarouselTextBanner = () => {
  const router = useRouter();
  return (
    <div className="bg-blue-200 mt-4 dark:bg-primary">
      <Carousel
        className="w-full max-w-4xl mx-auto"
        plugins={[Autoplay({ delay: 5000 })]}
      >
        <CarouselContent>
          {dataCarouselTop.map(({ id, title, link, description }) => (
            <CarouselItem key={id} onClick={() => router.push(link)}>
              <div>
                <Card className="shadow-none border-none bg-transparent">
                  <CardContent className="flex flex-col justify-center p-2 items-center text-center">
                    <p className="sm:text-lg text-wrap dark:text-secondary">
                      {title}
                    </p>
                    <p className="text-xs sm:text-sm text-wrap dark:text-secondary">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
