import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { ProgramShowcase } from "@/components/ProgramShowcase";
import { CtaBanner } from "@/components/CtaBanner";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <ProgramShowcase />
        <CtaBanner />
      </main>
      <Footer />
    </>
  );
}
