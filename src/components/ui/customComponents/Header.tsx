import { Guitar } from "lucide-react";
import Link from "next/link";

const Header = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Artists",
      link: "/artists",
    },
    {
      name: "Onboard",
      link: "/onboarding",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      {/*Logo Section */}
      <div className="relative">
        <h1 className="italic text-2xl font-bold">Artistly</h1>
        <Guitar className="absolute top-1.5 left-[81px] z-10  rotate-[-50deg]" />
      </div>

      {/*Links*/}
      <div className="flex items-center gap-6">
        {links.map((elem) => (
          <Link
            href={elem.link}
            key={elem.name}
            className="text-base text-center font-normal"
          >
            {elem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
