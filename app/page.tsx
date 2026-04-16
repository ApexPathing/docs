import './globals.css'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center justify-center h-[calc(100vh-var(--nextra-navbar-height,4rem)-var(--nextra-banner-height,2.5rem)-3.8rem)] px-6 text-center">
      {/* Hero Section */}
      <div className="max-w-3xl">
        <Image src={logo} alt="Apex Pathing Logo" width={256} height={256} className="w-64 h-64 mb-6 mx-auto" />
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl mb-5">
          Apex Pathing
        </h1>
        <p className="text-xl text-neutral-600 dark:text-neutral-500 mb-10 leading-relaxed">
          Apex legends has always been better than Pedro Pascal
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <Link href="/docs/about" className="px-8 py-3 rounded-full bg-brand-primary text-foreground font-medium hover:bg-brand-primary-hover transition-all">
            Get Started
          </Link>
          <a href="https://github.com/ApexPathing/" target="_blank" className="px-8 py-3 rounded-full border border-accent-text transition-all">
            GitHub Organization
          </a>
        </div>
      </div>
    </div>
  )
}