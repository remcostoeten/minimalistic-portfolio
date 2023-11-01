import { PageTitle, SubTitle } from "@/components/core/Typography";
import SwappingWords from "@/components/effects/SwappingWords";
import { links } from "@/lib/data/menulinks";
import Image from "next/image";
import Link from "next/link";

export default function Intro() {
    return (
        <header className="container py-10 flex flex-col gap-2 px-8 text-center justify-center">
            <div className="flex flex-row justify-center items-center gap-4">
                <div className="flex flex-col gap-4">
                    <span className="flex flex-col gap-1">
                        <PageTitle isGeist>Remco</PageTitle>
                        <SubTitle isGeist>
                            <SwappingWords
                                words={[
                                    'Frontend developer!',
                                    'Divjesschuiver',
                                    'Aspiring fullstacks',
                                    'Decent guy',
                                ]}
                                interval={2000} />
                        </SubTitle>
                    </span>
                    <nav className="items-center justify-start flex flex-row flex-nowrap gap-6 h-auto overflow-hidden relative w-full p-0">
                        {links.map((link, index) => (
                            <Link key={index} href={link.hash} className="text-base  geist text-white">
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <Image src="/remco.jpeg"
                    width={90} height={90} alt="Avatar Remco Stoeten" className="rounded-full" />
            </div>
        </header>
    )
}