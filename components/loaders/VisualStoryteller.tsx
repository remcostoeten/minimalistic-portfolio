

'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ShowcaseLabel from '../core/Labels';
import { ProjectData } from '@/config/data/ProjectData';
import { Link, Button } from "@nextui-org/react";

import useInView from '@/hooks/useInView';
import { motion } from 'framer-motion';
import { fadeInDelays100 } from '@/lib/animations';

export default function VisualStoryteller() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, isVisible] = useInView({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  const handleReadMoreClick = () => {
    setIsExpanded(true);
  };

  return (
    <>
      <div style={{
        maxHeight: isExpanded ? '2250px' : '1000px',
        overflow: 'hidden',
        transition: 'max-height 0.5s ease-in-out'
      }}>
        {ProjectData.map((data, index) => {
          const [ref, isVisible] = useInView({
            threshold: 0.,
            freezeOnceVisible: true
          });

          return (
            <motion.section
              ref={ref}
              id="projects"
              key={index}
              className="w-[650px] geist pt-10 max-w-full ml-5 mb-8 self-start"
              initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[10] + index }}
            >
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 relative">
                <div
                  className="circle flex items-center justify-center align-middle w-10 h-10 rounded-full z-10 bg-[#e8e8e8] absolute -left-[22px] -top-0 max-md:hidden"
                >
                  {data.icon && <Image src={data.icon as string} width={30} height={30} alt="Html To JSX converter" />}
                </div>
                <div
                  className="flex flex-col items-stretch w-[2px] !h-[79%] top-[90px] bg-[#323333] absolute left-0 max-md:w-full max-md:ml-0 hover:bg-"
                />
                <div
                  className="flex flex-col items-stretch w-full ml-5 pl-4 max-md:w-full max-md:ml-0"
                >
                  <div className="flex gap-[10px] geist grow flex-col max-md:max-w-full max-md:mt-10">
                    <h4 className="text-gray-200 text-lg font-medium">
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
                      className="shadow-sm bg-zinc-300 flex w-[600px] h-[300px] flex-col rounded-lg self-start max-md:max-w-full"
                    />
                    <motion.div
                      className="flex w-[296px] max-w-full items-start gap-2.5 mt-2 self-start max-md:justify-center"
                      initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[11] + index }}
                    >
                      <div className="flex gap-2">
                        {data.labels.map((label, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { y: 20, opacity: 0, scale: 0.9 },
                              show: { y: 0, opacity: 1, scale: 1 }
                            }}
                            transition={{
                              staggerChildren: .3,
                              type: "spring",

                            }}
                          >
                            <ShowcaseLabel>{label}</ShowcaseLabel>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    <Button
                      href={data.url}
                      as={Link}
                      color="secondary"
                      // showAnchorIcon
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
      </div>
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
          <><div className='fade absolute'></div><Button variant='ghost' onClick={handleReadMoreClick} className="mt-10 fade-in">
            View more
          </Button></>
        )}
      </motion.span>
    </>
  );
}