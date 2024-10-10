import AboutSection from "@/components/sections/AboutSection";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import Hero from "@/components/sections/Hero";
import PromotionsSection from "@/components/sections/PromotionSection";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedDishes></FeaturedDishes>
      <PromotionsSection></PromotionsSection>
      <AboutSection></AboutSection>
    </>
  );
}
