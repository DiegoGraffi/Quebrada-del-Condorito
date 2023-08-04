import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import Info from "@/sections/Info";
import Video from "@/sections/Video";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <Info />
      <Video />
      <Footer />
    </main>
  );
}
