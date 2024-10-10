import AboutSection from "@/components/sections/AboutSection";
import FeaturedDishes from "@/components/sections/FeaturedDishes";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import PromotionsSection from "@/components/sections/PromotionSection";
import ReservationCTA from "@/components/sections/ReservationCTA";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <FeaturedDishes></FeaturedDishes>
      <PromotionsSection></PromotionsSection>
      <AboutSection></AboutSection>
      <ReservationCTA></ReservationCTA>
      <Footer></Footer>
    </>
  );
}
