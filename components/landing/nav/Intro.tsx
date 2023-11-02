'use client';
import { motion } from 'framer-motion';
import { PageTitle, SubTitle } from "@/components/core/Typography";
import SwappingWords from "@/components/effects/SwappingWords";
import { links } from "@/lib/data/menulinks";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
    const container = {
        hidden: { opacity: 0, y: 50 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5,
                duration: 1,
                delay: 0.5
            }
        }
    }

    const item = {
        hidden: { opacity: 0 },
        show: { opacity: 1, y: 0 }

    }

    return (
        <motion.div variants={container} initial="hidden" animate="show" className=" w-[1200px] flex justify-between py-10 flex flex-col gap-2 px-8 text-center justify-center">
            <motion.div variants={item} className="flex flex-row justify-center items-center gap-4">
                <motion.div variants={item} className="flex flex-col gap-4">
                    <motion.span variants={item} className="flex flex-col gap-1">
                        <PageTitle isGeist>Remco</PageTitle>
                        <SubTitle isGeist>
                            <SwappingWords
                                words={[
                                    'Frontend developer!',
                                    'Divjesschuiver',
                                    'Aspiring fullstacks',
                                    'Decent guy',
                                ]}
                                interval={2000} />
                        </SubTitle>
                    </motion.span>
                    <motion.nav initial={{ opacity: 0, y: 10 }}
                        transition={{
                            duration: .4,
                            delay: .8,
                        }}
                        animate={{ opacity: 1, y: 0 }}
                        className="items-center justify-start flex flex-row flex-nowrap gap-6 h-auto overflow-hidden relative w-full p-0">
                        {links.map((link, index) => (
                            <motion.div variants={item} key={index}>
                                <Link href={link.hash} className="text-base  geist text-white">
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                    </motion.nav>
                </motion.div>
                <motion.div initial={{ opacity: 0, y: -25 }}
                    transition={{
                        duration: .4,
                        delay: 1,
                    }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <Image src="/remco.jpeg"
                        width={90} height={90} alt="Avatar Remco Stoeten" className="rounded-full" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}