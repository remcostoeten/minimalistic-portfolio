'use client';
import React, { useRef } from 'react'
import { SectionTitle } from '../core/Typography'
import Link from 'next/link'
import Image from 'next/image'
import ShowcaseLabel from '../core/Labels'
import { blogPosts } from '@/core/config/BlogPosts'
import { fadeInDelays100 } from '@/core/utillities/animations'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function LatestBlogSingle() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const transformXprogress = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const articles = [
        { title: "Environment variables in NextJS", anchor: "https://snippets.remcostoeten.com/Components-nextjs-react/env" },
        { title: "UseMouseHover hook in NextJS", anchor: "https://snippets.remcostoeten.com/Components-nextjs-react/hover-hook" },
        { title: "My ZSH config", anchor: "https://snippets.remcostoeten.com/Linux/zshrc-config" },
        { title: "Fix git upstream prior to pushing", anchor: "https://snippets.remcostoeten.com/Miscellaneous/git-upstream" },
        { title: "Protect routes with password in NextJS", anchor: "https://snippets.remcostoeten.com/Components-nextjs-react/password-protected-route" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const childVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
            <div className='flex gap-4 flex-col'>
                <SectionTitle><motion.span
                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[12] }}
                >Somesomesomething</motion.span> </SectionTitle>
                <div className='blog-preview'>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            ref={ref}
                            transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[15] }}
                            style={{
                                scale: scaleProgess,
                                transform: `translateX(${transformXprogress}%)`,
                                opacity: opacityProgess,
                            }}
                            className={`highlighted blog-highlighted sm:w-1/3 flex p-[14px] gap-[24px] flex-col blog-card bg-[#151515] rounded-[16px] overflow-hidden shadow-lg ${post.highlighted ? 'highlighted' : ''}`}>
                            <Link href={post.url} className="geist flex gap-1 justify-between items-center text-sm single">
                                <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[13] }} className='flex gap-2'>
                                    {Array.isArray(post.label) ? post.label.map((label, index) => (
                                        <ShowcaseLabel key={index}>{label}</ShowcaseLabel>
                                    )) : <ShowcaseLabel>{post.label}</ShowcaseLabel>}
                                </motion.span>
                                <motion.div
                                    initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[14] }}
                                    className="flex items-center text-gray-400">
                                    <svg
                                        className=" h-5 w-5"
                                        fill="none"
                                        height="24"
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        width="24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <circle cx="12" cy="12" r="10" />
                                        <polyline points="12 6 12 12 16 14" />
                                    </svg>  <span className="ml-2">{post.readTime}</span>
                                </motion.div>
                            </Link>
                            <motion.span initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[16] }}>

                                <Image
                                    alt="Blog image"
                                    className="object-cover rounded-lg bg-[#151515]"
                                    height="250"
                                    src={post.imageSrc}
                                    style={{
                                        objectFit: "cover",
                                        borderRadius: "16px",
                                    }}
                                    width="500"
                                />
                            </motion.span>
                            <div className="flex justify-between items-start py-2 px-2">
                                <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[17] }}>
                                    <h3 className="font-bold text-xl mb-2 line-clamp-2 text-white text-[24px]">{post.title}</h3>
                                    <p className="text-[#a3a3a3] line-clamp-2 geist text-16">
                                        {post.description}
                                    </p>
                                </motion.div>
                                <motion.div className="ml-4" initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[18] }}>
                                    <Link href={post.url} target="_blank">
                                        <svg
                                            className=" h-6 w-6 text-white"
                                            fill="none"
                                            height="24"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            width="24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M7 7h10v10" />
                                            <path d="M7 17 17 7" />
                                        </svg>
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <motion.div className="mt-10"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                <ul>
                    {articles.map((article, index) => (
                        <motion.li
                            ref={ref}
                            style={{
                                scale: scaleProgess,
                                transform: `translateX(${transformXprogress}%)`,
                                opacity: opacityProgess,
                            }}
                            className="group"
                            key={index}
                            variants={childVariants}
                        >
                            <Link target="_blank"
                                className="flex px-2 py-4 justify-between items-center text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white group-hover:translate-x-1 transition-transform transition-colors ease-bezier"
                                href={article.anchor}
                            >
                                <span>{article.title}</span>
                                <IconAngleupright className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </Link>
                            <hr className="border-[#57534e] hover:border-white transition-colors ease-bezier" />
                        </motion.li>
                    ))}
                </ul>
                <Link href='https://snippets.remcostoeten.com/' target="_blank"
                    className="inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-14 px-6 py-2 w-max text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white transition-colors ease-bezier w-full p-40 mt-4"
                >
                    Read more on my snippets page
                </Link>
            </motion.div >
        </>
    )
}

function IconAngleupright(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
        </svg>
    );
}
