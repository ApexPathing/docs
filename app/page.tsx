"use client";

import './globals.css'
import Image from 'next/image'
import logo_icon from '../public/logo_icon.svg'
import { BackgroundBeams } from "@/components/background-beams";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center pt-16 px-6 text-center relative">
      <div className="max-w-3xl z-10 relative flex flex-col items-center">
        <Image
          src={logo_icon}
          alt="Apex Pathing Logo"
          width={288}
          height={288}
          className="w-72 h-72 mb-4 mx-auto"
          priority
        />

        <h1 className="text-5xl sm:text-6xl tracking-tight font-bold mb-4 text-foreground">
          Apex Pathing
        </h1>

        <p className="text-lg sm:text-xl mb-10 leading-relaxed font-medium tracking-wide text-primary">
          Path your way to the peaks!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
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