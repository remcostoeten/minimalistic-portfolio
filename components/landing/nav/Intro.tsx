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

const item = {
    hidden: { opacity: 0, y: -25 },
    show: { opacity: 1, y: 0 }
};

const Intro = () => {
    return (
        <div className='pt-[40px] contained geist flex flex-col gap-[64px]'>
            <motion.div variants={reveal} initial="hidden" animate="show" className=" flex justify-between  flex-col gap-2 text-center ">
                <motion.div variants={item} className="flex flex-row justify-between items-center gap-4">
                    <motion.div variants={item} className="flex flex-col gap-4">
                        <motion.span variants={item} className="flex flex-col gap-1">
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