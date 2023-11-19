import Greeting from "@/components/landing/Greeting";
import Grid from "@/components/landing/Grid";
import LatestBlogSingle from "@/components/landing/LatestBlogSingle";
import VisualStoryteller from "@/components/loaders/VisualStoryteller";

export default function page() {
  return (
    <>
      <Greeting />
      <div className="contained h-[20px] bg-red-400"></div >
      <Grid />
      <VisualStoryteller />
      <LatestBlogSingle />
    </>
  )
}
