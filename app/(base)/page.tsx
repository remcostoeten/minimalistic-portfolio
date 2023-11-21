'use client';

import Grid from "@/components/landing/Grid";
import LatestBlogSingle from "@/components/landing/LatestBlogSingle";
import VisualStoryteller from "@/components/loaders/VisualStoryteller";
import GraphComponent from "../graphql/GraphComponent";

export default function page() {
  return (
    <>
      <GraphComponent />
      <div className="contained h-[20px]"></div >
      <div id="about"><Grid /></div>
      <div id="work">   <VisualStoryteller /></div>
      <div id="articles"><LatestBlogSingle /></div>
    </>
  )
}
