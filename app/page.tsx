import About from "@/components/about";
import Articles from "@/components/articles";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Services from "@/components/services";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Services />
      <About />
      <Articles />
      <Contact />
    </div>
  );
}
