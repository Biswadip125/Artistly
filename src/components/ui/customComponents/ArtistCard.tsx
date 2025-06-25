import React, { useEffect, useState } from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../card";
import { IndianRupee, MapPin } from "lucide-react";
import { Button } from "../button";
import { Artist } from "@/types/artist";
import toast from "react-hot-toast";

type ArtistCardProps = {
  artist: Artist;
};

export const ArtistCard = ({ artist }: ArtistCardProps) => {
  const [isCtaButtonClicked, setIsCtaButtonClicked] = useState(false);

  useEffect(() => {
    if (!isCtaButtonClicked) return;

    const timer = setTimeout(() => {
      setIsCtaButtonClicked(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [isCtaButtonClicked]);

  return (
    <div className="">
      <Card className="px-4 ">
        {/*Card Title */}
        <CardTitle className="flex justify-between items-center">
          <h1 className="text-gray-900 font-semibold"> {artist.name}</h1>
          <div className="px-4 py-2 bg-gray-300 rounded-full text-gray-900">
            {artist.category}
          </div>
        </CardTitle>

        {/*Card Description */}
        <CardDescription className="flex flex-col gap-4">
          <div className="flex items-center gap-1">
            <IndianRupee size={15} color={"black"} className="mt-1" />
            <p className="text-black">{artist.price.toLocaleString("en-IN")}</p>
          </div>
          <div className="flex items-center gap-1">
            <MapPin size={15} color={"black"} />
            <p className="text-black">{artist.location}</p>
          </div>
        </CardDescription>

        {/*CTA Button */}

        <CardFooter className="p-0">
          <Button
            className="w-full text-center cursor-pointer hover:bg-gray-800 transition-all disabled:bgo-gray-800/10"
            disabled={isCtaButtonClicked}
            onClick={() => {
              setIsCtaButtonClicked(true);
              toast.success(
                "Quote request sent successfully to the artist manager!"
              );
            }}
          >
            Ask for quote
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
