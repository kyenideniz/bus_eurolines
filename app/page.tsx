
import Footer from "@/components/footer";
import Billboard from "@/components/billboard";

import TopPlaces from "@/components/topDestionations";
import { CarouselSize } from "@/components/recommendedCorousel";

import getRoutes from "@/actions/get-routes";
import RouteList from "@/components/route-list";

export const revalidate = 0;

const Routes = async () => {
    try {
        const products = await getRoutes({ totalSeats: 55 });

        return (
            <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                <RouteList title="Featured Products" items={products} />
            </div>
        );
    } catch (error) {
        console.error('Failed to fetch routes:', error);
        return (
            <div className="flex flex-col px-4 gap-y-8 sm:px-6 lg:px-8">
                <p>Error loading routes</p>
            </div>
        );
    }
}

export default function Home() {
  return (
    <div>
      
      <Billboard />
      <div className="items-center justify-center flex">
        <CarouselSize />
      </div>
      <Routes />
      <TopPlaces />
      <Footer />
    </div>
  );
}
