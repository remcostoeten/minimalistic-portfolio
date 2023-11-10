import Greeting from "@/components/landing/Greeting";
import Grid from "@/components/landing/Grid";
import LatestBlogSingle from "@/components/landing/LatestBlogSingle";
import VisualStoryteller from "@/components/landing/VisualStoryteller";

export default function page() {
  return (
    <>
      <Greeting />
      <VisualStoryteller />
      <LatestBlogSingle />
      <Grid />
    </>
  )
}
