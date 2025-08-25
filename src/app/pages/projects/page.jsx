// MaxWidthWrapper Component
import MaxWidthWrapper from "@/app/components/Wrappers/max_width_wrapper";
import { FaVuejs } from "react-icons/fa";
import { SiNx } from "react-icons/si";
import { NextJsIcon } from "@/app/components/Icons";
import ProjectCard from "@/app/components/Cards/project_card";
import Image from "next/image";

// List of all projects
const projects = [
  {
    key: "vue-js-sorting-algo-app",
    title: "Vue JS Sorting Algorithm Visualiser",
    description:
      "A sorting algorithm visualiser built using Vue.js. It allows users to visualise various sorting algorithms in action.",
    image: "/images/sorting.png",
    link: "https://timwhite06-vuejs-sorting-algorithms.netlify.app/",
    bgColor: "bg-gray-100",
    icon: (
      <div className="text-5xl">
        <FaVuejs />
      </div>
    ),
  },
  {
    key: "weather-app",
    title: "Weather App",
    description:
      "Uses Visual Crossings free weather API to display the current weather for a given location. Uses NX for monorepo, Next JS, and TypeScript.",
    image: "/images/weatherlightning.jpg",
    link: "https://weather-app-2-kappa-silk.vercel.app/",
    bgColor: "bg-gray-100",
    icon: (
      <div className="text-5xl">
        <SiNx />
      </div>
    ),
  },
  {
    key: "chess-game",
    title: "Chess Game",
    description:
      "A chess game built using JavaScript and Rust. Exploring Rust's websocket capabilities and database integration.",
    image: "/images/chess.jpg",
    link: "https://github.com/timwhite06/chess-rust-and-javascript",
    bgColor: "bg-gray-100",
    icon: "fa-brands fa-rust",
  },
  {
    key: "portfolio",
    title: "Portfolio Website",
    description:
      "A personal portfolio website built using Next.js and Tailwind CSS.",
    image: "/images/setup.jpg",
    link: "https://github.com/timwhite06/timothy-white-development",
    bgColor: "bg-gray-100",
    icon: <NextJsIcon />,
  },
  {
    key: "downloader",
    title: "YouTube mp4 & mp3 Downloader",
    description:
      "A command line application that allows users to download YouTube videos in mp4 and mp3 formats.",
    image: "/images/youtube_pexel.jpg",
    link: "https://github.com/timwhite06/youtube-video-audio-downloader",
    bgColor: "bg-gray-100",
    icon: "fa-brands fa-python",
  },
];

const Page = () => {
  return (
    <div className="flex flex-col mt-[-80px]">
      {/* Video Background Section */}
      <div className="min-h-[50vh] flex items-center relative w-full">
        {/* Background Video Container */}
        <div className="video-container relative w-full h-full min-h-[50vh] flex justify-start items-center pointer-events-none">
          <div className="absolute inset-0 w-full h-full">
            <Image
              src="/images/setup.jpg"
              alt="Developer setup"
              fill
              style={{ objectFit: "cover" }}
              priority
              className="z-[-1]"
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-80 z-10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-20 w-full h-full flex items-center justify-center px-0 sm:px-12">
            <div className="text-white z-30 w-full lg:max-w-[1000px] ml-8 md:ml-12">
              {/* Title Section */}
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold">
                Timothy White
              </h1>
              <p className="mt-4 text-xl sm:text-3xl lg:text-4xl">
                A Showcase.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      {/* Portfolio / Projects Section */}
      <MaxWidthWrapper bgColor="bg-gray-100">
        <div className="container text-black px-0">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Projects</h1>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Here are some of the key projects I&apos;ve worked on recently.
          </p>
          {/* List projects with links to GitHub, live demos, etc. */}

          {/* Project Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={project.key}
                className={`${
                  projects.length % 2 !== 0 && index === projects.length - 1
                    ? "md:col-span-2"
                    : ""
                }`}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  link={project.link}
                  bgColor={project.bgColor}
                  icon={project.icon}
                />
              </div>
            ))}
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Page;
