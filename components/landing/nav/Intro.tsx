'use client';
import { PageTitle, SubTitle } from '@/components/core/Typography';
import SwappingWords from '@/components/effects/SwappingWords';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const links = [
    { name: 'Home', hash: '/' },
    { name: 'About', hash: '#about' },
    { name: 'Projects', hash: '#projects' },
    { name: 'Contact', hash: '#contact' },
    { name: 'Blackjack', hash: '/blackjack' },
];

const reveal = {
    hidden: { opacity: 0 },
    show: { opacity: 1, y: 0 }
};

const menuItemAnimation = {
    hidden: { opacity: 0, y: 35, x: 15 },
    show: { opacity: 1, y: 0, x: 0 },
    transition: {
        staggerChildren: 0.3,
        type: "tween",
        damping: 25,
        stiffness: 25,
        duration: 0.8,
        ease: "easeOut"
    },
};
const menuContainerAnimation = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            duration: 0.5
        },
    }
};


const Intro = () => {
    return (
        <div className='pt-[40px] contained geist flex flex-col gap-[64px]'>
            <motion.div variants={reveal} initial="hidden" animate="show" className=" flex justify-between  flex-col gap-2 text-center ">
                <motion.div variants={menuItemAnimation} className="flex flex-row justify-between items-center gap-4">
                    <motion.div variants={menuItemAnimation} className="flex flex-col gap-4">
                        <motion.span variants={menuItemAnimation} className="flex flex-col gap-1">
                            <PageTitle isGeist><Link href='/'>Remco</Link></PageTitle>
                            <SubTitle isGeist>
                                <SwappingWords
                                    words={[
                                        'Frontend developer!',
                                        'Divjesschuiver',
                                        'Aspiring fullstacks',
                                        'Recovering Magento developer',
                                    ]}
                                    interval={4000} />
                            </SubTitle>
                        </motion.span>
                        <motion.nav initial={{ opacity: 0, y: 10 }}
                            transition={{
                                duration: .4,
                                delay: .8,
                            }}
                            animate={{ opacity: 1, y: 0 }}
                            className="items-center justify-start flex flex-row flex-nowrap gap-6 h-auto  relative w-full p-0">
                            <motion.ul
                                variants={menuContainerAnimation}
                                initial="hidden"
                                animate="show"
                                className='flex gap-4'
                                transition={{ staggerChildren: 1.1 }}
                            >
                                {links.map((link, index) => (
                                    <motion.li
                                        initial={{ opacity: 0, y: 10, x: 15 }}
                                        transition={{
                                            duration: .4,
                                            delay: .8,
                                            staggerChildren: 1.1
                                        }}
                                        animate={{ opacity: 1, y: 0, x: 0 }}
                                        key={index}
                                    >
                                        <Link href={link.hash} className="text-base  geist text-white">
                                            {link.name}
                                        </Link>
                                    </motion.li>
                                ))}
                            </motion.ul>
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
            <motion.div className='w-[600px]' initial={{ opacity: 0, y: -25 }}
                transition={{
                    duration: .4,
                    delay: 1,

                }}
                animate={{ opacity: 1, y: 0 }}>

            </motion.div >
        </div >
    );
};

export default Intro;