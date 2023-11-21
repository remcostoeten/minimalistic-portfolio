'use client';

import Grid from "@/components/landing/Grid";
import { Suspense, lazy } from 'react';
import { seoKeywords } from '@/config/keywords';

const LatestBlogSingle = lazy(() => import("@/components/landing/LatestBlogSingle"));
const VisualStoryteller = lazy(() => import("@/components/loaders/VisualStoryteller"));
import GraphComponent from "../graphql/GraphComponent";

export default function page() {
  return (
    <>
      <GraphComponent />
      <div className="contained h-[20px]"></div >
      <div id="about"><Grid /></div>
      <div id="work">
        <Suspense fallback={<div>Loading...</div>}>
          <VisualStoryteller />
        </Suspense>
      </div>
      <div id="articles">
        <Suspense fallback={<div>Loading...</div>}>
          <LatestBlogSingle />
        </Suspense>
      </div>
    </>
  )
}