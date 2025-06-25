import React from "react";
import CategoryCard from "./CategoryCard";
import { Disc3, Megaphone, MicVocal, Move } from "lucide-react";

const CategoryCards = () => {
  const categories = [
    { title: "Singers", image: "/singer.jpg", link: "/", Icon: MicVocal },
    { title: "Dancers", image: "/dancer.jpg", link: "/", Icon: Move },
    { title: "DJs", image: "/dj.jpg", link: "/", Icon: Disc3 },
    {
      title: "Speakers",
      image: "/speaker.jpeg",
      link: "/",
      Icon: Megaphone,
    },
  ];

  return (
    <div className="mt-4">
      <h1 className="text-2xl font-bold ">Categories</h1>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-8 gap-10">
        {categories.map((category) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            image={category.image}
            link={category.link}
            Icon={category.Icon}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryCards;
