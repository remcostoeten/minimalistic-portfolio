'use client';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ShowcaseLabel from '../core/Labels';
import { articles, blogPosts } from '@/core/config/BlogPosts';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@nextui-org/react';
import SectionHeading from '../layout/SectionHeading';
import SectionSubHeading from '../layout/SectionSubHeading';
import { DocumentScannerOutlined } from '@mui/icons-material';

export default function LatestBlogSingle() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0 1", "1.33 1"],
    });
    const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
    const transformXprogress = useTransform(scrollYProgress, [0, 1], [0, 100]);

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
            <section className='flex flex-col gap-y-2 pt-0 pb-28'>
                <SectionHeading title=' Snippets & Blogs' icon={<DocumentScannerOutlined />} className='mr-1' />
                <SectionSubHeading>
                    <p className='dark:text-neutral-400'>Some snippets, documentation, tools and guides i've created for myself for future reference. And who knows someone actually finds them usefull.</p>
                </SectionSubHeading>

                <div className='blog-preview'>
                    {blogPosts.map((post, index) => (
                        <motion.div

                            className={`highlighted blog-highlighted sm:w-1/3 flex p-[14px] gap-[24px] flex-col blog-card grid--grey grid--card rounded-[16px] overflow-hidden shadow-lg ${post.highlighted ? 'highlighted' : ''}`}>
                            <Link href={post.url} className="geist flex gap-1 justify-between items-center text-sm single">
                                <span className='flex gap-2'>
                                    {Array.isArray(post.label) ? post.label.map((label, index) => (
                                        <ShowcaseLabel key={index}>{label}</ShowcaseLabel>
                                    )) : <ShowcaseLabel>{post.label}</ShowcaseLabel>}
                                </span>
                                <div
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
                                    </svg>
                                    <span className="ml-2">{post.readTime}</span>
                                </div>
                            </Link>
                            <span>

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
                            </span>
                            <div className="flex justify-between items-start py-2 px-2">
                                <div >
                                    <h3 className="font-bold text-xl mb-2 line-clamp-2 text-white text-[24px]">{post.title}</h3>
                                    <p className="text-[#a3a3a3] line-clamp-2 geist text-16">
                                        {post.description}
                                    </p>
                                </div>
                                <div className="ml-4">
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
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-10">
                    <ul>
                        {articles.map((article, index) => (
                            <li

                                className="group"
                                key={index}
                            >
                                <Link target="_blank"
                                    className="flex px-2 py-4 justify-between items-center text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white group-hover:translate-x-1 transition-transform transition-colors ease-bezier"
                                    href={article.anchor}
                                >
                                    <span>{article.title}</span>
                                    <IconAngleupright className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </Link>
                                <hr className="border-[#57534e] hover:border-white transition-colors ease-bezier" />
                            </li>
                        ))}
                    </ul>
                    <Button className='mt-8' variant='ghost' aria-label='Read more on my snippets page'>
                        <Link href='https://snippets.remcostoeten.com/' target="_blank">
                            More snippets
                        </Link>
                    </Button>
                </div >
            </section >
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
