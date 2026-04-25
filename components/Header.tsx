"use client";

import Image from "next/image";
import Link from "next/link";
import TobamsLogo from "@/public/tobams-logo.png";
import Button from "./ui/Button";
import { User, ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "About", hasDropdown: true },
  { label: "What We Do", hasDropdown: true },
  { label: "Jobs", hasDropdown: true },
  { label: "Products" },
  { label: "TG Academy" },
  { label: "Strategy & Planning" },
  { label: "Pricing" },
  { label: "Book a Consultation" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-8 md:px-12 lg:px-16">
        <Link href="#" className="flex items-center gap-3">
          <Image
            src={TobamsLogo}
            alt="Tobams Group logo"
            width={166}
            height={64}
            priority
          />
        </Link>

        {/* Desktop Right */}
        <div className="hidden items-center gap-2 sm:flex sm:gap-4">
          <Button
            leftIcon={
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#ddd0da] text-primary">
                <User size={16} />
              </div>
            }
            rightIcon={<ChevronDown size={16} className="text-white" />}
          >
            Account
          </Button>
          <Button variant="secondary" className="text-white" size="lg">Take Assessment</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-lg border bg-foreground p-1 text-white sm:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="absolute left-0 top-full z-40 w-full border-t border-black/5 bg-white px-4 py-4 shadow-md sm:hidden">
          <ul className="space-y-3 text-sm font-normal text-primary/85">
            {navItems.map((item) => (
              <li key={item.label}>
                <Link
                  href="#"
                  className="group relative inline-flex items-center gap-1 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.label}</span>

                  {item.hasDropdown && <ChevronDown size={16} />}

                  {/* underline */}
                  <span className="absolute left-0 -bottom-1 h-1px w-0 bg-current transition-all duration-300 group-hover:w-full group-active:w-full"></span>
                </Link>
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
              rightIcon={<ChevronDown size={16} className="text-white" />}
            >
              Account
            </Button>
            <Button className="w-full text-white justify-center" variant="secondary">
              Take Assessment
            </Button>
          </div>
        </div>
      )}

      {/* Desktop Nav */}
      <nav className="hidden border-t border-black/5 bg-white sm:block">
        <ul className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-center gap-x-4 gap-y-1.5 px-4 py-2.5 text-xs font-normal text-primary sm:gap-x-5 sm:text-md md:text-lg md:py-5">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                href="#"
                className="group relative inline-flex items-center gap-1"
              >
                <span>{item.label}</span>

                {item.hasDropdown && (
                  <ChevronDown
                    size={16}
                    className="transition-transform duration-200"
                  />
                )}

                {/* underline */}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-current transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
