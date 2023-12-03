import Icon from '@/components/icons/icons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { EmailOutlined, LinkedIn, WhatshotSharp } from '@mui/icons-material';
import { Github } from 'lucide-react';
import React from 'react';
import Link from 'next/link'; // Make sure to import the appropriate Link component

const ContactComponent = () => {
    return (
        <div className="bg-black text-white py-16 px-8">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold mb-10">Contact</h2>
                <div className="grid grid-cols-1 gap-8 mb-16">
                    <Link
                        className="group block p-4 border border-gray-700 hover:border-gray-500 transition-all animate-pulse"
                        href="#"
                    >
                        <EmailOutlined className="text-gray-400 group-hover:translate-y-[-5px] transition-transform" />
                        <span className="mt-2 block text-sm">remcosteoten@hotmail.com</span>
                    </Link>
                    <Link
                        className="group block p-4 border border-gray-700 hover:border-gray-500 transition-all animate-pulse"
                        href="#"
                    >

                        <LinkedIn className='text-gray-400 group-hover:translate-y-[-5px] transition-transform' />
                        <span className="mt-2 block text-sm">/in/your-profile</span>
                    </Link>
                    <Link
                        className="group block p-4 border border-gray-700 hover:border-gray-500 transition-all animate-pulse"
                        href="#"
                    >
                        <Github
                            className="text-gray-400 group-hover:translate-y-[-5px] transition-transform" />
                        <span className="mt-2 block text-sm">/your-username</span>
                    </Link>
                    <Link
                        className="group block p-4 border border-gray-700 hover:border-gray-500 transition-all animate-pulse"
                        href="#"
                    >
                        <WhatshotSharp className="text-gray-400 group-hover:translate-y-[-5px] transition-transform" />
                        <span className="mt-2 block text-sm">WhatsApp</span>
                    </Link>
                </div>
                <div className="border border-gray-700 p-8">
                    <h3 className="text-xl font-semibold mb-6">Got something to say?</h3>
                    <form>
                        <div className="grid grid-cols-1 gap-4 mb-6">
                            <Input placeholder="Name" className="bg-transparent border-gray-700" />
                            <Input className="bg-transparent border border-gray-700" placeholder="Email" />
                            <textarea
                                className="border border-gray-700 bg-transparent text-white p-3 resize-none"
                                placeholder="How can I help? Please include rough scope, budget, timeframe, etc."
                            />
                        </div>
                        <Button>Send</Button>
                    </form>
                </div>
                <div className="text-center text-gray-500 mt-16">
                    <p>© 2023 - Your Company Name</p>
                </div>
            </div>
        </div>
    );
};

export default ContactComponent;