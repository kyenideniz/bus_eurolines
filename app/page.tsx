import Footer from "@/components/footer";
import Billboard from "@/components/billboard";

import TopPlaces from "@/components/topDestionations";
import RecommendedCorousel from "@/components/recommendedCorousel";

export const revalidate = 0;

export default async function Home() {
  
  return (
    <div>
      
      <Billboard />
      <div className="items-center justify-center flex">
        <RecommendedCorousel />
      </div>
      <TopPlaces />
      <Footer />
    </div>
  );
}
