/**
 * GridCard component.
 *
 * TODO: Migrate CSS classes to Tailwind
 */

import Icon from "../icons/icons";
import { personalData } from "../../config/data/personal-data";
import Image from "next/image";

export default function GridCard() {
  return (
    <div className="about-card flex flex-col gap-4">
      <div className="bg-[#26211D] rounded-full absolute top-6 left-4 w-[72px] h-[72px]">
        <Icon src="bitmoji" alt=" Remco Stoeten Bitmoji" />
      </div>
      <div className="flex items-start justify-start flex-col gap-2 pl-20  pr-4">
        <h1>{personalData.name}</h1>
        <p className="style-13 !text-sm" dangerouslySetInnerHTML={{ __html: personalData.about.short }} />
      </div>
    </div>
  );
};
