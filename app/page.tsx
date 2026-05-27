"use client";

import './globals.css'
import Image from 'next/image'
import logo_icon from '../public/logo_icon.svg'
import { BackgroundBeams } from "@/components/background-beams";
import { AnimatedGradientText } from "@/components/animated-gradient-text"

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-[calc(100vh-var(--nextra-navbar-height,4rem)-var(--nextra-banner-height,2.5rem)-3.8rem)] px-6 text-center relative">

      <div className="max-w-3xl mt-16 z-10 relative">
        <Image src={logo_icon} alt="Apex Pathing Logo" width={256} height={256} className="w-64 h-64 mb-6 mx-auto" />
        <h1 className="text-4xl sm:text-5xl tracking-tight font-bold mb-5">
          <AnimatedGradientText>
            Apex Pathing
          </AnimatedGradientText>
        </h1>
        <p className="text-xl text-accent-text mb-9 leading-relaxed">
          Path your way to the peaks
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a href="/docs/about" className="px-8 py-3 rounded-full bg-brand-primary text-foreground font-medium hover:bg-brand-primary-hover transition-all">
            Get Started
          </a>
          <a href="https://github.com/ApexPathing/" target="_blank" className="px-8 py-3 rounded-full transition-all bg-brand-accent hover:bg-brand-accent-hover">
            GitHub
          </a>
        </div>
      </div>
  
      <BackgroundBeams />
    </div>
  )
}