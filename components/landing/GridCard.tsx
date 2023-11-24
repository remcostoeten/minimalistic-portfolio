/**
 * GridCard component.
 *
 * TODO: Migrate CSS classes to Tailwind
 */

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Icon from "../icons/icons";
import { personalData } from "@/config/data/personal-data";

import Image from "next/image";
import Link from "next/link";
export default function GridCard() {
  const shortDescription = (
    <p className="inter">
      I am a recovering <span className="dashed-tooltip relative"><Tooltip>
        <TooltipTrigger>ex-magento</TooltipTrigger>
        <TooltipContent>
          <p className="lowercase  !text-white">Those 5 years of magento we're hard, but I survived ❤️</p>
        </TooltipContent>
      </Tooltip><span className="absolute -top-[0.5rem] right-[-6px] -z-10 text-xs -rotate-[13px] ">💀</span> </span>developer.
      Currently building <Link target='_blank' href='https://gitlab.com/pleio/frontend'> open source</Link> software at <Link href='https://gitlab.com/pleio' target="_blank" > Pleio</Link> I 💗 CSS. Testing the waters in Lua and Python but Primairly focussing on Typescript and NextJS.
      Will be doing some Go and <span className="relative">oCaml <span className="absolute -top-[0.5rem] right-[-6px] -z-10 text-xs -rotate-[13px] shadow">🐪</span></span>in the future.
    </p >
  );
  return (
    <div className="about-card flex flex-col gap-4">
      <div className="bg-[#26211D] rounded-full absolute top-6 left-4 w-[72px] h-[72px]">
        <Image src="/bit.png" alt="Remco Stoeten" width={72} height={72} className="rounded-full" />
      </div>
      <div className="flex items-start justify-start flex-col gap-2 pl-20 pr-4">
        <h1>{personalData.name}</h1>
        <p className="geist">{shortDescription}</p>
      </div>
    </div>
  );
};