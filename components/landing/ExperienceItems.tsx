'use client';
import { GridIn, fadeScaleUp, smoothFadeUp } from "@/lib/animations";
import { WorkExperience } from "@/lib/experience";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function ExperienceItems() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 333);
    return () => clearTimeout(timeout);
  }, []);



  const highlightVariants = {
    initial: {
      borderColor: "transparent",
    },
    animate: {
      borderColor: "#3182CE",
    },
  };

  return (
    <motion.div
      className="grid gap-4 overflow-hidden"
      variants={GridIn}
      initial="initial"
      animate={show ? "animate" : "initial"}
    >
      {WorkExperience.map((work, index) => (
        <motion.div
          key={index}
          className={`self-stretch flex w-full flex-col grid--card-inner  border p-card-inner card-inner rounded-card-inner ${work.highlight ? "highlighted" : ""
            }`}
          animate={{ opacity: 1, y: 0, x: 0 }}
          transition={{

          }}
        >
          <div className="flex w-full flex-grow flex-row max-md:max-w-full items-baseline justify-start gap-12">
            <time className="experience-title text-16" style={{ whiteSpace: "nowrap" }}>
              <span className="font-[600]">{work.date}</span>
            </time>
            <div className="sub-title text-16 leading-25" style={{ whiteSpace: "nowrap" }}>
              <span className="font-[600]">{work.company}</span> <br /> {work.title} <br />
            </div>
          </div>
          {work.highlight && (
            <motion.div
              className="h-1 bg-theme mt-2"
              variants={highlightVariants}
              transition={{ duration: 0.3, repeat: Infinity, repeatType: "reverse" }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}