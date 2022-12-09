import React, { Fragment } from "react";
import FirstSection from "./FirstSection";
import SecondSection from "./SecondSection";

function Home() {
  return (
    <div className="flex flex-col h-[100vh] pt-[3rem] mt-0 overflow-y-scroll 
    hide-scrollbar scroll-smooth snap-start snap-y snap-mandatory">
      <FirstSection />
      <SecondSection />
    </div>
  );
}

export default Home;