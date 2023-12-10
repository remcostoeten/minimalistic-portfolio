import Link from "next/link"
import { siteConfig } from "@/config/site"
import UserAvatar from "../user/user-avatar";
import { auth } from "@/core/(database)/firebase";
import Spinner from "../loaders/Spinners";
import { Suspense } from "react";
import LogoIconAnimated from "../effects/RemcoLogoAnimated";



export default function DashboardNavigation() {
  return (
    <header className="flex justify-between items-center  p-4 ">
      <span className=" flex justify-between items-center w-full pr-4 ">
        <LogoIconAnimated />
        <UserAvatar />
      </span >
    </header >
  );
}