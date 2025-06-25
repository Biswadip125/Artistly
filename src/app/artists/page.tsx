import ArtistCards from "@/components/ui/customComponents/ArtistCards";
import Filterblock from "@/components/ui/customComponents/Filterblock";
import { FilterProvider } from "@/context/FilterContext";

const ArtistPage = () => {
  return (
    <FilterProvider>
      <div className="max-w-7xl mx-auto w-full px-4 flex flex-col gap-4">
        <Filterblock />
        <ArtistCards />
      </div>
    </FilterProvider>
  );
};

export default ArtistPage;
