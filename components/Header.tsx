import Image from "next/image";
import TobamsLogo from "@/public/tobams-logo.png";
import Button from "./ui/Button";
import { User, ChevronDown } from "lucide-react";

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
  return (
    <header className="border-b border-black/10 bg-white">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2.5 sm:px-6 md:px-8 xl:px-">
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
            rightIcon={
              <ChevronDown size={16} className="text-[#dddoda]" />
            }
          >
            Account
          </Button>
          <Button variant="secondary" >
            Take Assessment
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded border border-primary/20 p-2 text-primary sm:hidden"
          aria-label="Open navigation menu"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        </button>
      </div>

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
