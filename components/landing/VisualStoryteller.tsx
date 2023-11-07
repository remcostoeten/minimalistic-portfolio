

'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import ShowcaseLabel from '../core/Labels';
import { ProjectData } from '@/config/data/ProjectData';
import { Button, ButtonGroup } from '@nextui-org/react';
import { GhostButton } from '../core/buttons';
import Link from 'next/link';
import useInView from '@/hooks/useInView';
import { motion } from 'framer-motion';

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
    <div>
      <div style={{
        maxHeight: isExpanded ? 'none' : '1200px',
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
              className="w-[650px] geist pt-10 mt-10 max-w-full ml-5 mb-8 self-start"
              initial={{ opacity: 0, y: 10, x: 15 }}
              transition={{
                duration: .4,
                delay: .8,
                staggerChildren: 1.1
              }}
              animate={{ opacity: 1, y: 0, x: 0 }}
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
                    <p className="text-gray-400 text-lg self-start max-md:max-w-full">
                      {data.description.split('\n').map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                    <div
                      className="shadow-sm bg-zinc-300 flex w-[600px] h-[300px] flex-col mt-10 rounded-lg self-start max-md:max-w-full max-md:mt-10"
                    />
                    <motion.div
                      className="flex w-[296px] max-w-full items-start gap-2.5 mt-2 self-start max-md:justify-center"
                      initial="hidden"
                      animate="show"
                      variants={{
                        hidden: { opacity: 0 },
                        show: {
                          opacity: 1,
                          transition: {
                            staggerChildren: 1.1
                          }
                        }
                      }}
                    >
                      <div className="flex gap-2">
                        {data.labels.map((label, index) => (
                          <motion.div
                            key={index}
                            variants={{
                              hidden: { y: 20, opacity: 0 },
                              show: { y: 0, opacity: 1, scale: 3 }
                            }}
                            transition={{
                              staggerChildren: 1.1
                            }}
                          >
                            <ShowcaseLabel>{label}</ShowcaseLabel>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                    <Button variant='ghost'
                      type="button"
                      className="border bg-transparent bg-opacity-90 w-fit flex justify-center items-center text-[#F2F5F6] text-sm py-2 flex-col mt-3 rounded-md border-solid border-neutral-600 self-start max-md:max-w-full text-"
                      aria-label="View project"
                    >
                      <Link href={data.url} target="_blank">
                        View Project
                      </Link>
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
          <><div className='fade absolute'></div>
            <Button variant='ghost' onClick={handleReadMoreClick} className="fade-in">
              View more
            </Button>
          </>
        )}
      </motion.span>
    </div>
  );
}