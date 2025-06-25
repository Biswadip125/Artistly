import CategoryCards from "@/components/ui/customComponents/CategoryCards";
import HeroSection from "@/components/ui/customComponents/HeroSection";

export default function Home() {
  return (
    <div className=" flex flex-1 flex-col max-w-7xl mx-auto w-full px-4">
      <HeroSection />
      <CategoryCards />
    </div>
  );
}
