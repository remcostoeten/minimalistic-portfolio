"use client";

import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "@/hooks/inView";
import { sendEmail } from "@/core/email/SendEmail";
import { toast } from 'sonner';
import { useFormStatus } from 'react-dom'
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { EmailOutlined, LinkedIn } from "@mui/icons-material";
import { Github } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { useState } from "react";

export default function Contact() {
    const { ref } = useSectionInView("Contact");
    const [isSending, setIsSending] = useState(false);

    const handleFormSubmit = async (formData) => {
        setIsSending(true);
        const { data, error } = await sendEmail(formData);

        if (error) {
            toast.error(error);
            setIsSending(false);
            return;
        }

        toast.success("Email sent successfully!");
        setIsSending(false);
    };
    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-20 sm:mb-28 max-w-6.12"
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}
            viewport={{
                once: true,
            }}
        >
            <h2 className="text-3xl font-bold mt-20 mb-10">Contact</h2>
            <div className="flex flex-wrap gap-8 mb-16">
                {contactLinks.map((link, index) => (
                    <Link
                        key={index}
                        className="group flex-1 p-4 border border-[#57534e] hover:border-gray-500 transition-all"
                        href={link.href}
                    >
                        <div className="text-gray-400 group-hover:translate-y-[-5px] transition-transform">
                            {link.icon}
                        </div>
                        <span className="mt-2 block text-sm">{link.text}</span>
                    </Link>
                ))}
            </div>

            <form
                className="mt-10 flex gap-2 flex-col dark:text-black"
                action={async (formData) => {
                    const { data, error } = await sendEmail(formData);

                    if (error) {
                        toast.error(error);
                        return;
                    }

                    toast.success("Email sent successfully!");
                }}
            >
                <Input
                    className="h-14 px-4 rounded-lg bg-none borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none !bg-zinc-950 "
                    name="senderEmail"
                    type="email"
                    required
                    maxLength={500}
                    placeholder="Your email"
                />
                <textarea
                    className="min-h-[200px] flex h-10 w-full rounded-md border px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:bg-zinc-950 dark:ring-offset-zinc-950 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-300 bg-transparent border-gray-700e"
                    name="message"
                    placeholder="Your message"
                    required
                    maxLength={5000}
                />
                <button
                    type="submit"
                    className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
                    disabled={isSending}
                >
                    {isSending ? (
                        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
                    ) : (
                        <>
                            Submit{" "}
                            <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
                        </>
                    )}
                </button>
            </form>
        </motion.section>
    );
}


// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { EmailOutlined, LinkedIn } from '@mui/icons-material';
// import { Github } from 'lucide-react';
// import Link from 'next/link'; // Make sure to import the appropriate Link component
// import { BsWhatsapp } from 'react-icons/bs';
// import { sendEmail } from '@/core/email/SendEmail';
// import { toast } from 'sonner';
// import { useSectionInView } from '@/hooks/inView';
// import { m } from 'framer-motion';
// import { useFormStatus } from 'react-dom';
// import { useForm } from 'react-hook-form';

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
];

// export type FormData = {
//     name: string;
//     email: string;
//     message: string;
// };

// const ContactComponent = () => {
//     const { register, handleSubmit } = useForm<FormData>();
//     const { pending } = useFormStatus();
//     const { ref } = useSectionInView("Contact");

//     return (
//         <m.div className="b mx-auto"
//             ref={ref}
//             initial={{
//                 opacity: 0,
//             }}
//             whileInView={{
//                 opacity: 1,
//             }}
//             transition={{
//                 duration: 1,
//             }}
//             viewport={{
//                 once: true,
//             }}
//         >
//             <h2 className="text-3xl font-bold mt-20 mb-10">Contact</h2>
//             <div className="flex flex-wrap gap-8 mb-16">
//                 {contactLinks.map((link, index) => (
//                     <Link
//                         key={index}
//                         className="group flex-1 p-4 border border-[#57534e] hover:border-gray-500 transition-all"
//                         href={link.href}
//                     >
//                         <div className="text-gray-400 group-hover:translate-y-[-5px] transition-transform">
//                             {link.icon}
//                         </div>
//                         <span className="mt-2 block text-sm">{link.text}</span>
//                     </Link>
//                 ))}
//             </div>
//             <h3 className="text-xl font-semibold mb-6">Got something to say?</h3>
//             <form
//                 className="mt-10 flex flex-col dark:text-black"
//                 action={async (formData) => {
//                     const { data, error } = await sendEmail(formData);

//                     if (error) {
//                         toast.error(error);
//                         return;
//                     }

//                     toast.success("Email sent successfully!");
//                 }}
//             >

//                 <div className="grid grid-cols-1 gap-4 mb-6">
//                     <Input
//                         placeholder="Name"
//                         className="bg-transparent border-[#57534e]"
//                         {...register('name', { required: true })}
//                     />
//                     <Input
//                         id='email'
//                         placeholder="Email"
//                         className="bg-transparent border border-gray-700"
//                         {...register('email', { required: true })}
//                     />
//                     <textarea
//                         rows={4}
//                         className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
//                         placeholder="Sooo... u tell me."

//                     />
//                 </div>
//                 <Button>Send</Button>
//             </form>
//             <div className="text-center text-gray-500 mt-16">
//                 <p>© 2023 - remcostoeten</p>
//             </div>
//         </m.div>
//     );
// };

// export default ContactComponent;