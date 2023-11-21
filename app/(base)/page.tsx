'use client';

<<<<<<< HEAD
'use client';

=======
>>>>>>> 6bacca5 ( just some dev work.)
import Head from 'next/head'
import Grid from "@/components/landing/Grid";
import { Suspense, lazy } from 'react';
import { seoKeywords } from '@/config/keywords';

const LatestBlogSingle = lazy(() => import("@/components/landing/LatestBlogSingle"));
const VisualStoryteller = lazy(() => import("@/components/loaders/VisualStoryteller"));
<<<<<<< HEAD
import GraphComponent from "../graphql/GraphComponent";
import Spinner from '@/components/loaders/Spinners';
=======
>>>>>>> 6bacca5 ( just some dev work.)
import GraphComponent from "../graphql/GraphComponent";

export default function page() {
  return (
    <>
      <Head>
        <title>Remco Stoeten - remcostoeten.com</title>
        <meta name="description" content="Remco Stoeten - remcostoeten.com - Front-end developer" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GraphComponent />
      <Head>
        <title>Remco Stoeten - remcostoeten.com</title>
        <meta name="description" content="Remco Stoeten - remcostoeten.com - Front-end developer" />
        <meta name="keywords" content={seoKeywords.join(', ')} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <GraphComponent />
      <div className="contained h-[20px]"></div >
      <div id="about"><Grid /></div>
      <div id="work">
        <Suspense fallback={<div>Loading...</div>}>
          <VisualStoryteller />
        </Suspense>
      </div>
      <div id="articles">
<<<<<<< HEAD
        <Suspense fallback={<div><Spinner size='medium' /></div>}>
=======
        <Suspense fallback={<div>Loading...</div>}>
>>>>>>> 6bacca5 ( just some dev work.)
          <LatestBlogSingle />
        </Suspense>
      </div>
    </>
  )
}