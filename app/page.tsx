import Footer from "@/components/footer";
import Billboard from "@/components/billboard";

import TopPlaces from "@/components/topDestionations";
import { CarouselSize } from "@/components/recommendedCorousel";
import RouteBox from "@/components/pickRouteComponents.tsx/routeBoard";

export default function Home() {
  return (
    <div>
      
      <Billboard />
      <div className="items-center justify-center flex">
        <CarouselSize />
      </div>
      <TopPlaces />
      <Footer />
    </div>
  );
}
