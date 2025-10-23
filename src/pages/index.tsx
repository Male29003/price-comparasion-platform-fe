import CategorySection from "@/components/Home/CategorySection";
import HotDealsSection from "@/components/Home/HotDealSection";
import TopGamesSection from "@/components/Home/TopGameSection";

export default function HomePage() {
  return (
    <div>
      <CategorySection />
      <HotDealsSection />
      <TopGamesSection />
    </div>
  );
}
