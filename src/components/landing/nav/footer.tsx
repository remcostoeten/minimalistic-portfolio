import Link from "next/link" // Make sure to import the appropriate Link component
import { EmailOutlined, LinkedIn } from "@mui/icons-material"
import { Button } from "@nextui-org/react"
import { ContactIcon, Github } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"

import { Input } from "@/components/ui/input"
import SectionHeading from "@/components/layout/SectionHeading"
import SectionSubHeading from "@/components/layout/SectionSubHeading"

const contactLinks = [
  {
    href: "mailto:remcosteoten@hotmail.com",
    icon: <EmailOutlined />,
    text: "remcosteoten@hotmail.com",
  },
  {
    href: "https://www.linkedin.com/in/remcostoeten",
    icon: <LinkedIn />,
    text: "/in/remcostoeten",
  },
  {
    href: "https://github.com/remcostoeten",
    icon: <Github />,
    text: "@remcostoeten",
  },
  {
    href: "https://wa.me/3636590707",
    icon: <BsWhatsapp />,
    text: "WhatsApp",
  },
]

const ContactComponent = () => {
  return (
    <div className="b mx pt-20-auto">
      <div className="flex flex-wrap gap-8 mb-16">
        {contactLinks.map((link, index) => (
          <Link
            key={index}
            className="group flex-1 p-4 border border-[#57534e] hover:border-gray-500 transition-all"
            href={link.href}
            target="_blank"
          >
            <div className="text-gray-400 group-hover:translate-y-[-5px] transition-transform">
              {link.icon}
            </div>
            <span className="mt-2 block text-sm">{link.text}</span>
          </Link>
        ))}
      </div>
      <SectionHeading title="Contact" icon={<ContactIcon className="mr-1" />} />
      <SectionSubHeading>
        <p className="dark:text-neutral-400">Got something to say?</p>
      </SectionSubHeading>
      <form>
        <div className="grid grid-cols-1 gap-4 mb-6">
          <Input
            placeholder="Name"
            className="!bg-transparent border-[#57534e]"
          />
          <Input
            className="!bg-transparent border border-gray-700"
            placeholder="Email"
          />
          <textarea
            className="!bg-transparent min-h-[200px] flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 bg-transparent border-gray-700e"
            placeholder="Sooo... u tell me."
          />
        </div>
        <Button className="mt-8" variant="ghost">
          Send
        </Button>
      </form>
      <div className="text-center text-gray-500 mt-16">
        <p>© 2023 - remcostoeten</p>
      </div>
    </div>
  )
}

export default ContactComponent
