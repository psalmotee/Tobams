import { CtaBanner } from "@/components/CtaBanner";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Header } from "@/components/Header";
import { Stats } from "@/components/Stats";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Stats />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
