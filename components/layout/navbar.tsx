import Link from "next/link"
import { siteConfig } from "@/config/site"
import UserAvatar from "../user/user-avatar";
import { auth } from "@/core/(database)/firebase";
import Spinner from "../loaders/Spinners";
import { Suspense } from "react";
import LogoIconAnimated from "../effects/RemcoLogoAnimated";

const navLinks = [
  {
    title: "Home",
    href: "/",
  },
]

export default function DashboardNavigation() {
  const user = auth.currentUser;
  let username = null;
  let avatar = null;

  if (user) {
    username = user.displayName;
    avatar = user.photoURL;
  }

  return (
    <header className="flex justify-between items-center w-screen p-4 ">
      <div className="contained flex justify-between items-center ml-20">
        <LogoIconAnimated />
        <div className="flex justify-between items-center w-screen">
          <div className="flex gap-6 contained">

          </div>
          <Suspense fallback={<>Loading...</>}>
            <UserAvatar />
          </Suspense>
        </div>
      </div >
    </header >
  );
}