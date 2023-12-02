'use client';

import { m } from "framer-motion";
import useInView from "@/hooks/useInView";
import Link from "next/link";

export default function ArticleList() {
    const [ref, inView] = useInView({ threshold: 0.1 });

    const variants = {
        hidden: { opacity: 0 },
        show: { opacity: 1 }
    };

    // @todo scrape the snippets page and generate the list from that
    // @todo or implement contentlayer

    const articles = [
        { title: "Environment variables in NextJS", anchor: "https://snippets.remcostoeten.com/Components-nextjs-react/env" },
        { title: "UseMouseHover hook in NextJS", anchor: "https://snippets.remcostoeten.com/Components-nextjs-react/hover-hook" },
        { title: "My ZSH config", anchor: "https://snippets.remcostoeten.com/Linux/zshrc-config" },
        { title: "Fix git upstream prior to pushing", anchor: "https://snippets.remcostoeten.com/Miscellaneous/git-upstream" },
        { title: "Protect routes with password in NextJS", anchor: "https://snippets.remcostoeten.com/Components-nextjs-react/password-protected-route" },
    ];

    return (
        <div className="mt-10" ref={ref}>
            <ul>
                {articles.map((article, index) => (
                    <m.li
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
                    </m.li>
                ))}
            </ul>
            <Link href='https://snippets.remcostoeten.com/' target="_blank"
                className="inline-flex items-center justify-center rounded-xl text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-14 px-6 py-2 w-max text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white transition-colors ease-bezier inline-flex w-full p-40 mt-4"
            >
                Read more on my snippets page
            </Link>
        </div>
    );
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
