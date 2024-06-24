import Footer from "@/components/footer";
import Billboard from "@/components/billboard";

import TopPlaces from "@/components/topDestionations";
import RecommendedCorousel from "@/components/recommendedCorousel";
import getCities from "@/actions/get-cities";
import { format } from "date-fns";

export const revalidate = 0;

export default async function Home() {
  const cities = await getCities();

  const offeredCities = await getCities({ isOffered: true });

  const formattedCities: any[] = cities.map((routeDoc: any) => {
    return{
        id: routeDoc.id,
        name: routeDoc.name,
        value: routeDoc.value,
        hasImage: routeDoc.url ? "Yes" : "No",
        isOffered: routeDoc.isOffered ? "Yes" : "No",
        createdAt: format(routeDoc.createdAt, "MMMM do, yyyy"), // Convert Firestore Timestamp to JavaScript Date
    };
  });

  return (
    <div>
      <Billboard cities={formattedCities} />
      <div className="items-center justify-center flex">
        <RecommendedCorousel cities={offeredCities}/>
      </div>
      <TopPlaces />
      <Footer />
    </div>
  );
}
