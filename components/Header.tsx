"use client";

import Image from "next/image";
import TobamsLogo from "@/public/tobams-logo.png";
import Button from "./ui/Button";
import { User, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  "About",
  "What We Do",
  "Jobs",
  "Products",
  "TofA Academy",
  "Strategy & Planning",
  "Pricing",
  "Book a Consultation",
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 md:px-8 xl:px-10">
        <a
          href="#"
          className="flex items-center gap-3 rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
          aria-label="Tobams Group home"
        >
          <Image
            src={TobamsLogo}
            alt="Tobams Group logo"
            width={166}
            height={64}
            priority
          />
        </a>
        <div className="hidden items-center gap-2 sm:flex sm:gap-3">
          <Button
            leftIcon={
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ddd0da] text-primary">
                <User size={16} />
              </div>
            }
            rightIcon={<ChevronDown size={16} className="text-[#ddd0da]" />}
          >
            Account
          </Button>
          <Button variant="secondary">Take Assessment</Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border bg-foreground p-1 text-white sm:hidden"
          aria-label="Toggle navigation menu"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <X
              size={24}
              className="transition-transform duration-200 rotate-0"
            />
          ) : (
            <Menu
              size={24}
              className="transition-transform duration-200 rotate-0"
            />
          )}
        </button>
      </div>

      {mobileOpen ? (
        <div className="absolute left-0 top-full z-40 w-full border-t border-black/5 bg-white px-4 py-4 sm:hidden shadow-md transition-all duration-200">
          <ul className="space-y-3 text-sm font-semibold text-primary/85">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block rounded-sm py-1 transition hover:text-secondary"
                  onClick={() => setMobileOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2">
            <Button
              className="w-full justify-center"
              leftIcon={
                <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ddd0da] text-primary">
                  <User size={16} />
                </div>
              }
              rightIcon={<ChevronDown size={16} className="text-[#ddd0da]" />}
            >
              Account
            </Button>
            <Button className="w-full justify-center" variant="secondary">
              Take Assessment
            </Button>
          </div>
        </div>
      ) : null}

      <nav
        aria-label="Primary"
        className="hidden border-t border-black/5 bg-white sm:block"
      >
        <ul className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-4 py-2.5 text-[11px] font-semibold text-primary/80 sm:gap-x-5 sm:text-xs md:text-[12px] xl:px-10">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href="#"
                className="rounded-sm transition hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
