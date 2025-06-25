"use client";

import artists from "@/data/artists.json";
import { Artist } from "@/types/artist";
import { ArtistCard } from "./ArtistCard";
import { useFilterContext } from "@/context/FilterContext";

const ArtistCards = () => {
  const { filters } = useFilterContext();

  const isInPriceRange = (price: number, range: string) => {
    const [min, max] = range
      .split(" - ")
      .map((r) => parseInt(r.trim().replace(",", "")));

    return price >= min && price <= max;
  };

  const filteredArtistLists = artists.filter((artist) => {
    const mathchesCategory = filters.Category
      ? artist.category === filters.Category
      : true;

    const matchesLocation = filters.Location
      ? artist.location === filters.Location
      : true;

    const matchesPriceRange = filters["Price Range"]
      ? isInPriceRange(artist.price, filters["Price Range"])
      : true;

    const matchesSearchTerm = filters.SearchTerm
      ? artist.name.toLowerCase().includes(filters.SearchTerm.toLowerCase())
      : true;

    return (
      mathchesCategory &&
      matchesLocation &&
      matchesPriceRange &&
      matchesSearchTerm
    );
  });

  return filteredArtistLists.length > 0 ? (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {filteredArtistLists.map((artist: Artist) => (
        <ArtistCard key={artist.id} artist={artist} />
      ))}
    </div>
  ) : (
    <p className="text-center">No such Results Found for this filter</p>
  );
};

export default ArtistCards;
