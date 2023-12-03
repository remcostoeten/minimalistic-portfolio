'use client';

import { m } from "framer-motion";
import useInView from "@/hooks/useInView";
import { ArrowRightToLine } from "lucide-react";
import { Link, Button } from "@nextui-org/react";

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
            <Button variant='ghost' className="block sm:flex mt-10 fade-in" as={Link}
                href="https://snippets.remcostoeten.com" target="_blank" aria-label="click here to see more snippets"
            >
                More snippets <ArrowRightToLine />
            </Button>
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
