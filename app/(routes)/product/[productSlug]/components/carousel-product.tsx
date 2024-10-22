import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel";
  
  interface CarouselProductProps {
    Images: { id: number; url: string }[];
  }
  
  const CarouselProduct = (props: CarouselProductProps) => {
    const { Images } = props;
    return (
      <div className="sm:px-16">
        <Carousel>
          <CarouselContent className="flex items-center">
            {Images.map((image) => (
              <CarouselItem key={image.id} className="flex-shrink-0">
                <img
                  src={image.url}
                  alt="image product"
                  className="rounded-lg object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className=" px-1" />
          <CarouselNext className=" px-1" />
        </Carousel>
      </div>
    );
  };
  
  export default CarouselProduct;