"use client"; // 1. Added this so Framer Motion works in Next.js

import './globals.css'
import Image from 'next/image'
import logo_icon from '../public/logo_icon.svg'
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

export default function Home() {
  return (
    /* 2. Added "relative" and "antialiased" classes to this container wrapper */
    <div className="flex flex-col w-full items-center justify-center h-[calc(100vh-var(--nextra-navbar-height,4rem)-var(--nextra-banner-height,2.5rem)-3.8rem)] px-6 text-center relative antialiased">
      
      {/* 3. Added "z-10 relative" to your content box so text stays on top of the beams */}
      <div className="max-w-3xl mt-16 z-10 relative">
        <Image src={logo_icon} alt="Apex Pathing Logo" width={256} height={256} className="w-64 h-64 mb-6 mx-auto" />
        <h1 className="text-4xl sm:text-5xl tracking-tight font-bold mb-5">
          Apex Pathing
        </h1>
        <p className="text-xl text-accent-text mb-9 leading-relaxed">
          Path your way to the peaks
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a href="/docs/about" className="px-8 py-3 rounded-full bg-brand-primary text-foreground font-medium hover:bg-brand-primary-hover transition-all">
            Get Started
          </a>
          <a href="https://github.com/ApexPathing/" target="_blank" className="px-8 py-3 rounded-full border border-accent-text transition-all">
            GitHub
          </a>
        </div>
      </div>

      {/* 4. Placed the beams right here at the bottom of the container */}
      <BackgroundBeams />
    </div>
  )
}
