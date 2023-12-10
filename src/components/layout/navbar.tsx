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
      <span className="contained mx-auto flex justify-between items-center ml-20">
        <LogoIconAnimated />
        <span className="flex justify-between items-center w-screen">
          <span className="flex gap-6 contained">
          </span>
          <UserAvatar />
        </span>
      </span >
    </header >
  );
}