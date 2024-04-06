import Category from "@/components/home/category";
import Hero from "@/components/home/hero";
import HomeAction from "@/components/home/home-action";
import HomeReadymade from "@/components/home/home-readymade";
import HomeTextile from "@/components/home/home-textile";
import TextileVideo from "@/components/home/textileVideo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Category /> 
      <HomeTextile />
      <HomeAction />
      <HomeReadymade />
      <TextileVideo />
    </>
  );
}
