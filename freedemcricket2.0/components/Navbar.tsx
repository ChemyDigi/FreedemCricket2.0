"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV = [
  { href: "/home", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/profiles", label: "Profiles" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);


  if (pathname === "/") return null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) => pathname === href;

  return (
    <header
      className={[
        "fixed top-0 left-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-black/10 backdrop-blur-md shadow-[0_6px_20px_rgba(0,0,0,0.25)] border-b border-white/10"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-25 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/freedemlogo.png"
              alt="Freedem Cricket"
              width={72}
              height={72}
              className="h-25 w-25 "
              priority
            />
            <span className="sr-only">Freedem Cricket</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      
                      "text-white/90 hover:text-white transition-colors",
                      "relative",
                      isActive(item.href)
                        ? "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-[#1E84CA] after:rounded-full"
                        : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex">
            <Link
              href="/contact"
              className="rounded-full bg-[#1E84CA] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#5dabdf]"
            >
              Contact
            </Link>
          </div>

          {/* Mobile: Hamburger */}
          <button
            aria-label="Toggle Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            {open ? (
              // Close icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={[
          "md:hidden fixed inset-0 z-40 transition",
          open ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        {/* Overlay */}
        <div
          onClick={() => setOpen(false)}
          className={[
            "absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity",
            open ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />

        {/* Panel */}
        <aside
          className={[
            "absolute right-0 top-0 h-full w-4/5 max-w-xs",
            "bg-[#0B1030] text-white shadow-2xl transition-transform duration-300",
            open ? "translate-x-0" : "translate-x-full",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 py-4">
            <span className="text-base font-semibold tracking-wide">
              Menu
            </span>
            <button
              aria-label="Close Menu"
              onClick={() => setOpen(false)}
              className="rounded-md p-2 text-white/80 hover:text-white focus:outline-none focus:ring-2 focus:ring-white/40"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="px-3">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={[
                      "block rounded-lg px-4 py-3 text-base font-medium",
                      "text-white/90 hover:bg-white/5 hover:text-white transition",
                      isActive(item.href) ? "bg-white/5 text-white" : "",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 border-t border-white/10 px-4 pt-4">
              <Link
                href="/contact"
                className="block rounded-full bg-[#B32E2E] px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-[#9B2727]"
              >
                Contact
              </Link>
            </div>
          </nav>
        </aside>
      </div>
    </header>
  );
}
