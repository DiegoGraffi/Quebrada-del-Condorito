import Hero from "@/sections/Hero";
import Info from "@/sections/Info";
import Video from "@/sections/Video";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <Info />
      <Video />
    </main>
  );
}
