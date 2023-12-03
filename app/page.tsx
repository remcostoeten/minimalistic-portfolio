

import Head from 'next/head';
import Grid from "@/components/landing/Grid";
import { lazy } from 'react';
import { seoKeywords } from '@/config/keywords';
import HeaderBar from '@/components/core/HeaderBar';
import ContactComponent from '@/components/landing/nav/footer';

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
      <HeaderBar />

      <div id="toast-root" />
      <Grid />
      <VisualStoryteller />
      <BlogPreviews />
      <ContactComponent />
    </>
  )
}