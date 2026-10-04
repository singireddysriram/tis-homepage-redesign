"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/animation/Reveal";
import CustomCursor from "@/components/ui/CustomCursor";
import ScrollProgress from "@/components/ui/ScrollProgress";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <main className="min-h-screen bg-[#f7f3eb] text-[#17251d]">
        {/* NAVBAR */}
        {/* NAVBAR */}
        <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-8">
          <nav className="mx-auto max-w-7xl rounded-full border border-white/30 bg-[#17251d]/95 px-5 py-3 text-white shadow-lg backdrop-blur-md">
            <div className="flex items-center justify-between">
              {/* Logo / Brand */}
              <Link
                href="/"
                className="flex items-center gap-3"
                onClick={() => setMenuOpen(false)}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d8b66a] text-sm font-bold text-[#d8b66a]">
                  TIS
                </div>

                <div className="hidden sm:block">
                  <p className="text-sm font-semibold tracking-wide">
                    TULAS INTERNATIONAL SCHOOL
                  </p>

                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/60">
                    The Modern Gurukul
                  </p>
                </div>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden items-center gap-7 text-sm lg:flex">
                <a href="#about" className="transition hover:text-[#d8b66a]">
                  About
                </a>

                <a
                  href="#academics"
                  className="transition hover:text-[#d8b66a]"
                >
                  Academics
                </a>

                <a href="#campus" className="transition hover:text-[#d8b66a]">
                  Campus Life
                </a>

                <a href="#sports" className="transition hover:text-[#d8b66a]">
                  Sports
                </a>

                <a href="#contact" className="transition hover:text-[#d8b66a]">
                  Contact
                </a>
              </div>

              {/* Desktop CTA */}
              <a
                href="#admissions"
                className="hidden rounded-full bg-[#d8b66a] px-5 py-2.5 text-sm font-semibold text-[#17251d] transition hover:scale-105 lg:block"
              >
                Apply Now
              </a>

              {/* Mobile Menu Button */}
              <button
                type="button"
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-xl lg:hidden"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
              >
                {menuOpen ? "×" : "☰"}
              </button>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
              <div className="mt-4 border-t border-white/10 pt-4 lg:hidden">
                <div className="flex flex-col gap-1 text-sm">
                  <a
                    href="#about"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-[#d8b66a]"
                  >
                    About
                  </a>

                  <a
                    href="#academics"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-[#d8b66a]"
                  >
                    Academics
                  </a>

                  <a
                    href="#campus"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-[#d8b66a]"
                  >
                    Campus Life
                  </a>

                  <a
                    href="#sports"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-[#d8b66a]"
                  >
                    Sports
                  </a>

                  <a
                    href="#contact"
                    onClick={() => setMenuOpen(false)}
                    className="rounded-xl px-4 py-3 transition hover:bg-white/10 hover:text-[#d8b66a]"
                  >
                    Contact
                  </a>

                  <a
                    href="#admissions"
                    onClick={() => setMenuOpen(false)}
                    className="mt-2 rounded-full bg-[#d8b66a] px-5 py-3 text-center font-semibold text-[#17251d]"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            )}
            {menuOpen && <div>{/* mobile links */}</div>}
          </nav>
        </header>

        {/* HERO */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-[#17251d] px-5 pb-16 pt-28 text-white sm:px-6 md:px-12 md:pb-20 md:pt-32 lg:px-20">
          {/* Decorative circles */}
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full border border-[#d8b66a]/20" />
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#d8b66a]/20" />

          <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 sm:gap-12 lg:grid-cols-2">
            {/* Hero Text */}
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#d8b66a]">
                Dehradun • Uttarakhand
              </p>

              <h1 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                Where tradition
                <span className="block text-[#d8b66a]">meets tomorrow.</span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
                Welcome to Tulas International School — a modern Gurukul where
                academics, character, creativity and life beyond the classroom
                come together.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#admissions"
                  className="rounded-full bg-[#d8b66a] px-7 py-3.5 text-center font-semibold text-[#17251d] transition hover:-translate-y-1"
                >
                  Explore Admissions
                </a>

                <a
                  href="#about"
                  className="rounded-full border border-white/30 px-7 py-3.5 text-center font-semibold transition hover:bg-white hover:text-[#17251d]"
                >
                  Discover TIS
                </a>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[#304238] shadow-2xl">
              <img
                src="/hero-campus.jpg"
                alt="Tulas International School campus"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#17251d]/80 via-transparent to-[#17251d]/10" />

              <div className="absolute inset-5 rounded-[1.5rem] border border-white/20" />

              <div className="absolute right-8 top-8 flex h-20 w-20 items-center justify-center rounded-full border border-[#d8b66a]/60 bg-[#17251d]/60 text-center backdrop-blur-sm">
                <span className="text-xs font-semibold leading-4 text-[#d8b66a]">
                  EST.
                  <br />
                  2012
                </span>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[#d8b66a]">
                  Tulas International School
                </p>

                <p className="mt-2 text-2xl font-medium text-white">
                  Mind. Body. Soul.
                </p>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50 md:flex">
            <span className="h-px w-10 bg-white/30" />
            Scroll to explore
            <span className="h-px w-10 bg-white/30" />
          </div>
        </section>

        {/* INTRODUCTION */}
        <section id="about" className="px-6 py-24 md:px-12 lg:px-20 lg:py-32">
          <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <Reveal direction="left">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a88335]">
                  The TIS Experience
                </p>

                <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
                  Education that goes beyond the classroom.
                </h2>
              </div>
            </Reveal>

            <Reveal direction="right" delay={0.15}>
              <div>
                <p className="text-lg leading-8 text-black/60">
                  At Tulas International School, education is designed around
                  holistic development. The school combines its Modern Gurukul
                  philosophy with contemporary facilities and opportunities
                  across academics, arts, athletics and student life.
                </p>

                <a
                  href="#academics"
                  className="mt-7 inline-flex border-b border-[#17251d] pb-1 font-semibold"
                >
                  Explore our approach →
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* STATS */}
        {/* STATS */}
        <section className="bg-[#e8dfcf] px-6 py-16 md:px-12 lg:px-20">
          <Reveal direction="up">
            <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 md:grid-cols-4">
              <Stat number="22" label="Acre Campus" />
              <Stat number="16+" label="Olympic Sports" />
              <Stat number="24×7" label="Medical Assistance" />
              <Stat number="6:1" label="Student Teacher Ratio" />
            </div>
          </Reveal>
        </section>

        {/* ACADEMICS */}
        <section
          id="academics"
          className="bg-white px-6 py-24 md:px-12 lg:px-20 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <Reveal direction="up">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#a88335]">
                Academics
              </p>
            </Reveal>

            <div className="mt-5 grid gap-10 lg:grid-cols-2">
              <Reveal direction="left">
                <h2 className="text-4xl font-semibold leading-tight md:text-5xl">
                  Strong foundations.
                  <br />
                  Curious minds.
                </h2>
              </Reveal>

              <Reveal direction="right" delay={0.15}>
                <p className="max-w-xl text-lg leading-8 text-black/60">
                  TIS follows the CBSE curriculum while emphasizing analytical
                  thinking, creativity, experiential learning and the wider
                  development of every student.
                </p>
              </Reveal>
            </div>
          </div>
        </section>

        {/* CAMPUS LIFE */}
        <section
          id="campus"
          className="bg-[#17251d] px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#d8b66a]">
              Beyond Academics
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight md:text-5xl">
              Discover a campus where every day brings something new.
            </h2>

            <Reveal direction="up">
              <div id="sports" className="mt-14 grid gap-5 md:grid-cols-3">
                <FeatureCard
                  number="01"
                  title="Sports"
                  text="A wide range of sporting opportunities that encourage discipline, teamwork and confidence."
                />

                <FeatureCard
                  number="02"
                  title="Arts & Creativity"
                  text="Music, art, drama and creative experiences help students discover and express their individuality."
                />

                <FeatureCard
                  number="03"
                  title="Life at TIS"
                  text="Residential life, friendships, leadership and community create learning experiences beyond textbooks."
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ADMISSIONS CTA */}
        {/* ADMISSIONS CTA */}
        <section
          id="admissions"
          className="px-6 py-24 md:px-12 lg:px-20 lg:py-32"
        >
          <Reveal direction="up">
            <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#d8b66a] px-7 py-14 text-[#17251d] md:px-14 md:py-20">
              <div className="max-w-3xl">
                <p className="text-sm font-bold uppercase tracking-[0.25em]">
                  Admissions
                </p>

                <h2 className="mt-5 text-4xl font-semibold leading-tight md:text-6xl">
                  Give your child a place to learn, grow and belong.
                </h2>

                <p className="mt-6 max-w-2xl text-lg leading-8 text-[#17251d]/70">
                  Discover the Tulas International School experience and explore
                  admission opportunities for the upcoming academic session.
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-flex rounded-full bg-[#17251d] px-7 py-3.5 font-semibold text-white transition hover:-translate-y-1"
                >
                  Start Your Journey →
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="bg-[#101a15] px-6 py-12 text-white md:px-12 lg:px-20"
        >
          <div className="mx-auto flex max-w-7xl flex-col justify-between gap-8 md:flex-row">
            <div>
              <p className="font-semibold">TULAS INTERNATIONAL SCHOOL</p>
              <p className="mt-2 text-sm text-white/50">
                The Modern Gurukul • Dehradun, Uttarakhand
              </p>
            </div>

            <p className="text-sm text-white/40">
              © {new Date().getFullYear()} Tulas International School
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}

function Stat({ number, label }) {
  return (
    <div className="text-center md:text-left">
      <p className="text-4xl font-semibold text-[#17251d] md:text-5xl">
        {number}
      </p>
      <p className="mt-2 text-sm uppercase tracking-[0.15em] text-black/50">
        {label}
      </p>
    </div>
  );
}

function FeatureCard({ number, title, text }) {
  return (
    <article className="rounded-3xl border border-white/10 bg-white/5 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white/10">
      <span className="text-sm text-[#d8b66a]">{number}</span>

      <h3 className="mt-12 text-2xl font-semibold">{title}</h3>

      <p className="mt-4 leading-7 text-white/55">{text}</p>
    </article>
  );
}
