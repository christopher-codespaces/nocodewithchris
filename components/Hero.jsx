import Link from "next/link";
import Image from "next/image";
import Levels from "./assets/levels.png";

const Hero = () => (
  <section className="pt-12 from-gray-50 via-white to-gray-50">
    <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div className="grid max-w-md grid-cols-1 mx-auto lg:grid-cols-12 gap-x-6 gap-y-8 lg:max-w-none">
        <div className="self-center lg:col-span-4">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl">Hey 👋 I am Christopher Makombe, building my tech career.</h1>
          <p className="mt-5 text-base font-normal leading-7 text-gray-500">I am a young tech entreprenuer chasing stars,listen to my story below.</p>
          <div className="relative inline-flex mt-9 group">
            <div className="absolute transition-all duration-1000 opacity-70 inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg filter group-hover:opacity-100 group-hover:duration-200"></div>

            <a
              href="biography"
              title=""
              className="relative inline-flex items-center justify-center px-8 py-3 sm:text-sm sm:py-3.5 text-base font-semibold text-white transition-all duration-200 bg-black border border-transparent rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
              role="button"
            >
              My Story
            </a>
          </div>
        </div>

        <div className="self-end lg:order-last lg:pb-20 lg:col-span-3">
          <p className="text-xs font-bold tracking-widest text-gray-500 uppercase">⚡️ Best Software Developer</p>
          {/* Add your latest picks content here */}
        </div>

        <div className="self-end lg:col-span-5">
          <Image className="w-full mx-auto" src={Levels} width={800} height={80} alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
