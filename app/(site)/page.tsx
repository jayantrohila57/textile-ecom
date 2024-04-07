import Category from "@/components/home/category";
import Hero from "@/components/home/hero";
import HomeAction from "@/components/home/home-action";
import HomeCollection from "@/components/home/home-collection";
import HomeReadymade from "@/components/home/home-readymade";
import HomeTextile from "@/components/home/home-textile";
import TextileVideo from "@/components/home/textileVideo";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Category />
      <HomeTextile />
      <HomeCollection />
      <HomeAction />
      <HomeReadymade />
      <TextileVideo />
    </>
  );
}
