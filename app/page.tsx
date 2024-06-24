import Footer from "@/components/footer";
import Billboard from "@/components/billboard";

import TopPlaces from "@/components/topDestionations";
import RecommendedCorousel from "@/components/recommendedCorousel";
import getCities from "@/actions/get-cities";

export const revalidate = 0;

export default async function Home() {
  const cities = await getCities();
  const offeredCities = await getCities({ isOffered: true });
  console.log(offeredCities);
  return (
    <div>
      <Billboard cities={cities} />
      <div className="items-center justify-center flex">
        <RecommendedCorousel cities={offeredCities}/>
      </div>
      <TopPlaces />
      <Footer />
    </div>
  );
}
