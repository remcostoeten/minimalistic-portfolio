import Link from "next/link"
import { auth } from "@/core/(database)/firebase"

export default function IsloggedInNotice() {
  const user = auth.currentUser
  return (
    <div>
      <h1 className="text-slate-200">
        You are not <s className="text-xs">the father</s>{" "}
        {user ? "Actually, logged in." : "... logged in."}
      </h1>
      <Link className="underline" href="/signin">
        here
      </Link>
    </div>
  )
}
