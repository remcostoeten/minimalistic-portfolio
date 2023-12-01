'use client';

import RegisterForm from "@/components/user/RegisterForm";
import UserAuthForm from "@/components/user/user-auth-form";
import { Card, CardBody, Tab, Tabs } from "@nextui-org/react";
import { usePathname } from "next/navigation";

export default function authLayout({ children }) {
  const pathname = usePathname();

  return (
    <div className=' pb-20 min-h-screen flex'>
      {children}
    </div>
  )
}

