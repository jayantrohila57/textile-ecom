import HomeStunningHomepages from "@/components/home/Home-Stunning-Homepages";
import Hero from "@/components/home/hero";
import HomeAction from "@/components/home/home-action";
import HomeCarousal from "@/components/home/home-carousal";
import HomeFeatures from "@/components/home/home-features";
import HomeFullCarousal from "@/components/home/home-full-carousal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <HomeFeatures />
      <HomeStunningHomepages />
      <HomeFullCarousal />
      <HomeCarousal />
      <HomeAction />
    </>
  );
}
