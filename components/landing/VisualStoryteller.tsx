

'use client'
import { motion } from "framer-motion";
import Image from "next/image";
import ShowcaseLabel from "../core/Labels";
import { ProjectData } from "@/config/data/ProjectData";
import React, { useState } from "react";
import { Button } from "@nextui-org/react";
import { glowButton, Cta, CtaGhost, GhostButton } from "../core/buttons";
import Link from "next/link";

export default function VisualStoryteller(_props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMoreClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <div style={{
        maxHeight: isExpanded ? 'none' : '1280px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out'
      }}>     {ProjectData.map((data, index) => (
        <motion.section
          id="projects"
          key={index}
          className={`w-[650px] geist pt-10 mt-10 max-w-full ml-5 mb-8 self-start ${isExpanded ? 'fade-in' : ''}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1, type: "spring", stiffness: 100 }}
        >
          <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 relative">
            <motion.div
              className="circle flex items-center justify-center align-middle w-10 h-10 rounded-full z-10 bg-[#e8e8e8] absolute -left-[22px] -top-0 max-md:hidden"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0, duration: 1, type: "spring", stiffness: 100 }}
            >
              <Image src="/icons/react.svg" width={30} height={30} alt="Html To JSX converter" />
            </motion.div>
            <motion.div
              className="flex flex-col items-stretch w-[2px] !h-[79%] top-[90px] bg-[#323333] absolute left-0 max-md:w-full max-md:ml-0 hover:bg-"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "100%" }}
              transition={{ delay: 0.2, duration: 1, type: "spring", stiffness: 100 }}
            />
            <motion.div
              className="flex flex-col items-stretch w-full ml-5 pl-4 max-md:w-full max-md:ml-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="flex gap-[10px] geist grow flex-col max-md:max-w-full max-md:mt-10">
                <motion.h4
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="text-gray-200 text-lg font-medium"
                >
                  {data.title}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-gray-400 text-lg self-start max-md:max-w-full"
                >
                  {data.description.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      <br />
                    </React.Fragment>
                  ))}
                </motion.p>
                <motion.div
                  className="shadow-sm bg-zinc-300 flex w-[600px] h-[300px] flex-col mt-10 rounded-lg self-start max-md:max-w-full max-md:mt-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                />
                <motion.div
                  className="flex w-[296px] max-w-full items-start gap-2.5 mt-2 self-start max-md:justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <div className="flex gap-2">
                    {data.labels.map((label, index) => (
                      <ShowcaseLabel key={index}>{label}</ShowcaseLabel>
                    ))}
                  </div>
                </motion.div>
                <motion.button
                  type="button"
                  className="border bg-transparent bg-opacity-90 flex w-full flex justify-center items-center text-[#F2F5F6] text-sm py-2 flex-col mt-3 rounded-md border-solid border-neutral-600 self-start max-md:max-w-full text-"
                  aria-label="View project"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <Link href={data.url} target="_blank">
                    View Project
                  </Link>
                </motion.button>
              </div>
            </motion.div>

          </div>
        </motion.section>
      ))}
      </div>
      <span className="mx-10">
        {
          isExpanded ? (
            <GhostButton onClick={() => setIsExpanded(false)} className="fade-in">
              Read Less
            </GhostButton>
          ) : (
            <><div className="fade absolute"></div><GhostButton onClick={handleReadMoreClick} className="fade-in">
              Read More
            </GhostButton></>
    }
  }
        );
}
