import Link from "next/link"
import { siteConfig } from "@/config/site"
import UserAvatar from "../user/user-avatar";
import { auth } from "@/core/(database)/firebase";
import Spinner from "../loaders/Spinners";
import { Suspense } from "react";

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
    <header className="flex justify-between items-center">
      <div className="flex gap-6">
        {navLinks.map((item, index) => {
          return (
            item.href && (
              <Link
                className="hover:underline"
                key={index}
                href={item.href}
              >
                {item.title}
              </Link>
            )
          );
        })}
      </div>
      <Suspense fallback={<Spinner size="small" />}>
        <UserAvatar />
      </Suspense>
    </header >
  );
}