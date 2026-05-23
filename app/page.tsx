"use client";

import './globals.css'
import Image from 'next/image'
import logo_icon from '../public/logo_icon.svg'
import { BackgroundBeams } from "@/components/background-beams";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-2 px-6 text-center relative">
      <div className="max-w-3xl z-10 relative flex flex-col items-center">
        <Image
          src={logo_icon}
          alt="Apex Pathing Logo"
          width={320}
          height={320}
          className="w-64 h-64 sm:w-80 sm:h-80 mb-2 mx-auto"
          priority
        />

        <h1 className="text-4xl sm:text-5xl tracking-tight font-bold mb-2 text-foreground">
          Apex Pathing
        </h1>

        <p className="text-base sm:text-lg mb-6 leading-relaxed font-semibold tracking-wide text-[#cc0000]">
          Path your way to the peaks!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
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
      <BackgroundBeams />
    </div>
  )
}