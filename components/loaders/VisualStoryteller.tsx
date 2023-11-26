

'use client'
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import ShowcaseLabel from '../core/Labels';
import { ProjectData } from '@/config/data/ProjectData';
import { Link, Button } from "@nextui-org/react";

import useInView from '@/hooks/useInView';
import { SectionTitle } from '../core/Typography';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function VisualStoryteller() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.5, 1]);
  const transformXprogress = useTransform(scrollYProgress, [0, 1], [0, 100]);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleReadMoreClick = () => {
    setIsExpanded(true);
  };

  const displayedProjects = isExpanded || !isMobile ? ProjectData : ProjectData.slice(0, 1);

  return (
    <>
      <SectionTitle>
        Things I made
      </SectionTitle>
      <div style={{
        maxHeight: isExpanded ? (window.innerWidth <= 768 ? '650px' : '2250px') : '1000px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out'
      }}>
        {displayedProjects.map((data, index) => {
          const [ref, isVisible] = useInView({
            threshold: 0.,
            freezeOnceVisible: true
          });

          return (
            <motion.section
              initial={{ opacity: 0, y: 20, x: 15 }}
              animate={{ opacity: .5, y: 0, x: 0 }}
              transition={{ duration: .6, delay: 1 }}
              ref={ref}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
              }}
              id="projects"
              key={index}
              className="w-[650px] sm:pt-10 max-w-full sm:ml-5 mb-8 self-start"
            >
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 relative">
                <div
                  className="circle flex items-center justify-center align-middle w-10 h-10 rounded-full z-10 bg-[#e8e8e8] absolute -left-[22px] -top-0 max-md:hidden"
                >
                  {data.icon && <Image src={data.icon as string} width={30} height={30} alt="Html To JSX converter" />}
                </div>
                <div
                  className="hidden sm:flex flex-col items-stretch w-[2px] !h-[79%] top-[90px] bg-[#323333] absolute left-0 max-md:w-full max-md:ml-0 hover:bg-"
                />
                <div
                  className="flex flex-col items-stretch w-full sm:ml-5 sm:pl-4 max-md:w-full max-md:ml-0"
                >
                  <div className="flex gap-[10px] grow flex-col max-md:max-w-full max-md:mt-10">
                    <h4 className="text-gray-200 text-lg font-medium regular-font">
                      {data.title}
                    </h4>
                    <p className="text-gray-400 text-md self-start max-md:max-w-full">
                      {data.description.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <div
                      className="shadow-sm bg-zinc-300 flex sm:w-[600px] w-full h-[300px] flex-col rounded-lg self-start max-md:max-w-full overflow-hidden">
                      {data.image && <Image className='object-cover' src={data.image as string} width={600} height={600} alt={data.description} />}
                    </div>
                    <div
                      className="flex w-fulls sm:w-[296px] max-w-full items-start gap-2.5 mt-2 self-start max-md:justify-center mb-4"
                    >
                      <div className="flex gap-2 overflow-x-no-scrollbar flex-wrap sm:flex-nowrap">
                        {data.labels.map((label, index) => (
                          <div className='w-auto'
                            key={index}
                          >
                            <ShowcaseLabel>{label}</ShowcaseLabel>
                          </div>
                        ))}
                      </div>
                    </div>
                    <Button
                      href={data.url}
                      as={Link}
                      color="secondary"
                      variant="ghost"
                      target='_blank'
                      className='text-[#fff] border-[#282828]'
                    >
                      View Project
                    </Button>
                  </div>
                </div>
              </div>

            </motion.section>
          );
        })}
      </div >
      <motion.span className="mx-10" initial={{ opacity: 0, y: -120, x: 15 }}
        transition={{
          duration: .4,
          delay: 1,
        }}
        animate={{ opacity: 1, y: 0, x: 0 }}
      >
        {isExpanded ? (
          <Button variant='ghost' onClick={() => setIsExpanded(false)} className="fade-in">
            View Less
          </Button>
        ) : (
          <><div className='fade absolute'></div><Button variant='ghost' onClick={handleReadMoreClick} className="block sm:flex mt-10 fade-in">
            View more
          </Button></>
        )}
      </motion.span >
    </>
  );
}