'use client';
import { Socials } from "@/core/config/experience";
import { ChildProps } from "@/core/types/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { Paragraph, SectionTitle } from "../core/Typography";
import Icon from "../icons/icons";
import { fadeInDelays100 } from "@/core/utillities/animations";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Spinner from "../loaders/Spinners";
import { Suspense, lazy, useRef } from "react";

const InfiniteLogoSlider = lazy(() => import('../effects/InfiniteLogoSlider'));
const ExperienceItems = lazy(() => import('./ExperienceItems'));
const GridCard = lazy(() => import('./GridCard'));


const GridItem = ({ children }: ChildProps) => (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[4] }} className="grid--card perspective dark:grid--card dark:border-dark dark:text-white flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-16 justify-center items-center gap-y-4">
        {children}
    </motion.div>
);

export default function Grid() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]) as any;
    const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]) as any;
    return (
        <>
            <SectionTitle>
                <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[2], delay: fadeInDelays100[3] }}>Who dis?</motion.span>
            </SectionTitle>
            <section
                ref={ref}
                style={{
                    scale: scaleProgress,
                    opacity: opacityProgress,
                }}
                className="flex mt-[60px] mb-[60px]  max-md:flex-col gap-l max-md:items-stretch custom-height">
                <div className="flex flex-col items-stretch max-md:w-full">
                    <div className="flex grow flex-col gap-m">
                        <Suspense fallback={<Spinner size="small" />}>
                            <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[2], delay: fadeInDelays100[4] }} className="grid--card dark:grid--card dark:border-dark gap-s self-stretch w-full justify-center items-center flex flex-col p-3.5 rounded-16">
                                <ExperienceItems />
                            </motion.div>
                        </Suspense>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[5] }} className="self-stretch gap-m flex items-center justify-center">
                            {Socials.map((data) => (
                                <GridItem key={data.name}>
                                    <Link href={data.url} target="_blank">
                                        <Image src={data.icon} alt={data.name} width='60' height='60' />
                                    </Link>
                                </GridItem>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[6] }} className="flex flex-col items-stretch w-fit max-md:w-full">
                    <div className="flex gap-l grow flex-col  max-md:max-w-full">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[7] }} className="self-stretch max-md:max-w-full">
                            <section className="flex max-md:flex-col max-md:items-stretch gap-l">
                                <div className="flex flex-col items-stretch max-md:w-full">
                                    <div className="purcasche p-default
                                    border grid--card dark:grid--card dark:border-dark  flex items-center justify-center sm:w-[270px] max-w-full grow flex-col rounded-16">
                                        <Tooltip>
                                            <TooltipContent>I have no idea what to put here. UI is hard man</TooltipContent>
                                            <TooltipTrigger>
                                                <Paragraph>
                                                    You can purcashe this spot for only €100,- per month.
                                                </Paragraph>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch max-md:w-full">
                                    <div className="body-dark-accent flex sm:h-[250px] flex-col rounded-16  max-md:max-w-full w-full">
                                        <Suspense fallback={<Spinner size="small" />}>
                                            <GridCard />
                                        </Suspense>
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[10] }} className="p-[32px] flex  justify-center grid--card dark:grid--card infinite-slider dark:border-dark  w-full gap-[40px] flex-col rounded-16 overflow-hidden grid--card h-full items-center">
                            <h4 className="regular-font text-2xl experience-title libre
                            ">My stack</h4>
                            <Suspense fallback={<Spinner size="small" />}>
                                <InfiniteLogoSlider />
                            </Suspense>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}