

import Head from 'next/head';
import Grid from "@/components/landing/Grid";
import { lazy } from 'react';
import { seoKeywords } from '@/config/keywords';
import HeaderBar from '@/components/core/HeaderBar';
import ContactComponent from '@/components/landing/nav/footer';
import GithubContributionCards from '@/components/data/github/GithubContributions';
import GitHubCalendar from '@/components/data/github/GithubCalender';
import SectionHeading from '@/components/layout/SectionHeading';
import SectionSubHeading from '@/components/layout/SectionSubHeading';
import { GithubIcon } from 'lucide-react';
import Link from 'next/link';

const BlogPreviews = lazy(() => import("@/components/landing/BlogPreviews"));
const VisualStoryteller = lazy(() => import("@/components/loaders/VisualStoryteller"));

export default function page() {
  return (
    <>
      <Head>
        <title>Remco Stoeten - remcostoeten.com</title>
        <meta name="description" content="Remco Stoeten - remcostoeten.com - Front-end developer" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
      </Head>
      <div className='mx-auto px-4 sm:px-6 lg:px-8 w-screen lg:w-[1280px]'>
        <HeaderBar />
        <Grid />
        <VisualStoryteller />
        <section className='my-20 sm:my-10 flex flex-col gap-y-2'>
          <SectionHeading title='Contributions' icon={<GithubIcon className='mr-1' />} />
          <SectionSubHeading>
            <p className='dark:text-neutral-400'>My contributions from last year on github.</p>
            <Link
              href='https://github.com/remcostoeten'
              target='_blank'
              className='text-primary-500 dark:text-primary-400'
            >
              View on Github
            </Link>
          </SectionSubHeading>
          <GithubContributionCards />
          <GitHubCalendar username="remcostoeten" />
        </section>
        <BlogPreviews />
        <ContactComponent />
      </div>
    </>
  )
}