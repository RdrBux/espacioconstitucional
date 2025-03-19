import About from "@/components/about";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import Navigation from "@/components/navigation";
import Services from "@/components/services";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div>
      <Navigation />
      <div id="content-container">
        <Hero />
        <Services />
        <About />
        {/* <Articles /> */}
        <Contact />
      </div>
      <ToastContainer />
    </div>
  );
}
