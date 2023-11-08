'use client';
import { GridItemsData } from "@/lib/experience";
import { motion } from "framer-motion";
import React from "react";
import { Cta } from "../core/buttons";
import InfiniteLogoSlider from "../effects/InfiniteLogoSlider";
import Icon from "../icons/icons";
import ExperienceItems from "./ExperienceItems";
import GridCard from "./GridCard";
import CountingNumber from "../effects/CountingNumbers";
import { ChildProps } from "@/lib/types/types";
import TextRevealSkew from "../effects/TextRevealSkew";


const GridItem = ({ children }: ChildProps) => (

    <motion.div initial={{ opacity: 0, y: 50 }} transition={{ delay: 0.9, duration: 0.4 }} animate={{ opacity: 1, y: 0 }} className="body-dark-accent perspective dark:body-dark-accent dark:border-dark dark:text-white flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-16 justify-center items-center gap-y-4">
        {children}
    </motion.div>
);

export default function Grid() {
    return (
        <><h2 className="text-white text-centet text-3xl pb-4">

            <TextRevealSkew className="text-center" placeholderText={[
                { type: "heading1", text: "About me" },
            ]} />
        </h2><section className="flex   max-md:flex-col gap-l max-md:items-stretch">


                <div className="flex flex-col items-stretch max-md:w-full">
                    <div className="flex grow flex-col gap-m">
                        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }} className="body-dark-accent dark:body-dark-accent dark:border-dark gap-s self-stretch w-full justify-center items-center flex flex-col p-3.5 rounded-16">
                            <ExperienceItems />
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{
                                duration: 1.2,
                                delay: 0.85
                            }}
                            className="self-stretch gap-m flex items-center justify-center">
                            {GridItemsData.map((data, index) => (
                                <GridItem key={index}>
                                    <h4 className="text-16 text-color-light">{data.title}</h4>
                                    <h3 className="text-color text-22 text-2xl font-black">
                                        <CountingNumber start={0} end={data.count} duration={2} delay={index * .2} />{data.countSuffix}
                                    </h3>
                                </GridItem>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{
                    duration: 1.2,
                    delay: 0.7
                }}
                    className="flex flex-col items-stretch w-[67%] max-md:w-full">
                    <div className="flex gap-l grow flex-col w-[741px] max-md:max-w-full">
                        <motion.div
                            initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{
                                duration: 1.2,
                                delay: 0.25
                            }}
                            className="self-stretch max-md:max-w-full">
                            <section className="flex max-md:flex-col max-md:items-stretch gap-l">
                                <div className="flex flex-col items-stretch max-md:w-full">
                                    <div className="border body-dark-accent dark:body-dark-accent dark:border-dark  flex items-center justify-center w-[270px] max-w-full grow flex-col rounded-16">
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
                        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{
                            duration: 1.2,
                            delay: 1.2
                        }} className="p-[32px] flex body-dark-accent dark:body-dark-accent infinite-slider dark:border-dark  w-full gap-[40px] flex-col rounded-16 overflow-hidden body-dark-accent h-full items-center">
                            <h2 className="text-28  text-white/60 text-center ">My Stack</h2>
                            <div className="flex flex-col gap-l">
                                <InfiniteLogoSlider />
                            </div>
                        </motion.div>
                        <Cta>Learn more</Cta>
                    </div>
                </motion.div>
            </section></>
    );
}
