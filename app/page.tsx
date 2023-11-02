import Greeting from "@/components/landing/Greeting";
import Grid from "@/components/landing/Grid";
import VisualStoryteller from "@/components/landing/VisualStoryteller";

import React from "react";

export default function page() {
  return <>
    <Greeting />
    <VisualStoryteller />

    <Grid />
  </>;
}
