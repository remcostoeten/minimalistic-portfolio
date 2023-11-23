'use client';
import React from 'react'
import { SectionTitle } from '../core/Typography'
import Image from 'next/image'
import ShowcaseLabel from '../core/Labels'
import { blogPosts } from '@/lib/data/BlogPosts'
import Link from 'next/link'
import { fadeInDelays100 } from '@/lib/animations'
import { motion } from 'framer-motion'

export default function LatestBlogSingle() {
    return (
        <>
            <div className='flex gap-4 flex-col
            '>
                <SectionTitle>
                    <motion.span
                        initial={{ opacity: 0, y: 50, x: -15 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[12] }}
                    >Some articles</motion.span>
                </SectionTitle>
                <div className='blog-preview  '>
                    {blogPosts.map((post, index) => (
                        <motion.div
                            initial={{ opacity: 0, y: 50, x: -15 }} animate={{ opacity: 1, y: 0, x: 0 }} transition={{ duration: fadeInDelays100[6], delay: fadeInDelays100[8] + index * 0.1 }}
                            key={index}
                            className={`sm:w-1/3 flex p-[14px] gap-[24px] flex-col blog-card bg-[#151515] rounded-[16px] overflow-hidden shadow-lg ${post.highlighted ? 'highlighted' : ''}`}>
                            <div className="geistOldflex gap-1 justify-between items-center text-sm">
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
                            </div>
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
                                    <p className="text-[#a3a3a3] line-clamp-2 geistOldtext-16">
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
            </div >
        </>
    )
}