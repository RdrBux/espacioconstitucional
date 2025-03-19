import About from "@/components/about";
import Contact from "@/components/contact";
import FixScaling from "@/components/fix-scaling";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      {/* <Articles /> */}
      <Contact />

      <FixScaling />
    </div>
  );
}
