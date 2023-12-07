

import Head from 'next/head'
import Grid from "@/components/landing/Grid";
import { Suspense, lazy } from 'react';
import { seoKeywords } from '@/config/keywords';

const BlogPreviews = lazy(() => import("@/components/landing/BlogPreviews"));
const VisualStoryteller = lazy(() => import("@/components/loaders/VisualStoryteller"));
import Spinner from '@/components/loaders/Spinners';
import HeaderBar from '@/components/core/HeaderBar';
import ArticleList from '@/components/blog/article-list';
import Contact from '@/components/landing/Contact';
import ContactComponent from '@/components/landing/nav/footer';

export default function page() {
  return (
    <>
      <Head>
        <title>Remco Stoeten - remcostoeten.com</title>
        <meta name="description" content="Remco Stoeten - remcostoeten.com - Front-end developer" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
      </Head>
      <div className='home-container'>
        <HeaderBar />
        <Grid />
        <VisualStoryteller />
        <BlogPreviews />
        <ContactComponent />
      </div>
    </>
  )
}