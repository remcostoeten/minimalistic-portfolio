'use client';
import React from "react";
import { motion } from "framer-motion";
import CompanyIcons from "../icons/icons";
import { fadeInUp } from "@/lib/animations";
import Icon from "../icons/icons";


export default function Grid() {
    return (
        <motion.div className="px-5" initial="hidden" animate="visible">
            <section className="flex max-md:flex-col gap-l max-md:items-stretch">
                <motion.div
                    className="flex flex-col items-stretch max-md:w-full"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="flex grow flex-col gap-m w-[360px]"
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="bg-grid gap-s self-stretch flex w-full flex-col p-3.5  rounded-2xl"
                            variants={fadeInUp}
                        >
                            <motion.div
                                className="self-stretch flex w-full flex-col bg-card-inner pt-5 pb-7 px-5 rounded-xl"
                                variants={fadeInUp}
                            >
                                <div className="flex w-full flex-grow flex-row max-md:max-w-full items-baseline justify-start gap-12">
                                    <div className="text-theme text-xs">2014 - 2016</div>
                                    <div className="text-black text-base">
                                        Pleio <br /> Frontend developer <br />
                                    </div>
                                </div>
                            </motion.div>
                            <motion.div
                                className="self-stretch flex w-full h-[81px] bg-card-inner flex-col rounded-xl "
                                variants={fadeInUp}
                            />
                            <motion.div
                                className="self-stretch flex w-full h-[81px] flex-col bg-card-inner rounded-xl"
                                variants={fadeInUp}
                            />
                            <motion.div
                                className="bg-card-inner self-stretch flex w-full pr-0 flex-col pl-0.5 rounded-xl "
                                variants={fadeInUp}
                            >
                                <motion.div
                                    className="self-stretch z-[1] flex w-full h-[81px] flex-col bg-card-inner rounded-xl"
                                    variants={fadeInUp}
                                />
                            </motion.div>
                        </motion.div>
                        <motion.div
                            className="self-stretch gap-m flex items-start justify-between"
                            variants={fadeInUp}
                        >
                            <motion.div
                                className="bg-grid flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-2xl"
                                variants={fadeInUp}
                            />
                            <motion.div
                                className="bg-grid flex h-[161px] flex-col grow shrink-0 basis-auto flex-1 rounded-2xl"
                                variants={fadeInUp}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="flex flex-col items-stretch w-[67%] max-md:w-full"
                    variants={fadeInUp}
                >
                    <motion.div
                        className="flex gap-l grow flex-col w-[741px] max-md:max-w-full"
                        variants={fadeInUp}
                    >
                        <motion.div
                            className="self-stretch max-md:max-w-full"
                            variants={fadeInUp}
                        >
                            <section className="flex max-md:flex-col max-md:items-stretch  gap-l">
                                <motion.div
                                    className="flex flex-col items-stretch  max-md:w-full"
                                    variants={fadeInUp}
                                >
                                    <motion.div
                                        className="border bg-grid flex flex items-center justify-center w-[270px] max-w-full grow flex-col  rounded-2xl "
                                        variants={fadeInUp}
                                    >
                                        <Icon src="gitlab" alt="GitLab Icon" width={110} height={110} />

                                    </motion.div>
                                </motion.div>
                                <motion.div
                                    className="flex flex-col items-stretch  max-md:w-full w-screen"
                                    variants={fadeInUp}
                                >
                                    <motion.div
                                        className="border bg-grid flex  h-[234px] flex-col rounded-2xl border-solid border-white border-opacity-0 max-md:max-w-full w-full"
                                        variants={fadeInUp}
                                    />
                                </motion.div>
                            </section>
                        </motion.div>
                        <motion.div
                            className="border bg-neutral-200 self-stretch flex w-full flex-col-reverse rounded-2xl border-solid border-white border-opacity-0 max-md:max-w-fullC h-full"
                            variants={fadeInUp}
                        />
                    </motion.div>
                </motion.div>
            </section>
        </motion.div>
    );
}