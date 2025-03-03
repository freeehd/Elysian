"use client";

import type React from "react";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ReactPlayer from "react-player";
import { ChevronDown } from "lucide-react";
import RotatingText from "./ui/rotating-text";

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="relative overflow-hidden group rounded-full bg-transparent border-2 border-white text-white text-base sm:text-lg md:text-xl font-semibold py-2 sm:py-3 px-6 sm:px-8 md:px-12 transition-all duration-300 ease-in-out hover:bg-white hover:text-black active:bg-white active:text-black touch-manipulation">
      <span className="relative z-10">{children}</span>
    </button>
  );
};

const words = [
  "Innovations",
  "Revolutionary",
  "Transformative",
  "Pioneering",
  "Paradigm-shifting",
];

const useWordCycle = (words: string[], interval: number, cycles: number) => {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCycle((prevCycle) => {
        if (prevCycle >= cycles * words.length - 1) {
          clearInterval(timer);
          setCurrentWord(words[0]);
          return prevCycle;
        }
        setCurrentWord(words[(prevCycle + 1) % words.length]);
        return prevCycle + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [words, interval, cycles]);

  return currentWord;
};

export default function Guide() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1, 0]);

  const currentWord = useWordCycle(words, 2000, 2);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black min-h-[75vh] sm:min-h-[90vh] md:min-h-screen"
    >
      <motion.div
        className="absolute inset-0 h-[120%] sm:h-[110%] md:h-full -top-[10%] sm:-top-[5%] md:top-0"
        style={{ y, opacity: isVideoLoaded ? opacity : 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isVideoLoaded ? 1 : 0 }}
        transition={{ duration: 1 }}
      >
        <ReactPlayer
          url="/videos/bg-video-1.mp4"
          width="100%"
          height="100%"
          playing={true}
          loop={true}
          muted={true}
          playsinline={true}
          onReady={() => setIsVideoLoaded(true)}
          config={{
            file: {
              attributes: {
                style: {
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                  top: 0,
                  left: 0,
                },
                playsInline: true,
                className:
                  "translate-y-[-15%] sm:translate-y-[-5%] md:translate-y-0",
              },
            },
          }}
        />
      </motion.div>
      <div className="absolute inset-0 bg-black bg-opacity-60 md:bg-opacity-40 pointer-events-none"></div>

      <div className="relative z-10 h-[75vh] sm:h-[90vh] md:h-screen flex flex-col justify-center items-center text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-center leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span className="inline-block mr-1 pb-2 sm:mr-2 left-0">Elysian</span>
          <span className="inline-block overflow-hidden font-mono align-bottom">
            <RotatingText
              texts={[
                "Innovations",
                "Revolutionary",
                "Transformative",
                "Pioneering",
                "Paradigm-shifting",
              ]}
              mainClassName="px-1.5 sm:px-2 md:px-3 bg-[#008080] text-white overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-md sm:rounded-lg"
              staggerFrom="first"
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={2000}
            />
          </span>
        </motion.h2>
        <motion.p
          className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 sm:mb-8 md:mb-10 max-w-2xl text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.2 }}
        >
          ENABLING TOMORROW. TODAY!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.2 }}
          className="mt-2"
        >
          <Button>
            <a href="/who-we-are" className="block py-1">
              Start Exploring
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-0 right-0 flex flex-col items-center text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <ChevronDown className="animate-bounce" size={20} />
      </motion.div>
    </section>
  );
}
