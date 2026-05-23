"use client";

import './globals.css'
import Image from 'next/image'
import logo_icon from '../public/logo_icon.svg'
import { BackgroundBeams } from "@/components/background-beams";

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-[calc(100vh-var(--nextra-navbar-height,4rem)-var(--nextra-banner-height,2.5rem)-3.8rem)] px-6 text-center relative">
      
      <div className="max-w-3xl z-10 relative flex flex-col items-center">
        <Image
          src={logo_icon}
          alt="Apex Pathing Logo"
          width={256}
          height={256}
          className="w-56 h-56 mb-4 mx-auto drop-shadow-[0_0_32px_rgba(204,0,0,0.4)]"
        />

        <h1
          className="text-5xl sm:text-6xl tracking-tight font-bold mb-4"
          style={{
            background: "linear-gradient(180deg, #ffffff 40%, #cc0000 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Apex Pathing
        </h1>

        <p
          className="text-xl mb-10 leading-relaxed font-semibold tracking-wide"
          style={{
            background: "linear-gradient(90deg, #cc0000, #ff6666, #8B0000, #ff3333, #cc0000)",
            backgroundSize: "200% auto",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            animation: "shimmer 3s linear infinite",
          }}
        >
          Path your way to the peaks!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">

            href="/docs/about"
            className="px-8 py-3 rounded-full bg-brand-primary text-white font-semibold hover:bg-brand-primary-hover transition-all hover:scale-105 active:scale-95"
          >
            Get Started
          </a>

            href="https://github.com/ApexPathing/"
            target="_blank"
            className="px-8 py-3 rounded-full bg-brand-accent text-foreground font-semibold hover:bg-brand-accent-hover transition-all hover:scale-105 active:scale-95 border border-red-900/40"
          >
            GitHub
          </a>
        </div>
      </div>

      <BackgroundBeams />
    </div>
  )
}