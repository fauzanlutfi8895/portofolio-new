"use client";

import dynamic from "next/dynamic";
import { useMemo, Suspense } from "react";
import { useIsMobile } from "./hooks/useIsMobile";
import Squares from "./components/Squares/Squares";
import { timelineData } from "./const/timelineData";

// Dynamic imports for better performance
const Lanyard = dynamic(() => import("./components/Lanyard/Lanyard"), { ssr: false });
const RotatingText = dynamic(() => import("./components/TextAnimation/RotatingText/RotatingText"), { ssr: true });
const SplitText = dynamic(() => import("./components/TextAnimation/SplitText/SplitText"), { ssr: true });
const BlurText = dynamic(() => import("./components/TextAnimation/BlurText/BlurText"), { ssr: true });
const AnimatedContent = dynamic(() => import("./components/AnimatedContent/AnimatedContent"), { ssr: true });
const GradientText = dynamic(() => import("./components/TextAnimation/GradientText/GradientText/GradientText"), { ssr: true });
const CircularText = dynamic(() => import("./components/TextAnimation/CircularText/CircularText"), { ssr: false });
const Timeline = dynamic(() => import("./components/ui/timeline").then(mod => ({ default: mod.Timeline })), { ssr: true });

const description =
  "Software developer with 1+ years of hands-on experience building scalable, high-performance applications. Currently specializing in React, with strong focus on clean architecture, best practices, and performance optimization. Experienced in API integration, collaborative Git workflows, and agile work environments. Continuously sharpening backend and cloud fundamentals to grow as a well-rounded engineer and future tech leader.";

export default function Home() {
  const isMobile = useIsMobile();

  // Memoize timeline data to prevent unnecessary recalculations
  const mappedData = timelineData.map(item => ({
    title: item.year,
    content: (
      <div>
        <p>{item.text}</p>
        {item.extra && (
          <ul className="mt-2 list-disc pl-4 text-sm opacity-80">
            {item.extra.map((ex: string, i: number) => (
              <li key={i}>{ex}</li>
            ))}
          </ul>
        )}
      </div>
    ),
    image: item.image, // ✅ array
  }));

  const memoData = useMemo(() => mappedData, []);

  return (
    <div className="min-h-screen bg-[#19222D]">
      {/* Background Animation */}
      <div className="fixed  top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#444A29"
          hoverFillColor="#C6F10E"
        />
      </div>
      {/* Hero Section */}
      <div className="container mx-auto px-3 sm:px-4 md:px-6">
        <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-12"} gap-4 md:gap-8 ${isMobile ? "min-h-auto py-8" : "h-screen"}`}>
          {/* Kiri Lanyard - Hidden on mobile for performance */}
          {!isMobile && (
            <div className="col-span-6 relative">
              <Suspense fallback={<div className="w-full h-full bg-black" />}>
                <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
              </Suspense>
              <CircularText text="CODING*WITH*FAUZAN*" onHover="speedUp" spinDuration={20} className="absolute top-50 right-28" />
            </div>
          )}
          {/* Kanan Content */}
          <div className={`${isMobile ? "col-span-1" : "col-span-6"} flex items-center`}>
            <div className="flex flex-col gap-4 md:gap-6 w-full">
              {/* Ready */}
              <AnimatedContent distance={150} direction="horizontal" reverse={false} duration={1.2} ease="power3.out" initialOpacity={0.2} animateOpacity scale={1.1} threshold={0.2} delay={0.3}>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl md:text-2xl text-white font-bold">I'm Ready For Job</h1>
                  <RotatingText
                    texts={["Web Development", "Web Developer", "Web Programming"]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg text-lg sm:text-xl md:text-2xl font-bold inline-flex transition-all"
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
                <SplitText text="I'm Fauzan Luthfi" className="text-3xl sm:text-5xl md:text-6xl font-semibold text-start" delay={50} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" />
                <SplitText text="Full Stack Developer" className="text-3xl sm:text-5xl md:text-6xl font-semibold text-start text-[#C6F10E]" delay={75} duration={0.6} ease="power3.out" splitType="chars" from={{ opacity: 0, y: 40 }} to={{ opacity: 1, y: 0 }} threshold={0.1} rootMargin="-100px" textAlign="center" />
              </div>
              {/* Description */}
              <div>
                <BlurText text={description} delay={50} animateBy="words" direction="top" className="text-sm sm:text-base md:text-lg mb-6 md:mb-8" />
                <div className="flex items-center">
                  <GradientText colors={["#40ffaa", "#C6F10E", "#40ffaa", "#C6F10E", "#40ffaa"]} animationSpeed={3} showBorder={false} className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg border text-sm sm:text-base">
                    Contact Me
                  </GradientText>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Timeline at Bottom */}
      <div className="relative w-full overflow-clip">
        <Timeline data={memoData} />
      </div>
    </div>
  );
}
