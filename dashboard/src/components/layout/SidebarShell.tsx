'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

import SvgWhiteLogo from 'public/white-logo.svg';

import {
    ExpensesIcon,
    IncomeIcon,
    InvestmentIcon,
    OverviewIcon,
    SettingsIcon,
    SignoutIcon,
    SubscriptionsIcon,
    SupportIcon,
} from '@/components/icons';
import { Separator } from '@/components/ui/Separator';


import SidebarLink from './Link';

const dashboardLinks = [
    { name: 'Overview', href: '/', Icon: OverviewIcon },
    { name: 'Income', href: '/income', Icon: IncomeIcon },
    { name: 'Expenses', href: '/expenses', Icon: ExpensesIcon },
    {
        name: 'Investments',
        href: '/investments',
        Icon: InvestmentIcon,
    },
    {
        name: 'Subscriptions',
        href: '/subscriptions',
        Icon: SubscriptionsIcon
    },
];

const settingsLinks = [
    { href: 'mailto:support@expense.fyi', name: 'Support', Icon: SupportIcon },
    { href: '/settings', name: 'Settings', Icon: SettingsIcon },
];


export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();

    async function signOut() {
        console.log('dawd')
    }

    return (
        <>
            <div
                className='fixed inset-0 left-0 right-0 z-[1] hidden bg-black bg-opacity-10 backdrop-blur'
            />
            <nav
                className='fixed bottom-0 left-0 top-0 z-[1] hidden min-h-full w-[70px] flex-col bg-[#09090b] px-3 py-2 transition-all sm:flex sm:w-[64px] sm:dark:border-r sm:dark:border-border'
            >
                <div className="z-[10] mb-[10px] flex h-full w-[100%] flex-col justify-between items-start">
                    <div className="flex h-full flex-col items-center justify-between">
                        <div className="flex flex-col items-center">
                            <Link
                                href="/"
                                className="mt-[3px] active:scale-95 rounded-lg p-1 transition-all focus:outline-none"
                            >
                                <Image className="block" src={SvgWhiteLogo} width={30} height={30} alt="Expense.fyi" />
                            </Link>
                            <Separator className="mb-2 mt-[8px] border-t border-gray-100 opacity-[0.2]" />
                            {dashboardLinks.map((link, index) => {
                                return (
                                    <SidebarLink
                                        className={index === 0 ? '!mt-0' : ''}
                                        key={link.name}
                                        name={link.name}
                                        active={pathname === link.href}
                                        href={link.href}
                                    >
                                        <link.Icon className="text-white" />
                                    </SidebarLink >
                                );
                            })}
                        </div >
                        <div className="flex flex-col items-center">
                            {settingsLinks.map((link) => {
                                return (
                                    <SidebarLink
                                        key={link.href}
                                        active={pathname === link.href}
                                        href={link.href}
                                    >
                                        <link.Icon className="text-white" />
                                    </SidebarLink>
                                );
                            })}
                            <button
                                className={`mt-2 flex h-[40px] w-full items-center justify-center rounded-lg p-2 text-base tracking-wide text-white hover:bg-[#27272a]`}
                                onClick={signOut}
                                title="Sign out"
                            >
                                <div className="flex items-center">
                                    <SignoutIcon className="text-white" />
                                </div>
                            </button>
                        </div>
                    </div >
                </div >
            </nav >
        </>
    );
}