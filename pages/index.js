import AVailableSoon from "@/components/AvailableSoon";
import HelloLisa from "@/components/HelloLisa";
import Hero from "@/components/Hero";
import OnTheGo from "@/components/OnTheGo";
import WheaterToday from "@/components/WheaterToday";
import YourVoice from "@/components/YourVoice";
import React from "react";

export default function Home() {
  return (
    <>
      <Hero />
      <OnTheGo />
      <YourVoice />
      <HelloLisa />
      <WheaterToday />
      <AVailableSoon />
    </>
  );
}
