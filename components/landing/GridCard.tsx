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
import { StringSpace } from "@/lib/utils";
export default function GridCard() {
  const shortDescription = (
    <>
      I'm a recovering ex-Magento developer
      <Tooltip>
        <TooltipTrigger><span className='tooltip-border'>Overcome PHP</span></TooltipTrigger>
        <TooltipContent>
          <p className="lowercase text-black">Those 5 years of Magento were hard, but I survived ❤️</p>
        </TooltipContent>
      </Tooltip>
      , currently building{StringSpace()}
      <Link className="underline" href='https://gitlab.com/pleio/frontend'>open source</Link>
      {StringSpace()}software at{StringSpace()}
      <Link className="underline" href='https://gitlab.com/pleio'>Pleio</Link>.
      Primarily using Typescript and NextJS. Done some scripting in Lua and Python, with a strong interest in oCaml, Go and dev-ops.
    </>
  );

  return (
    <div className="about-card flex flex-col gap-4">
      <div className="bg-[#26211D] rounded-full absolute top-6 left-4 w-[72px] h-[72px]">
        <Icon src="bitmoji" alt="Remco Stoeten Bitmoji" />
      </div>
      <div className="flex items-start justify-start flex-col gap-2 pl-20 pr-4">
        <h1>{personalData.name}</h1>
        <p className="text-[17px] font-[500]">{shortDescription}</p>
      </div>
    </div>
  );
};