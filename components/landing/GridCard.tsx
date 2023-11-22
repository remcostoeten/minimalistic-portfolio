/**
 * GridCard component.
 *
 * TODO: Migrate CSS classes to Tailwind
 */

import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import Icon from "../icons/icons";
import { personalData } from "@/config/data/personal-data";

export default function GridCard() {
  const shortDescription = (
    <>
      I'm a recovering ex-Magento developer. I've
      <Tooltip>
        <TooltipTrigger><span className='tooltip-border'>Overcome PHP</span></TooltipTrigger>
        <TooltipContent>
          <p className="lowercase text-white">Those 5 years of Magento were hard, but I survived ❤️</p>
        </TooltipContent>
      </Tooltip>
      and now I'm building <a href='https://gitlab.com/pleio/frontend'>open source</a> software at <a href='https://gitlab.com/pleio'>Pleio</a>. I love CSS and UI. I primarily work with TSX, Next, and SQL and have done some scripting in Python and Lua. In the future, I want to dive into Go, OCaml, and dev-ops.
    </>
  );

  return (
    <div className="about-card flex flex-col gap-4">
      <div className="bg-[#26211D] rounded-full absolute top-6 left-4 w-[72px] h-[72px]">
        <Icon src="bitmoji" alt="Remco Stoeten Bitmoji" />
      </div>
      <div className="flex items-start justify-start flex-col gap-2 pl-20 pr-4">
        <h1>{personalData.name}</h1>
        <p className="geist">{shortDescription}</p>
      </div>
    </div>
  );
};