'use client';
import Logo from '@/components/core/Logo';
import Navigation from '@/components/core/Navigation';
import { SubTitle } from '@/components/core/Typography';
import Sprinkle from '@/components/effects/Sprinkle';
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
        <div className='pt-[40px] contained flex flex-col gap-[64px]'>
            <motion.div variants={reveal} initial="hidden" animate="show" className=" flex justify-between  flex-col gap-2 text-center ">
                <motion.div variants={menuItemAnimation} className="flex flex-row justify-between items-center gap-4">
                    <motion.div variants={menuItemAnimation} className="flex flex-col gap-4">
                        <motion.span variants={menuItemAnimation} className="flex flex-col gap-1">
                            <div className='flex gap-1 items-center relative'>
                                <Link href='/' className='absolute -left-10 -bottom-2'>
                                    <Logo /></Link>
                                <Sprinkle className='text-4xl font-medium text-gray-100 block box-border leading-6 m-0 p-0 text-left no-underline break-words antialiased geist' t1='Remco ' t2='' />
                            </div>
                            <SubTitle isGeist>
                                <SwappingWords
                                    words={[
                                        'Divjesschuiver',
                                        'Aspiring fullstack',
                                        'Senior in not finishing projects',
                                        'Recovering Magento developer',
                                    ]}
                                    interval={4000} />
                            </SubTitle>
                        </motion.span>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: -25 }}
                        transition={{
                            duration: .4,
                            delay: 1,
                        }}
                        className='relative'
                        animate={{ opacity: 1, y: 0 }}
                    >
                        <span className="wave absolute -right-10 -top-2 scale-[].5]" style={{ fontSize: '50px' }}>
                            👋
                        </span>
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