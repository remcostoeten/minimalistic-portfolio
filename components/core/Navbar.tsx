'use client';
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { useActiveSectionContext } from "@/lib/context/ActiveSectionContext";
import { topSlideIn } from "@/lib/animations";
import { links } from "@/lib/data/menulinks";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export default function NavBar() {
    const { activeSection, setTimeOfLastClick } = useActiveSectionContext();

    return (
        <>
            <motion.nav
                variants={topSlideIn}
                className="header bg-dark-alt dark:text-dark-text hidden sm:flex items-center justify-center z-10 fixed black-block rounded-full top-0 black-box px-10 left-1/2 h-14 -translate-x-1/2   mt-8 shadow-lg shadow-white/[0.06] backdrop-blur-3xl pr-8 "
            >
                <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-cream sm:w-max sm:flex-nowrap sm:gap-5">
                    {links.map((link, index) => (
                        <React.Fragment key={link.hash}>
                            <motion.li
                                data-cursor-hover
                                className="relative flex items-center justify-center h-3/4"
                                initial={{ y: -100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                            >
                                <Link
                                    className={clsx(
                                        " flex w-full items-center justify-center py-3  nunito text-[#d7d7d7] transition  pl-4 pr-4 h-9",
                                        {
                                            "": activeSection === link.name,
                                        }
                                    )}
                                    href={link.hash}
                                    onClick={() => {
                                        setTimeOfLastClick(Date.now());
                                    }}
                                >
                                    {link.name}
                                    {link.name === activeSection && (
                                        <motion.span
                                            className="black-block absolute inset-0  rounded-full -z-10"
                                            layoutId="activeSection"
                                            transition={{
                                                type: "spring",
                                                stiffness: 255,
                                                damping: 55,
                                            }}
                                        ></motion.span>
                                    )}
                                </Link>
                            </motion.li>
                            <NavigationMenu>
                                <NavigationMenuList>
                                    <NavigationMenuItem>
                                        <NavigationMenuTrigger>Getting started</NavigationMenuTrigger>
                                      <NavigationMenuContent>
                                            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                                <li className="row-span-3">
                                                    <NavigationMenuLink asChild>
                                                        <a
                                                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                                            href="/"
                                                        >
                                                            <div className="mb-2 mt-4 text-lg font-medium">shadcn/ui</div>
                                                            <p className="text-sm leading-tight text-muted-foreground">
                                                                Beautifully designed components built with Radix UI and Tailwind CSS.
                                                            </p>
                                                        </a>
                                                    </NavigationMenuLink>
                                                </li>
                                            </ul>
                                        </NavigationMenuContent>
                                    </NavigationMenuItem>
                                </NavigationMenuList>
                            </NavigationMenu>
                        </React.Fragment>
                    ))}
                </ul>
            </motion.nav>
        </>
    );
}
