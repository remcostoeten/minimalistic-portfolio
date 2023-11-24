import React from 'react'
import { SectionTitle } from '../core/Typography'
import Link from 'next/link'
import Image from 'next/image'
import ShowcaseLabel from '../core/Labels'
import { blogPosts } from '@/lib/data/BlogPosts'

export default function LatestBlogSingle() {
    return (
        <>
            <div className='flex gap-4 flex-col'>
                <SectionTitle>Some articles</SectionTitle>
                <div className='blog-preview'>
                    {blogPosts.map((post, index) => (
                        <div key={index} className="w-1/3 flex p-[14px] gap-[24px] flex-col blog-card bg-[#151515] rounded-lg overflow-hidden shadow-lg">
                            <div className="geist flex justify-between items-center text-sm">
                                <ShowcaseLabel>{post.label}</ShowcaseLabel>
                                <div className="flex items-center text-gray-400">
                                    <span className="ml-2">{post.readTime}</span>
                                </div>
                            </div>
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
                            <div>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <h3 className="font-bold text-xl mb-2 line-clamp-2 text-white text-[24px]">{post.title}</h3>
                                        <p className="text-[#a3a3a3] line-clamp-2 geist text-16">
                                            {post.description}
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
                    ))}
                </div>
            </div >
        </>
    )
}