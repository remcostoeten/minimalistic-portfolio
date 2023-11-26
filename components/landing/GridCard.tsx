/**
 * GridCard component.
 *
 * TODO: Migrate CSS classes to Tailwind
 */

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { personalData } from "@/config/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { StringSpace } from "@/core/utillities/utils";
import { GridCardTitle, Paragraph } from "../core/Typography";
export default function GridCard() {
  const shortDescription = (
    <>
      I'm a recovering ex-Magento developer
      <Tooltip>
        <TooltipTrigger><span className='pl-1 tooltip-border'>overcome PHP</span></TooltipTrigger>
        <TooltipContent>
          <p className="lowercase text-black">Those 5 years of Magento were hard, but I survived ❤️</p>
        </TooltipContent>
      </Tooltip>
      , currently building{StringSpace()}
      <Link className="underline" target='_blank' href='https://gitlab.com/pleio/frontend'>open source</Link>
      {StringSpace()}software at{StringSpace()}
      <Link className="underline" target='_blank' href='https://gitlab.com/pleio'>Pleio</Link>.
      Primarily using Typescript and NextJS. Done some scripting in Lua and Python, with a strong interest in oCaml, Go and dev-ops.
    </>
  );

  return (
    <div className="about-card flex flex-col gap-4">
      <div className="bg-[#26211D] rounded-full absolute top-6 left-4 w-[72px] h-[72px]">
        <Image src="/bitcompress.png" alt="Remco Stoeten Bitmoji" width={72} height={72} />
      </div>
      <div className="flex items-start justify-start flex-col gap-2 pl-20 pr-4">
        <GridCardTitle fontSize="text-2xl">{personalData.name}</GridCardTitle>
        <Paragraph color='black' fontSize="text-[20px]">{shortDescription}</Paragraph>
      </div>
    </div>
  );
};