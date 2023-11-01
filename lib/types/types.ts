import { links } from "../data/menulinks";

export type ChildProps = {
    children?: React.ReactNode;
};

export type SectionName = (typeof links)[number]["name"];


