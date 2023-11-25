'use client';
import { Socials } from "@/lib/config/experience";
import { ChildProps } from "@/lib/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../core/Typography";
import InfiniteLogoSlider from "../effects/InfiniteLogoSlider";
import Icon from "../icons/icons";
import ExperienceItems from "./ExperienceItems";
import GridCard from "./GridCard";
import { fadeInDelays100 } from "@/lib/utillities/animations";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const GridItem = ({ children }: ChildProps) => (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[4] }} className="grid--card perspective dark:grid--card dark:border-dark dark:text-white flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-16 justify-center items-center gap-y-4">
        {children}
    </motion.div>
);

export default function Grid() {
    return (
        <>
            <SectionTitle><motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[2], delay: fadeInDelays100[3] }}>Who dis?</motion.span></SectionTitle>
            <section className="flex mt-[60px] mb-[60px]  max-md:flex-col gap-l max-md:items-stretch custom-height">
                <div className="flex flex-col items-stretch max-md:w-full">
                    <div className="flex grow flex-col gap-m">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[2], delay: fadeInDelays100[4] }} className="grid--card dark:grid--card dark:border-dark gap-s self-stretch w-full justify-center items-center flex flex-col p-3.5 rounded-16">
                            <ExperienceItems />
                        </motion.div>
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
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[6] }} className="flex flex-col items-stretch w-[67%] max-md:w-full">
                    <div className="flex gap-l grow flex-col  max-md:max-w-full">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[7] }} className="self-stretch max-md:max-w-full">
                            <section className="flex max-md:flex-col max-md:items-stretch gap-l">
                                <div className="flex flex-col items-stretch max-md:w-full">
                                    <div className="p-default
                                    border grid--card dark:grid--card dark:border-dark  flex items-center justify-center sm:w-[270px] max-w-full grow flex-col rounded-16">
                                        <Tooltip>
                                            <TooltipContent>I have no idea what to put here. UI is hard man</TooltipContent>
                                            <TooltipTrigger>
                                                <p className="geistOldp-4 perspective flex items-center justify-center text-center text-[#a3a3a3]  ">
                                                    You can purcashe this spot for only €100,- per month.
                                                </p>
                                            </TooltipTrigger>
                                        </Tooltip>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch max-md:w-full w-screen">
                                    <div className="body-dark-accent flex sm:h-[250px] flex-col rounded-16  max-md:max-w-full w-full overflow-hidden">
                                        <GridCard />
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[10] }} className="p-[32px] flex  justify-center grid--card dark:grid--card infinite-slider dark:border-dark  w-full gap-[40px] flex-col rounded-16 overflow-hidden grid--card h-full items-center">
                            <h4 className="regular-font text-2xl experience-title libre
                            ">My stack</h4>
                            <div className="flex flex-col gap-l">
                                <InfiniteLogoSlider />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </section>
        </>
    );
}