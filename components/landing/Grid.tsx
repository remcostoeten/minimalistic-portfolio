'use client';
import { Socials } from "@/lib/experience";
import { ChildProps } from "@/lib/types/types";
import { motion } from "framer-motion";
import Image from "next/image";
import { SectionTitle } from "../core/Typography";
import InfiniteLogoSlider from "../effects/InfiniteLogoSlider";
import Icon from "../icons/icons";
import ExperienceItems from "./ExperienceItems";
import GridCard from "./GridCard";
import { fadeInDelays100 } from "@/lib/animations";

let delay = 6;

const GridItem = ({ children }: ChildProps) => (
    <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[14] }} className="grid--card perspective dark:grid--card dark:border-dark dark:text-white flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-16 justify-center items-center gap-y-4">
        {children}
    </motion.div>
);

export default function Grid() {
    return (
        <>
            <SectionTitle><motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[5] }}>Who dis?</motion.span></SectionTitle>
            <section className="flex mt-[60px] mb-[60px]  max-md:flex-col gap-l max-md:items-stretch">
                <div className="flex flex-col items-stretch max-md:w-full">
                    <div className="flex grow flex-col gap-m">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[6] }} className="grid--card dark:grid--card dark:border-dark gap-s self-stretch w-full justify-center items-center flex flex-col p-3.5 rounded-16">
                            <ExperienceItems />
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[7] }} className="self-stretch gap-m flex items-center justify-center">
                            {Socials.map((data) => (
                                <GridItem>
                                    <Image src={data.icon} alt={data.name} width='60' height='60' />
                                </GridItem>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[8] }} className="flex flex-col items-stretch w-[67%] max-md:w-full">
                    <div className="flex gap-l grow flex-col  max-md:max-w-full">
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[9] }} className="self-stretch max-md:max-w-full">
                            <section className="flex max-md:flex-col max-md:items-stretch gap-l">
                                <div className="flex flex-col items-stretch max-md:w-full">
                                    <div className="border grid--card dark:grid--card dark:border-dark  flex items-center justify-center w-[270px] max-w-full grow flex-col rounded-16">
                                        <span className="perspective">
                                            <Icon src="gitlab" alt="GitLab Icon" width={110} height={110} />
                                        </span>
                                    </div>
                                </div>
                                <div className="flex flex-col items-stretch max-md:w-full w-screen">
                                    <div className="body-dark-accent flex h-[234px] flex-col rounded-16  max-md:max-w-full w-full overflow-hidden">
                                        <GridCard />
                                    </div>
                                </div>
                            </section>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[10] }} className="p-[32px] flex  justify-center grid--card dark:grid--card infinite-slider dark:border-dark  w-full gap-[40px] flex-col rounded-16 overflow-hidden grid--card h-full items-center">
                            <h4 className=" text-2xl experience-title">My stack</h4>
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