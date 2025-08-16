import VideoComponent from '@/app/components/Player/video_and_fallback';
import MaxWidthWrapper from '@/app/components/Wrappers/max_width_wrapper';
import SkillCard from '@/app/components/Cards/skill_card';
import {
  MongodbIcon,
  NextJsIcon,
  ThreeJsIcon
} from '@/app/components/Icons/index';
import Link from 'next/link';
import Image from 'next/image';
import { TbBrandTypescript } from 'react-icons/tb';
import { IoLogoElectron } from 'react-icons/io5';
import { generateSignedUrl } from '@/utils/generate_signed_url';
import { RiJavascriptLine } from 'react-icons/ri';
import { RiTailwindCssFill } from 'react-icons/ri';

export default function Home() {
  const signedVideoUrl = generateSignedUrl();

  return (
    <div className="flex flex-col mt-[-80px]">
      {/* Video Background */}
      <div className="h-[90vh] flex items-center relative w-full">
        {/* Background Video */}
        <div className="video-container relative w-full h-full flex justify-start items-center pointer-events-none">
          {/* Video Component */}
          {signedVideoUrl ? (
            <VideoComponent src={signedVideoUrl} type="video/mp4" />
          ) : (
            <div className="absolute inset-0 w-full h-full">
              <Image
                src="/setup.jpg"
                alt="Developer setup"
                fill
                style={{ objectFit: 'cover' }}
                priority
                className="z-[-1]"
              />
            </div>
          )}

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black opacity-80 z-10 pointer-events-none" />

          {/* Content */}
          <div className="relative z-20 w-full h-full flex items-center justify-center px-0 sm:px-12">
            <div className="text-white z-30 w-full lg:max-w-[1000px] ml-8 md:ml-12">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold">
                Timothy White
              </h1>
              <p className="mt-4 text-xl sm:text-3xl lg:text-4xl">
                A Personal Portfolio.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <MaxWidthWrapper>
        <div className="p-8 sm:p-20 bg-gray-100 text-black flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="w-full md:w-2/3 pr-0 md:pr-12">
            <h2 className="text-4xl sm:text-5xl font-bold mb-2">About Me</h2>
            {/* Subtitle */}
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Timothy White | Brighton, UK
            </h3>
            <p className="text-lg sm:text-xl mb-4 leading-relaxed">
              {' '}
              Hi, I&apos;m Timothy White, a full-stack developer specialising in
              full-stack web solutions. I have developed various applications,
              including those for drone, automotive, and camera calibration
              systems.{' '}
            </p>{' '}
            <p className="text-lg sm:text-xl mb-4 leading-relaxed">
              I’m also an instructor in the Army Cadets, helping young people
              develop their skills and confidence. Outside of work, you’ll often
              find me pursuing my love for bodybuilding and continuously working
              on personal development projects.
            </p>
            <p className="text-lg sm:text-xl leading-relaxed">
              I’m always eager to take on new challenges and explore
              technologies.
            </p>
          </div>

          {/* Circle Section */}
          <div className="w-full md:w-1/3 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="w-[500px] h-[500px] bg-black rounded-sm overflow-hidden flex items-center justify-center relative">
              <Image
                src="/images/tim.JPG"
                alt="Profile picture - Timothy White"
                fill
                style={{ objectFit: 'cover' }}
                sizes="100%"
              />
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper bgColor="bg-gray-300">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Experience</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Over the years, I’ve worked on a variety of exciting projects,
            building full-stack solutions for advanced automotive technology and
            drone systems. Here are some highlights of my professional journey.
          </p>

          <div className="grid gap-7 grid-flow-row">
            <div className="space-y-6">
              {/* LearningCog */}
              <div className="relative bg-white p-6 rounded-md shadow-md">
                {/* Badge for Date */}
                <span className="badge  h-auto max-h-[40px] absolute left-1/2 transform -translate-x-1/2 -top-4 bg-[#22d3ee] text-black font-bold px-6 py-3 rounded-full text-large mt-1 w-[65vw] sm:w-auto">
                  July 2025 - Present
                </span>

                {/* Experience Details */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 mt-4">
                  Mid-Level Software Developer - LearningCog Ltd
                </h3>
                <p className="text-md sm:text-lg text-gray-700 mb-2">
                  Hybrid - Full Time
                </p>

                {/* First Paragraph */}
                <ul className="text-lg sm:text-xl mb-4 leading-relaxed list-disc pl-5">
                  <li>
                    Building full-stack solutions: one project using Django, and
                    another using Python FastAPI, React, Flutter, and
                    PostgreSQL.
                  </li>
                  <li>
                    Working in a small, agile team with technical freedom over
                    design, architecture, and technology choices.
                  </li>
                  <li>
                    Responsible for project architecture, design, and
                    implementation.
                  </li>
                  <li>Agile project management, including sprint planning.</li>
                </ul>
              </div>

              {/* Sycurio Experience */}
              <div className="relative bg-white p-6 rounded-md shadow-md">
                {/* Badge for Date */}
                <span className="badge  h-auto max-h-[40px] absolute left-1/2 transform -translate-x-1/2 -top-4 bg-[#22d3ee] text-black font-bold px-6 py-3 rounded-full text-large mt-1 w-[65vw] sm:w-auto">
                  January 2025 - July 2025
                </span>

                {/* Experience Details */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 mt-4">
                  Front-End Developer - Sycurio Ltd
                </h3>
                <p className="text-md sm:text-lg text-gray-700 mb-2">
                  Hybrid - Full Time
                </p>

                {/* First Paragraph */}
                <ul className="text-lg sm:text-xl mb-4 leading-relaxed list-disc pl-5">
                  <li>
                    Building and maintaining secure frontend solutions for
                    eCommerce based products.
                  </li>
                  <li>
                    Developing e2e & component unit tests for existing
                    solutions.
                  </li>
                  <li>
                    Improving app performance & bundle sizes (opted for vanilla
                    solutions).
                  </li>
                  <li>Working in a small, agile team.</li>
                  <li>
                    Delivered my final-year University project to Sycurio - a
                    full-stack solution (React.js, Node.js, and PostgresSQL)
                    hosted on their servers (included project management,
                    gathering requirements through questionnaires, and coding
                    the solution out of office hours).
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              {/* Continental Engineering Services Experience */}
              <div className="relative bg-white p-6 rounded-md shadow-md">
                {/* Badge for Date */}
                <span className="badge  h-auto max-h-[45px] absolute left-1/2 transform -translate-x-1/2 -top-4 bg-[#22d3ee] text-black font-bold px-6 py-3 rounded-full text-large mt-1 w-[65vw] sm:w-auto">
                  August 2021 - November 2024
                </span>

                {/* Experience Details */}
                <h3 className="text-2xl sm:text-3xl font-bold mb-2 mt-4">
                  Software Test Engineer - Continental Engineering Services Ltd
                </h3>
                <p className="text-md sm:text-lg text-gray-700 mb-2">
                  Apprenticeship - Full Time
                </p>

                {/* First Paragraph */}
                <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                  Although my title is **Software Test Engineer**, my experience
                  has been focused on building full-stack web applications,
                  whether it&apos;s creating responsive websites or developing
                  desktop applications using <strong>Electron.js</strong>.
                  I&apos;ve had extensive experience delivering projects, in an{' '}
                  <strong>agile</strong> environment, that combine both frontend
                  and backend solutions.
                </p>

                {/* Second Paragraph */}
                <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                  At Continental Engineering Services, I have been deeply
                  involved in developing full-stack <strong>3D</strong>{' '}
                  automotive simulations using modern technologies like{' '}
                  <strong>React.js</strong>, <strong>Node.js</strong>,{' '}
                  <strong>Three.js</strong>, <strong>Electron.js</strong>, and{' '}
                  <strong>Python</strong>. These simulations help automotive
                  engineers test and optimise vehicle components in a virtual
                  environment, reducing physical testing and accelerating the
                  design process.
                </p>

                {/* Third Paragraph */}
                <p className="text-lg sm:text-xl mb-4 leading-relaxed">
                  Additionally, I&apos;ve worked on developing{' '}
                  <strong>drone and camera calibration systems</strong> that
                  ensure high-precision data collection for automotive
                  calibration projects. These systems are used in the
                  calibration of autonomous vehicle sensors, ensuring that
                  cameras and drones accurately capture environmental data and
                  vehicle movement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper bgColor="bg-gray-200">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Skills</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Here&apos;s a collection of my core programming skills, including
            frontend and backend technologies.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <SkillCard
              title="JavaScript"
              experienceStartYear={2021}
              icon={<RiJavascriptLine />}
              link="https://www.javascript.com"
            >
              Proficient in JavaScript for building interactive web applications
              and enhancing user experiences. Strong understanding of ES6+.
            </SkillCard>

            <SkillCard
              title="TypeScript"
              experienceStartYear={2021}
              icon={<TbBrandTypescript />}
              link="https://www.typescriptlang.org"
            >
              Skilled in TypeScript for building robust and maintainable web
              applications, enhancing code quality and developer experience.
            </SkillCard>
            <SkillCard
              title="React.js"
              experienceStartYear={2021}
              icon="fa-brands fa-react"
              link="https://reactjs.org"
            >
              Proficient in developing dynamic, responsive web applications
              using React.js, focusing on performance and user experience.
            </SkillCard>
            <SkillCard
              title="Node.js"
              experienceStartYear={2021}
              icon="fa-brands fa-node-js"
              link="https://nodejs.org"
            >
              Skilled in building server-side applications with Node.js,
              enabling efficient and scalable backend services.
            </SkillCard>

            <SkillCard
              title="Python"
              experienceStartYear={2021}
              icon="fa-brands fa-python"
              link="https://www.python.org"
            >
              Experience in Python programming for various applications, from
              web development to automation and data analysis.
            </SkillCard>

            <SkillCard
              title="Electron.js"
              experienceStartYear={2021}
              icon={<IoLogoElectron />}
              link="https://www.electronjs.org"
            >
              Expertise in creating cross-platform desktop applications with
              Electron.js, integrating web technologies into desktop apps.
            </SkillCard>
            <SkillCard
              title="Tailwind CSS"
              experienceStartYear={2021}
              icon={<RiTailwindCssFill />}
              link="https://tailwindcss.com"
            >
              Proficient in using Tailwind CSS for building responsive and
              modern web interfaces, focusing on utility-first design
              principles.
            </SkillCard>

            <SkillCard
              title="MongoDB"
              experienceStartYear={2022}
              icon={<MongodbIcon />}
              link="https://www.mongodb.com"
            >
              Proficient in using MongoDB, a NoSQL database, for developing
              scalable and flexible database solutions.
            </SkillCard>

            <SkillCard
              title="AWS"
              experienceStartYear={2022}
              experienceEndYear={2024}
              icon="fa-brands fa-aws"
              link="https://aws.amazon.com"
            >
              Familiar with Amazon Web Services (AWS), leveraging cloud
              infrastructure for hosting, storage, and deployment solutions.
            </SkillCard>

            <SkillCard
              title="Next.js"
              experienceStartYear={2021}
              icon={<NextJsIcon />}
              link="https://nextjs.org"
            >
              Experienced in building server-side rendered applications and
              static websites with Next.js, focusing on performance and SEO.
            </SkillCard>

            <SkillCard
              title="Three.js"
              experienceStartYear={2022}
              icon={<ThreeJsIcon />}
              link="https://threejs.org"
            >
              Proficient in creating 3D graphics and animations using Three.js,
              enabling immersive and interactive web experiences.
            </SkillCard>

            <SkillCard
              title="PHP"
              experienceStartYear={2023}
              experienceEndYear={2025}
              icon="fa-brands fa-php"
              link="https://www.php.net"
            >
              Skilled in PHP for server-side scripting, enabling dynamic web
              content and robust backend solutions.
            </SkillCard>
          </div>
        </div>
      </MaxWidthWrapper>

      <MaxWidthWrapper bgColor="bg-gray-200">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {' '}
            What i&apos;m learning
          </h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            I am currently learning and showing interest in the lnaguages below,
            focusing on building efficient and scalable applications. I am also
            exploring the capabilities of <strong>Vue.js</strong> for frontend
            development.
          </p>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            <SkillCard
              title="Rust"
              experienceStartYear={2025}
              icon="fa-brands fa-rust"
              link="https://github.com/timwhite06/chess-rust-and-javascript"
            >
              Creating a chess game using JavaScript and Rust. Exploring
              Rust&apos;s websocket capabilities and database integration.{' '}
              <br />
              <b>Click to go to project.</b>
            </SkillCard>
            <SkillCard
              title="Vue.js"
              experienceStartYear={2025}
              icon="fa-brands fa-vuejs"
              link="https://timwhite06-vuejs-sorting-algorithms.netlify.app/"
            >
              This is a sorting algorithm visualiser built using Vue.js. It
              allows users to visualise various sorting algorithms in action.
              <br />
              <b>Click to go to project.</b>
            </SkillCard>{' '}
            <SkillCard
              title="Golang"
              experienceStartYear={2025}
              icon="fa-brands fa-golang"
              link="https://go.dev/doc/"
            >
              Currently reading the documentation to learn the fundamentals of
              Go programming.
            </SkillCard>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* UX Design */}
      <MaxWidthWrapper bgColor="bg-white">
        <div className="container text-black bg-gray-300 p-8 rounded-xl">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">UX Favourites</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Discover some of my top picks in UX design - the bits I use day to
            day.
          </p>

          {/* UX Favourites Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Favorite Font: Montserrat */}
            <div className="card shadow-lg bg-gray-200">
              <div className="card-body">
                <h2 className="card-title">Favourite Font</h2>
                <p className="text-lg">
                  <span className="badge badge-primary text-lg p-3 mr-1">
                    Montserrat
                  </span>
                  is my go-to font for clean, modern web designs. Its
                  versatility and readability make it perfect for both headings
                  and body text.
                </p>
              </div>
            </div>

            {/* Favorite Design Tool: Figma */}
            <div className="card shadow-lg bg-gray-200">
              <div className="card-body">
                <h2 className="card-title">Favourite Design Tool</h2>
                <p className="text-lg">
                  <span className="badge badge-secondary text-lg p-3 mr-1">
                    Figma
                  </span>
                  is my favorite design tool for prototyping and collaboration.
                  Its powerful features make it easy to create and iterate on
                  user interfaces.
                </p>
              </div>
            </div>

            {/* Random UX Favourite */}
            <div className="card shadow-lg bg-gray-200">
              <div className="card-body">
                <h2 className="card-title">Random Favourite</h2>
                <p className="text-lg">
                  <span className="badge badge-accent text-lg p-3 mr-1">
                    Dark Mode
                  </span>
                  is one of my favorite UX design features. It helps reduce eye
                  strain and makes interfaces look sleek and modern
                  <br />
                  Bit ironic, because I made this website in light mode!
                </p>
              </div>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Education & Certifications Section */}
      <MaxWidthWrapper bgColor="bg-gray-300">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Education & Certifications
          </h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            My academic background and relevant certifications.
          </p>

          {/* Education Details */}
          <div className="space-y-6">
            {/* University Degree */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                University
              </h3>
              <p className="text-md sm:text-lg text-gray-700 mb-2">
                University of Chichester | September 2021 - Expected Graduation:
                July 2025
              </p>
              <p className="text-lg sm:text-xl mb-4">
                Currently, I am pursuing a 2:1 in{' '}
                <strong>
                  BSc (Hons) Digital and Technology Solutions (Software
                  Engineering)
                </strong>
                . I am in my final year of study, attending university 1 day a
                week while working on personal and professional development
                projects.
              </p>
              <p className="text-lg sm:text-xl font-semibold">
                Relevant Modules:
              </p>
              <ul className="list-disc list-inside text-lg sm:text-xl leading-relaxed">
                <li>Developing a Real System For a Customer</li>
                <li>Project Management</li>
                <li>Web User Experience</li>
                <li>Python</li>
                <li>Java</li>
                <li>PHP and an SQL Database using PHPMyAdmin</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                College - Sixth Form
              </h3>
              <p className="text-md sm:text-lg text-gray-700 mb-2">
                St Paul&apos;s Catholic College | September 2019 - July 2021
              </p>
              <p className="text-lg sm:text-xl mb-4">
                I studied an A Level in Computer Science & a double BTEC in
                Business.
              </p>
              <p className="text-lg sm:text-xl font-semibold">Grades:</p>
              <ul className="list-disc list-inside text-lg sm:text-xl leading-relaxed">
                <li>Computer Science: A</li>
                <li>Double BTEC Business: D* D*</li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">GCSEs</h3>
              <p className="text-md sm:text-lg text-gray-700 mb-2">
                Warden Park Academy | September 2014 - July 2019
              </p>
              <p className="text-lg sm:text-xl font-semibold">Grades:</p>
              <ul className="list-disc list-inside text-lg sm:text-xl leading-relaxed">
                <li>Product Design: 7</li>
                <li>Computer Science: 6</li>
                <li>Maths: 6</li>
                <li>History: 6</li>
                <li>English Language: 6</li>
                <li>English Literature: 5</li>
                <li>Chemistry: 5</li>
                <li>Physics: 5</li>
                <li>Biology: 5</li>
              </ul>
            </div>

            {/* Certifications */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-2xl sm:text-3xl font-bold mb-2">
                Relevant Certifications
              </h3>
              <ul className="list-disc list-inside text-lg sm:text-xl leading-relaxed">
                <li>First Aid At Work + Tourniquet (FAAW+T)</li>
              </ul>
            </div>
          </div>
        </div>
      </MaxWidthWrapper>

      {/* Contact Section */}
      <MaxWidthWrapper bgColor="bg-gray-100">
        <div className="container text-black px-0">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Contact</h2>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Interested in working together or just want to say hi? Get in touch!
          </p>
          {/* Email Button */}
          <div className="flex justify-start">
            <Link
              href="mailto:timothywhitedevelopment@gmail.com"
              className="bg-white text-black px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-gray-200 break-all whitespace-normal text-left"
            >
              timothywhitedevelopment@gmail.com
            </Link>
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
