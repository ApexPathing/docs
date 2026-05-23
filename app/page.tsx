"use client";

import './globals.css'
import Image from 'next/image'
import logo_icon from '../public/logo_icon.svg'
import { BackgroundBeams } from "@/components/background-beams";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-start min-h-[100vh] pt-16 px-6 text-center relative overflow-hidden">
      <div className="max-w-3xl z-10 relative flex flex-col items-center">
        <Image
          src={logo_icon}
          alt="Apex Pathing Logo"
          width={280}
          height={280}
          className="w-56 h-56 sm:w-72 sm:h-72 mb-2 mx-auto"
          priority
        />

        <h1 className="text-4xl sm:text-5xl tracking-tight font-bold mb-4 text-foreground">
          Apex Pathing
        </h1>

        <p className="text-base sm:text-lg mb-2 leading-relaxed font-semibold tracking-wide text-[#cc0000]">
          Path your way to the peaks!
        </p>

        <div className="w-64 max-w-sm h-[1px] bg-[#cc0000]/40 mb-6 rounded-full"></div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <a
            href="/docs/about"
            className="px-8 py-3 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary-hover transition-all"
          >
            Get Started
          </a>

          <a
            href="https://github.com/ApexPathing/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-brand-accent text-foreground font-semibold hover:bg-brand-accent-hover transition-all border border-red-900"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>
  )
}