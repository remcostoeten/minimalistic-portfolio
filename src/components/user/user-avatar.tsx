"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { auth, signOut } from "@/core/(database)/firebase"
import { getAuth, onAuthStateChanged } from "firebase/auth"

import SkeletonBar from "../loaders/Skeleton"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu"

export default function UserAvatar() {
  const [user, setUser] = useState<any>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })

    return () => unsubscribe()
  }, [])

  if (loading) {
    return (
      <>
        <span className="flex gap-0.5 justify-center">
          <span className="flex flex-col gap-1 items-end justify-center">
            <span className="skeleton w-[125px] h-3"></span>
            <span className="skeleton w-[100px] h-3"></span>
          </span>
          <span className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></span>
        </span>
      </>
    )
  }

  const currentUser = getAuth().currentUser

  if (!currentUser) {
    return null
  }

  const photoURL = currentUser?.photoURL || ""
  const displayName = currentUser?.displayName || ""
  const subTitle = "Frontend developer" || ""

  return (
    <>
      {user && (
        <span className="flex gap-2">
          <span className="flex flex-col gap-0.5 justify-center">
            <span className="text-base font-bold text-right">
              {loading ? <SkeletonBar height={4} width="100%" /> : displayName}
            </span>
            <p className="text-xs text-muted-foreground text-right">
              {loading ? <SkeletonBar height={4} width="100%" /> : subTitle}
            </p>
          </span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="avatar">
                <span className="w-14 rounded">
                  {loading ? (
                    <>
                      <span className="flex gap-0.5 justify-center">
                        <span className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></span>
                        <span className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></span>
                        <span className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></span>
                      </span>
                      <span className="skeleton w-20 scale-75 h-20 rounded-full shrink-0"></span>
                    </>
                  ) : (
                    <Image
                      className="rounded-full scale-75"
                      src={photoURL}
                      alt={currentUser.displayName}
                      width={90}
                      height={90}
                    />
                  )}
                </span>
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>
                <span onClick={signOut}>Sign out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </span>
      )}
    </>
  )
}
