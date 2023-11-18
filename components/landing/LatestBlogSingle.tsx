import React from 'react'
import { SectionTitle } from '../core/Typography'
import Link from 'next/link'
import Image from 'next/image'
import ShowcaseLabel from '../core/Labels'

export default function LatestBlogSingle() {
    return (
        <>
            <div className='flex gap-4 flex-col'>
                <SectionTitle>Some articles</SectionTitle>
                <div className='blog-preview'>
                    {/* <div className="grid grid-cols-3 gap-4 dark:bg-gray-900 rounded-lg"> */}
                    <div className="w-1/3 flex flex-col blog-card bg-[#151515] rounded-lg overflow-hidden shadow-lg">
                        <div className="px-2 pt-2 pb-4 ">
                            <div className="geist flex justify-between items-center text-sm">
                                <ShowcaseLabel>NextJS</ShowcaseLabel>
                                <div className="flex items-center text-gray-400">
                                    <svg
                                        className=" h-3 w-3"
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
                                    </svg>

                                    <span className="ml-2">5 min read</span>
                                </div>
                            </div>
                        </div>
                        <Image
                            alt="Blog image"
                            className="object-cover px-3 rounded-lg bg-[#151515]"
                            height="350"
                            src="/b1.webp"
                            style={{
                                aspectRatio: "500/350",
                                objectFit: "cover",
                                borderRadius: "16px",
                            }}
                            width="500"
                        />
                        <div className="px-3 py-4">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-bold text-xl mb-2 line-clamp-2 text-white text-[24px]">Using Firebase in NextJS</h3>
                                    <p className="text-[#a3a3a3] line-clamp-2 geist text-16">
                                        A article to showcase how to fetch and post data to Firebase in NextJS app router.
                                    </p>
                                </div>
                                <div className="ml-4">
                                    <a href="#">
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
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* </div> */}
            </div >
        </>
    )
}