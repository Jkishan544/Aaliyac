import React from "react";
import { useEffect } from "react";
import SliderH from "../components/SliderH";
import ProjectOverview from "../components/ProjectOverview";
import OurAssociates from "../components/OurAssociates";
import AboutH from "../components/AboutH";


export const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section>

      <SliderH />
      <AboutH />
      <ProjectOverview />
      <OurAssociates />

    </section>
  );
}
export default Home;
