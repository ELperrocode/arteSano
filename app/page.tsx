import BannerProduct from "@/components/banner-product";
import CarouselTextBanner from "@/components/carousel-text-banner";
import ChooseCategory from "@/components/choose-category";
import FeaturedProducts from "@/components/featured-products";
import { Hero } from "@/components/hero";
import InfiniteMovingCards from "@/components/InfinityMovingCards";

export default function Home() {
  return (
   <main>
    <Hero />
    <BannerProduct/> 
   <FeaturedProducts />
   <ChooseCategory />
   <CarouselTextBanner /> 
   <InfiniteMovingCards />
   </main>
  );
}
