import Image from "next/image";
import HeroImg from "@/public/hero.jpg";
import Button from "./ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src={HeroImg}
          alt="Team members taking part in a training and development workshop"
          fill
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 -z-10 bg-black/50" />

      <div className="mx-auto flex min-h-64 w-full max-w-9xl flex-col items-center justify-center px-4 py-8 text-center sm:min-h-72 sm:px-8 md:min-h-80 lg:px-10">
        <p className="rounded-full bg-white/10 px-12 py-4 text-xs font-semibold uppercase text-white sm:text-sm">
          What We Do
        </p>
        <h1 className="mt-5 font-display text-2xl font-bold text-white sm:text4xl md:text-[56px] md:leading-[1.08]">
          Training and Development
        </h1>
        <p className="mt-3 max-w-3xl text-sm font-semibold leading-6 text-white sm:text-lg">
          Our comprehensive range of programs and resources is designed to
          enhance skills, broaden knowledge, and propel careers forward in
          today&apos;s ever-evolving landscape.
        </p>
        <div className="mt-7">
          <Button size="xlg"
          >
            Book a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
}
