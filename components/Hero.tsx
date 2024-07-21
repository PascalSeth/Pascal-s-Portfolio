import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";

const Hero = () => {
  return (
    <div className=" pb-20 pt-36 flex items-center justify-center flex-col overflow-hidden">
      {/* Spotlights */}
      {/* <div className="absolute inset-0 overflow-hidden">
        <Spotlight
          className="absolute -top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="absolute h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight
          className="absolute left-80 top-28 h-[80vh] w-[50vw]"
          fill="blue"
        />
      </div> */}

      {/* Grid Background */}
      {/* <div
        className="absolute inset-0 flex items-center justify-center dark:bg-black-100 bg-black dark:bg-grid-white/[0.03] bg-grid-black-100/[0.03]"
      > */}
        {/* Radial Gradient */}
        {/* <div
          className="absolute inset-0 pointer-events-none flex items-center justify-center dark:bg-black-100 bg-black"
          style={{ maskImage: "radial-gradient(ellipse_at_center,transparent_20%,black)" }}
        />
      </div> */}

      <div className="relative mt-5 z-10 flex flex-col items-center justify-center">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Dynamic Web Magic with Next.js
          </p>

          {/* Text Generate Effect */}
          <TextGenerateEffect
            words="Transforming Concepts into Seamless User Experiences"
            className="text-center text-[40px] md:text-5xl lg:text-6xl mt-4"
          />

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4">
            Hello! I&apos;m Pascal, a passionate Next.js Developer from Ghana. I specialize in creating dynamic and responsive web applications with a keen eye for design and user experience. With extensive experience in both front-end and back-end development, I enjoy crafting seamless interfaces using technologies like React, Next.js, and Tailwind CSS. On the back-end, I work with Node.js, Express, and Prisma to build robust and scalable server-side solutions. Let&apos;s build something amazing together!
          </p>

          <MagicButton
            title="Show my work"
            icon={<FaLocationArrow />}
            position="right"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
