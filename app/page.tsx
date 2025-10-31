"use client";

import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/TextAnimation/RotatingText/RotatingText";
import SplitText from "./components/TextAnimation/SplitText/SplitText";
import BlurText from "./components/TextAnimation/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import GradientText from "./components/TextAnimation/GradientText/GradientText/GradientText";
import CircularText from "./components/TextAnimation/CircularText/CircularText";

const description =
  "Software developer with 1+ years of hands-on experience building scalable, high-performance applications. Currently specializing in React, with strong focus on clean architecture, best practices, and performance optimization. Experienced in API integration, collaborative Git workflows, and agile work environments. Continuously sharpening backend and cloud fundamentals to grow as a well-rounded engineer and future tech leader.";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full">
        <Squares
          speed={0.3}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#444A29"
          hoverFillColor="#C6F10E"
        />
      </div>

      <div className="container mx-auto h-screen">
        <div className="grid grid-cols-12 mx-4">
          {/* Kiri Lanyard */}
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText text="CODING*WITH*FAUZAN*" onHover="speedUp" spinDuration={20} className="absolute top-50 right-28" />
          </div>
          {/* Kanan Content */}
          <div className="col-span-6">
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
    </div>
  );
}
