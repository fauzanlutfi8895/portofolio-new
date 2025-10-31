"use client";

import { useIsMobile } from "./hooks/useIsMobile";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/TextAnimation/RotatingText/RotatingText";
import SplitText from "./components/TextAnimation/SplitText/SplitText";
import BlurText from "./components/TextAnimation/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import GradientText from "./components/TextAnimation/GradientText/GradientText/GradientText";
import CircularText from "./components/TextAnimation/CircularText/CircularText";

// UI
import { Timeline } from "./components/ui/timeline";

const description =
  "Software developer with 1+ years of hands-on experience building scalable, high-performance applications. Currently specializing in React, with strong focus on clean architecture, best practices, and performance optimization. Experienced in API integration, collaborative Git workflows, and agile work environments. Continuously sharpening backend and cloud fundamentals to grow as a well-rounded engineer and future tech leader.";

export default function Home() {
  const isMobile = useIsMobile();

  const data = [
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Built and launched Aceternity UI and Aceternity UI Pro from scratch</p>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://assets.aceternity.com/templates/startup-1.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-2.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">I usually run out of copy, but when I see content this big, I try to integrate lorem ipsum.</p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Lorem ipsum is for people who are too lazy to write copy. But we are not. Here are some more example of beautiful designs I built.</p>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://assets.aceternity.com/pro/hero-sections.png" alt="hero template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img src="https://assets.aceternity.com/pro/bento-grids.png" alt="bento template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img src="https://assets.aceternity.com/cards.png" alt="cards template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    {
      title: "Changelog",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">Deployed 5 new components on Aceternity today</p>
          <div className="mb-8">
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Card grid component</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Startup template Aceternity</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Random file upload lol</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Himesh Reshammiya Music CD</div>
            <div className="flex items-center gap-2 text-xs text-neutral-700 md:text-sm dark:text-neutral-300">✅ Salman Bhai Fan Club registrations open</div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://assets.aceternity.com/pro/hero-sections.png" alt="hero template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img
              src="https://assets.aceternity.com/features-section.png"
              alt="feature template"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <img src="https://assets.aceternity.com/pro/bento-grids.png" alt="bento template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img src="https://assets.aceternity.com/cards.png" alt="cards template" width={500} height={500} className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#19222D]">
      {/* Background Animation */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#444A29"
          hoverFillColor="#C6F10E"
        />
      </div>
      {/* Hero Section */}
      <div className="container mx-auto">
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-12"} mx-4 ${isMobile ? "min-h-auto" : "h-screen"}`}>
          {/* Kiri Lanyard */}
          <div className={`${isMobile ? "col-span-1 min-h-screen -top-32" : "col-span-6"} relative`}>
            {isMobile ? <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} /> : <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />}
            {!isMobile && (
              <CircularText text="CODING*WITH*FAUZAN*" onHover="speedUp" spinDuration={20} className="absolute top-50 right-28" />
            )}
          </div>
          {/* Kanan Content */}
          <div className={`${isMobile ? "col-span-1 min-h-screen" : "col-span-6"}`}>
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                {/* Ready */}
                <AnimatedContent distance={150} direction="horizontal" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>
                    <RotatingText
                      texts={["Web Development", "Web Developer", "Web Programming"]}
                      mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                      staggerFrom={"last"}
                      initial={{ y: "100%" }}
                      animate={{ y: 0 }}
                      exit={{ y: "-120%" }}
                      staggerDuration={0.025}
                      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                      transition={{ type: "spring", damping: 30, stiffness: 400 }}
                      rotationInterval={2000}
                    />
                  </div>
                </AnimatedContent>
                {/* Name */}
                <div className="flex flex-col items-start">
                  <SplitText text="I'm Fauzan Luthfi" className="text-6xl font-semibold text-start" delay={50} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" />
                  <SplitText text="Full Stack Developer" className="text-6xl font-semibold text-start text-[#C6F10E]" delay={75} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" />
                </div>
                {/* Description */}
                <div>
                  <BlurText text={description} delay={50} animateBy="words" direction="top" className="text-xl mb-8" />
                  <div className="flex items-center">
                    <GradientText colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]} animationSpeed={3} showBorder={false} className="px-6 py-3 rounded-lg border">
                      Contact Me
                    </GradientText>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline at Bottom */}
      <div className="relative w-full overflow-clip">
        <Timeline data={data} />
      </div>
    </div>
  );
}
