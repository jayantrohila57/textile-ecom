import Hero from "@/components/home/hero";
import HomeAction from "@/components/home/home-action";
import HomeFeatures from "@/components/home/home-features";
import HomeReadymade from "@/components/home/home-readymade";
import HomeTextile from "@/components/home/home-textile";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeFeatures />
      <HomeReadymade />
      <HomeAction />
      <HomeTextile />
    </>
  );
}
