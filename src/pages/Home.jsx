import Navbar from "../components/UI/Navbar";
import Hero from "../components/Hero";
import Collections from "../components/Collections";
import Sustainability from "../components/Sustainability";
import Essentials from "../components/Essentials";
import About from "../components/About";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Collections />
      <Sustainability />
      <Essentials />
      <About />
    </>
  );
}
