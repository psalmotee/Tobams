import Image from "next/image";
import Link from "next/link";
import TobamsLogo from "@/public/tobams-logo.png";
import {
  FaLinkedinIn,
  FaSquareInstagram,
  FaXTwitter,
  FaPhone,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const whatWeDo = [
  "Sustainability Services",
  "Strategy Planning and Implementation",
  "Tech Talent Solutions",
  "Training and Development",
  "IT Consulting Services",
  "Social Impact",
  "Talent Recruitment",
];

const company = [
  "About",
  "Jobs",
  "Projects",
  "Our Founder",
  "Business Model",
  "The Team",
  "Contact Us",
  "Blog",
  "FAQs",
  "Testimonials",
];

const solutions = [
  "Tobams Group Academy",
  "Help a Tech Talent",
  "Campus Ambassadors Program",
  "Join Our Platform",
  "Pricing",
  "Book a Consultation",
  "Join Our Slack Community",
];

export function Footer() {
  return (
    <footer className="text-white">
      <section className="bg-[#1D0617] border-b border-[#C4C4C4]">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-4 p-6 sm:flex-row sm:items-center sm:px-8 lg:px-16 lg:py-10">
          <div>
            <p className="text-sm md:text-lg text-whit font-normal">
              Ready to be part of something extraordinary?
            </p>
            <h3 className="mt-3 text-xl font-semibold md:text-3xl">
              Let&apos;s work together to create a difference
            </h3>
          </div>
          <Link
            href="#"
            className="rounded-sm bg-primary px-6 py-3 text-lg font-semibold text-white transition hover:bg-primary/80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl p-4 sm:px-8 lg:px-16 lg:py-10 bg-[#11040E]">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          <article>
            <Image
              src={TobamsLogo}
              alt="Tobams Group logo"
              width={166}
              height={64}
            />
            <p className="mt-1 text-sm font-normal md:text-[16px] leading-6 text-white">
              Tobams Group is an innovative consultancy firm reshaping the
              future of tech talent development in Africa, specializing in
              talent acquisition, internships, and skill development with a
              global perspective.
            </p>
            <div className="mt-5 flex items-center gap-2 text-xs text-white/75">
              <span className="rounded-full bg-white p-2">
                <FaLinkedinIn color="var(--text-color)" size="16" />
              </span>
              <span className="rounded-full bg-white p-2">
                <FaSquareInstagram color="var(--text-color)" size="16" />
              </span>
              <span className="rounded-full bg-white p-2">
                <FaXTwitter color="var(--text-color)" size="16" />
              </span>
            </div>
          </article>

          <article>
            <h4 className="text-lg font-bold md:text-xl">What We Do</h4>
            <ul className="mt-3 space-y-2 text-sm md:text-[16px] font-normal text-white">
              {whatWeDo.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h4 className="text-lg font-bold md:text-xl">Company</h4>
            <ul className="mt-3 space-y-2 text-sm font-normal md:text-[16px] text-white">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </article>

          <article>
            <h4 className="text-lg font-bold md:text-xl">Solution</h4>
            <ul className="mt-3 space-y-2 text-sm font-normal md:text-[16px] text-white">
              {solutions.map((item) => (
                <li key={item}>
                  <a href="#" className="transition hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <div className="mt-8 w-full rounded-lg bg-background/6 p-6 border border-white/10">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-10">
            <div className="flex-1">
              <h4 className="text-lg font-bold md:text-xl uppercase tracking-wider text-white">
                Registered Offices
              </h4>

              <div className="mt-6 flex flex-col sm:flex-row gap-10">
                <div className="flex-1">
                  <p className="text-md font-semibold md:text-[16px] text-secondary">
                    United Kingdom
                  </p>
                  <p className="mt-2 text-sm font-semibold md:text-[16px] leading-relaxed text-white">
                    07451196 (Registered by Company House) <br />
                    Vine Cottages, 215 North Street, Romford, Essex, United
                    Kingdom, RM1 4QA
                  </p>
                </div>

                <div className="flex-1 sm:border-l border-white/10 sm:pl-10">
                  <p className="text-md font-semibold md:text-[16px] text-secondary">
                    Nigeria
                  </p>
                  <p className="mt-2 text-sm font-semibold md:text-[16px] leading-relaxed text-white">
                    RC 1048722 (Registered by the Corporate Affairs Commission){" "}
                    <br />
                    4, Muaz Close, Angwar-Rimi
                  </p>
                </div>
              </div>
            </div>
            <div className="md:border-l border-white/10 md:pl-10 min-w-70">
              <h4 className="text-lg font-bold md:text-xl uppercase tracking-wider text-white">
                Contact Information
              </h4>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center text-secondary">
                    <MdEmail color="secondary" size="16" />
                  </div>
                  <span className="text-[13px] md:text-[16px] text-white">
                    theteam@tobamsgroup.com
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center text-secondary">
                    <FaPhone size="16" color="secondary" />
                  </div>
                  <span className="text-[13px] md:text-[16px] text-white">
                    +447886600748
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-7 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-6 text-[13px] text-white/70 sm:flex-row sm:items-center sm:justify-between sm:text-[14px]">
            <p className="order-2 text-center sm:order-1 sm:text-left">
              Copyright © Tobams Group, 2024. All rights reserved.
            </p>
            <div className="order-1 flex flex-wrap justify-center gap-x-6 gap-y-3 sm:order-2 sm:justify-end">
              <a
                href="#"
                className="underline-offset-4 transition hover:text-white hover:underline"
              >
                Terms and Conditions
              </a>
              <a
                href="#"
                className="underline-offset-4 transition hover:text-white hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="underline-offset-4 transition hover:text-white hover:underline"
              >
                Cookies Policy
              </a>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
