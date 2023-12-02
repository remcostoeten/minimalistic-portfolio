'use client';

import { domAnimation, LazyMotion, m, useScroll, useTransform, useViewportScroll } from "framer-motion";
import { Button } from "../ui/button";

export default function ArticleList() {
    const articles = [
        { title: "The big ball of mud", anchor: "#mud" },
        { title: "No constraints, no breakthroughs", anchor: "#breakthroughs" },
        { title: "As long as it's painful", anchor: "#painful" },
        { title: "If you find it hard", anchor: "#hard" },
        { title: "Writing briefs is f*ing hard", anchor: "#briefs" },
        { title: "Crude and vulgar", anchor: "#vulgar" },
        { title: "On the ideas of others", anchor: "#ideas" }
    ];

    return (
        <div>
            <ul>
                {articles.map((article, index) => (
                    <m.li
                        className="group"
                        key={index}
                    >
                        <a
                            className="flex justify-between items-center text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white group-hover:translate-x-1 transition-transform transition-colors ease-bezier"
                            href={article.anchor}
                        >
                            <span>{article.title}</span>
                            <IconAngleupright className="opacity-0 group-hover:opacity-100 transition-opacity" />
                        </a>
                        <hr className="border-[#57534e] hover:border-white transition-colors ease-bezier" />
                    </m.li>
                ))}
            </ul>
            <Button
                className="w-full text-[#d6d3d1] hover:text-white border-[#57534e] hover:border-white transition-colors ease-bezier"
                variant="outline"
            >
                Read More on Substack
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
