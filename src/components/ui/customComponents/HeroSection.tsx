import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="flex md:flex-row flex-col md:gap-20 gap-8 md:py-16 py-4 px-4 lg:px-0 h-full w-full">
      {/*Left section of hero  */}
      <div className="md:w-1/2 w-full md:py-24 py-10">
        <h1 className="text-4xl font-bold text-gray-900 italic">
          Discover and Book Top Performing Artists
        </h1>
        <p className="text-lg text-gray-600 md:mt-4 mt-8">
          Artistly connects event planners with singers, dancers, DJs, and more.
          Explore artist profiles, manage bookings, and bring your event to
          life.
        </p>
        <Link href="/artists">
          <button className="md:mt-6 mt-10 px-6 py-3 rounded-xl bg-gray-900 text-white cursor-pointer hover:bg-gray-800 hover:scale-105 transition-all  duration-300">
            Explore Artists
          </button>
        </Link>
      </div>

      {/*Right Section of Hero */}
      <div className="md:w-1/2 w-full h-[500px] relative ">
        <Image
          src="/Artistly_Hero_Image.jpg"
          alt="hero_image"
          fill
          className="rounded-2xl object-cover hover:scale-105 tranistion-all duration-300"
        />
      </div>
    </section>
  );
};

export default HeroSection;
