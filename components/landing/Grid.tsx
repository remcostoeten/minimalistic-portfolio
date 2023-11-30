'use client';
import { Socials } from "@/core/config/experience";
import { ChildProps } from "@/core/types/types";
import { fadeInDelays100 } from "@/core/utillities/animations";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Suspense, lazy, useEffect, useRef, useState } from "react";
import { Paragraph, SectionTitle } from "../core/Typography";
import Spinner from "../loaders/Spinners";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const InfiniteLogoSlider = lazy(() => import('../effects/InfiniteLogoSlider'));
const ExperienceItems = lazy(() => import('./ExperienceItems'));
const GridCard = lazy(() => import('./GridCard'));


const GridItem = ({ children }: ChildProps) => (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[4] }} className=" grid--card perspective dark:grid--card dark:border-dark dark:text-white flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-16 justify-center items-center gap-y-4">
        {children}
    </motion.div>
);

export default function Grid() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [blobPosition, setBlobPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (event) => {
        const boundingRect = ref.current?.getBoundingClientRect();
        setMousePosition({
            x: event.clientX - (boundingRect?.left || 0),

            y: event.clientY - (boundingRect?.top || 0)
        });
    };

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };

    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]) as any;
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]) as any;
    return (
        <>
            <section
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                ref={ref}
            >
                <div className="flex sm:mt-[60px] mt-4 mb-[60px] sm:flex-row flex-col-reverse gap-l max-md:items-stretch custom-height">
                    <div className="flex z-10 flex-col items-stretch sm:w-8/12">
                        <div className="flex grow flex-col gap-m">
                            <Suspense fallback={<Spinner size="small" />}>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: fadeInDelays100[2],
                                        delay: fadeInDelays100[4],
                                    }}
                                    className=" grid--card dark:grid--card dark:border-dark gap-s self-stretch w-full justify-center items-center flex flex-col p-3.5 rounded-16"
                                >
                                    <ExperienceItems />
                                </motion.div>
                            </Suspense>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: fadeInDelays100[6],
                                    delay: fadeInDelays100[5],
                                }}
                                className="self-stretch gap-m flex items-center justify-center"
                            >
                                {Socials.map((data) => (
                                    <GridItem key={data.name}>
                                        <Link href={data.url} target="_blank">
                                            <Image src={data.icon} alt={data.name} width="60" height="60" />
                                        </Link>
                                    </GridItem>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: fadeInDelays100[6],
                            delay: fadeInDelays100[6],
                        }}
                        className="z-10 flex flex-col items-stretch "
                    >
                        <div className="flex gap-l grow flex-col ">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: fadeInDelays100[6],
                                    delay: fadeInDelays100[7],
                                }}
                                className="self-stretch sm:w-10/12"
                            >
                                <section className="flex max-md:flex-col max-md:items-stretch gap-l">
                                    <div className="hidden sm:flex flex-col items-stretch w-full ">
                                        <div className="purcasche p-default  border grid--card dark:grid--card dark:border-dark flex items-center justify-center sm:w-[270px] grow flex-col rounded-16">
                                            <Tooltip>
                                                <TooltipContent>I have no idea what to put here. UI is hard, man</TooltipContent>
                                                <TooltipTrigger>
                                                    <Paragraph>You can purcashe this spot for only €100,- per month.</Paragraph>
                                                </TooltipTrigger>
                                            </Tooltip>
                                        </div>
                                    </div>

                                    <div className="flex flex-col items-stretch ">
                                        <div className="body-dark-accent flex sm:h-[250px] flex-col rounded-16 ">
                                            <Suspense fallback={<Spinner size="small" />}>
                                                <GridCard />
                                            </Suspense>
                                        </div>
                                    </div>
                                </section>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: fadeInDelays100[6],
                                    delay: fadeInDelays100[10],
                                }}
                                className=" p-[32px] flex justify-center grid--card dark:grid--card infinite-slider dark:border-dark w gap-[40px] flex-col rounded-16 overflow-hidden grid--card sm:w-10/12 h-full items-center"
                            >
                                <h4 className="regular-font text-2xl experience-title libre">My stack</h4>
                                <Suspense fallback={<Spinner size="small" />}>
                                    <InfiniteLogoSlider />
                                </Suspense>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
                {isHovering && (
                    <motion.div className="blob"
                        initial={{ opacity: 0, }}
                        animate={{ opacity: 1, }}
                        style={{
                            position: "relative",
                            scale: scaleProgress,
                            opacity: opacityProgress,
                            animation: "blob-animation 20s infinite linear",
                        }}
                    >
                        <div className="blur blob"
                            style={{
                                position: "absolute",
                                top: mousePosition.y - 800,
                                left: mousePosition.x - 200,
                                width: "40vw",
                                height: "40vh",
                                zIndex: 2,
                                opacity: .1,
                                borderRadius: "50%",
                                background: "radial-gradient(circle, rgba(0,200,200,0.8) 0%, rgba(0,0,0,0.6) 100%)",
                                pointerEvents: "none",
                                filter: "blur(50px)",
                            }}
                        />
                    </motion.div>
                )}
            </section>
        </>
    );
}