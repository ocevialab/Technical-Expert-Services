"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { site } from "@/lib/site";

const SCROLL_DIR_THRESHOLD = 8;
const TOP_UNPIN = 36;
/** Hysteresis: solid bar after scrolling down past this on home. */
const HOME_SOLID_ENTER = 168;
/** Hysteresis: transparent hero again only after scrolling back up above this. */
const HOME_SOLID_EXIT = 72;
/** Blue-gradient hero on inner pages (nav matches About until scroll). */
const INNER_BLUE_HERO_PATHS = new Set(["/about", "/services"]);
const INNER_HERO_SOLID_ENTER = 220;
const INNER_HERO_SOLID_EXIT = 72;
/** Slide hide / show (transform only — feels smoother than mixing with bg). */
const NAV_SLIDE_MS = 520;
/** Background / chrome crossfade (slower so white does not “snap” off). */
const NAV_SURFACE_MS = 720;

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
];

function LogoMark({ className }: { className?: string }) {
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden className={`shrink-0 ${className ?? "text-brand-asset"}`}>
      <circle cx="16" cy="16" r="3" fill="currentColor" />
      {Array.from({ length: 12 }).map((_, i) => (
        <rect
          key={i}
          x="15"
          y="2"
          width="2"
          height="8"
          rx="1"
          fill="currentColor"
          transform={`rotate(${i * 30} 16 16)`}
        />
      ))}
    </svg>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  /** On home: once true, solid nav until user scrolls back up past HOME_SOLID_EXIT (hysteresis). */
  const [homePastHero, setHomePastHero] = useState(false);
  /** Transparent nav over unified blue hero on About & Services. */
  const [innerBluePastHero, setInnerBluePastHero] = useState(false);
  const lastScrollY = useRef(0);
  const isHome = pathname === "/";
  const isInnerBlueHero = INNER_BLUE_HERO_PATHS.has(pathname);
  const glassHeroNav =
    (isHome && !menuOpen && !homePastHero) || (isInnerBlueHero && !menuOpen && !innerBluePastHero);

  useEffect(() => {
    const y = typeof window !== "undefined" ? window.scrollY : 0;
    lastScrollY.current = y;
    setNavHidden(false);
    if (pathname === "/") {
      setHomePastHero(y > HOME_SOLID_ENTER);
    } else {
      setHomePastHero(false);
    }
    if (INNER_BLUE_HERO_PATHS.has(pathname)) {
      setInnerBluePastHero(y > INNER_HERO_SOLID_ENTER);
    } else {
      setInnerBluePastHero(false);
    }
  }, [pathname]);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    const onScroll = () => {
      const y = window.scrollY;

      if (isHome && !menuOpen) {
        if (y > HOME_SOLID_ENTER) setHomePastHero(true);
        else if (y < HOME_SOLID_EXIT) setHomePastHero(false);
      } else if (!isHome) {
        setHomePastHero(false);
      }

      if (isInnerBlueHero && !menuOpen) {
        if (y > INNER_HERO_SOLID_ENTER) setInnerBluePastHero(true);
        else if (y < INNER_HERO_SOLID_EXIT) setInnerBluePastHero(false);
      } else if (!isInnerBlueHero) {
        setInnerBluePastHero(false);
      }

      if (menuOpen || reduceMotion.matches) {
        setNavHidden(false);
        lastScrollY.current = y;
        return;
      }

      const prev = lastScrollY.current;
      const delta = y - prev;
      lastScrollY.current = y;

      if (y < TOP_UNPIN) {
        setNavHidden(false);
        return;
      }

      if (Math.abs(delta) < SCROLL_DIR_THRESHOLD) return;

      if (delta > 0) setNavHidden(true);
      else setNavHidden(false);
    };

    const onReducePref = () => {
      if (reduceMotion.matches) setNavHidden(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    reduceMotion.addEventListener("change", onReducePref);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      reduceMotion.removeEventListener("change", onReducePref);
    };
  }, [menuOpen, isHome, isInnerBlueHero]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 will-change-transform motion-reduce:transition-none ${
        navHidden && !menuOpen ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
      style={{
        transition: `transform ${NAV_SLIDE_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
      }}
    >
      <div
        className={`isolate ${
          glassHeroNav
            ? "border-b border-transparent bg-transparent shadow-none"
            : "border-b border-transparent bg-background/92 shadow-none backdrop-blur-sm"
        } motion-reduce:transition-none`}
        style={{
          transition: `background-color ${NAV_SURFACE_MS}ms cubic-bezier(0.33, 1, 0.68, 1), border-color ${NAV_SURFACE_MS}ms cubic-bezier(0.33, 1, 0.68, 1), box-shadow ${NAV_SURFACE_MS}ms cubic-bezier(0.33, 1, 0.68, 1)`,
        }}
      >
        <div className="flex h-16 w-full items-center justify-between gap-4 px-8 sm:px-10 lg:px-14 xl:px-16">
        <Link
          href="/"
          className="flex min-w-0 max-w-[min(100%,14rem)] shrink items-center gap-2 sm:max-w-[18rem] md:max-w-none"
          onClick={() => setMenuOpen(false)}
        >
          <LogoMark className={`transition-colors duration-700 ease-out motion-reduce:transition-none ${glassHeroNav ? "text-white" : "text-brand-asset"}`} />
          <span
            className={`text-left text-sm font-normal leading-snug tracking-tight transition-colors duration-700 ease-out motion-reduce:transition-none sm:text-base md:text-lg ${glassHeroNav ? "text-white" : "text-brand-navy"}`}
          >
            {site.brand}
          </span>
        </Link>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 md:flex md:items-center md:gap-8">
          {navLinks.map(({ href, label }) => {
            const active = pathname === href || (href !== "/" && pathname.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-2 text-sm font-medium transition-[opacity,color] duration-700 ease-out motion-reduce:transition-none hover:opacity-70 ${glassHeroNav ? "text-white" : "text-brand-navy"}`}
              >
                <span
                  className={`h-1.5 w-1.5 shrink-0 rounded-full transition-colors duration-700 ease-out motion-reduce:transition-none ${active ? (glassHeroNav ? "bg-white" : "bg-brand-asset") : "bg-transparent"}`}
                  aria-hidden
                />
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full bg-brand-navy px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:brightness-110 motion-reduce:hover:brightness-100 md:inline-flex"
          >
            Get Free Quote
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            <span className={`block h-0.5 w-6 transition-colors duration-700 ease-out motion-reduce:transition-none ${glassHeroNav ? "bg-white" : "bg-brand-asset"}`} />
            <span className={`block h-0.5 w-6 transition-colors duration-700 ease-out motion-reduce:transition-none ${glassHeroNav ? "bg-white" : "bg-brand-asset"}`} />
            <span className={`block h-0.5 w-6 transition-colors duration-700 ease-out motion-reduce:transition-none ${glassHeroNav ? "bg-white" : "bg-brand-asset"}`} />
          </button>
        </div>
        </div>

      {menuOpen && (
        <div className="border-t border-primary-100/40 bg-background/95 px-8 py-4 backdrop-blur-md sm:px-10 md:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href || (href !== "/" && pathname.startsWith(href));
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium text-brand-navy hover:bg-primary-100/60"
                >
                  {active && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-asset" />}
                  {!active && <span className="w-1.5 shrink-0" />}
                  {label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-full bg-brand-navy py-3 text-center text-sm font-semibold text-white transition hover:brightness-110 motion-reduce:hover:brightness-100"
            >
              Get Free Quote
            </Link>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
