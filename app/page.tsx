"use client";

import './globals.css'
import Image from 'next/image'
import logo_icon from '../public/logo_icon.svg'
import { ArrowDown, Mail } from "lucide-react";
import { GithubSVG, DiscordSVG, YoutubeSVG } from "@/components/media-icons";
import { useEffect, useState } from "react";
import HomePageCode from "./home-page-code.mdx";
import SnowEffect from "@/components/snow-effect";

interface TutorialProps {
  name: string;
  description: string;
  image?: string;
  docs_link: string;
}
const tutorials: TutorialProps[] = [
  {
    name: "Getting Started",
    description: "Learn the basics of Apex Pathing and how to get started with your robot.",
    docs_link: "/docs/installation"
  },
  {
    name: "Following Paths",
    description: "Check out how you can implement Apex in to common control strategies.",
    docs_link: "/docs/following-paths"
  },
  {
    name: "B-Spline Theory",
    description: "Dive into the technical details and math of Apex Pathing's B-Spline implementation.",
    docs_link: "/docs/bspline-theory"
  },
  {
    name: "Arc Poses",
    description: "See how you can use Arc Poses to work smarter and create effective robot paths.",
    docs_link: "/docs/arc-poses"
  },
  {
    name: "Troubleshooting",
    description: "Learn how to troubleshoot common issues with Apex Pathing.",
    docs_link: "/docs/troubleshooting"
  }
];

interface RepositoryProps {
  name: string;
  description: string;
  link: string;
}
const repositories: RepositoryProps[] = [
  {
    name: "Library",
    description: "The core Gradle library that holds the Apex Pathing algorithms and features.",
    link: "https://github.com/ApexPathing/ApexPathing"
  },
  {
    name: "Quickstart",
    description: "A simple quickstart project to help you get up and running with Apex Pathing on your robot.",
    link: "https://github.com/ApexPathing/quickstart"
  },
  {
    name: "Documentation",
    description: "The web-based documentation for learning about Apex Pathing and its features (this site).",
    link: "https://github.com/ApexPathing/docs"
  },
  {
    name: "Visualizer",
    description: "A web-based tool for creating poses and paths for your Apex Pathing autonomous.",
    link: "https://github.com/ApexPathing/visualizer"
  }
];

interface SocialProps {
  name: string;
  icon: React.ReactNode;
  link: string;
}
const socialLinks: SocialProps[] = [
  {
    name: "GitHub",
    icon: <GithubSVG className="size-8"/>,
    link: "https://github.com/ApexPathing"
  },
  {
    name: "Discord",
    icon: <DiscordSVG className="size-8"/>,
    link: "https://discord.gg/tvuHnYncpQ"
  },
  {
    name: "YouTube",
    icon: <YoutubeSVG className="size-8"/>,
    link: "https://www.youtube.com/@Apex_Pathing"
  },
  {
    name: "Email",
    icon: <Mail className="size-8" />,
    link: "mailto:contact@apexpathing.com"
  }
];

export default function Home() {
  const [isScrollIndicatorVisible, setScrollIndicator] = useState(true);
        
  useEffect(() => {
    const handleScroll = () => {
      setScrollIndicator(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, true);
    return () => window.removeEventListener('scroll', handleScroll, true);
  }, []);

  return (
    <div className="relative flex flex-col w-full items-center">
      <SnowEffect /> 
      <div className="relative flex flex-col w-full items-center min-h-[calc(100vh-var(--nextra-navbar-height,4rem))] py-12 justify-center">

        <div className="max-w-3xl z-10 relative px-6 mt-8 sm:mt-0 text-center">
          <Image src={logo_icon} alt="Apex Pathing Logo" width={256} height={256} className="w-64 h-64 mb-4 sm:mb-6 mx-auto" />
          <h1 className="text-5xl tracking-tight font-bold mb-3 sm:mb-5">
            Apex Pathing
          </h1>
          <p className="text-xl text-accent-text mb-6 sm:mb-9 leading-relaxed">
            Path your way to the peaks
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <a href="/docs/about" className="px-8 py-3 rounded-full bg-brand-primary text-foreground font-medium hover:bg-brand-primary-hover transition-all">
              Get Started
            </a>
            <a href="https://github.com/ApexPathing/" target="_blank" className="px-8 py-3 rounded-full transition-all bg-brand-accent hover:bg-brand-accent-hover text-foreground">
              GitHub
            </a>
          </div>
        </div>

        <div className={`absolute bottom-5 sm:bottom-16 flex flex-col items-center gap-1 text-accent-text text-sm transition-opacity duration-300 ${isScrollIndicatorVisible ? 'opacity-100' : 'opacity-0'}`}>
          <ArrowDown className="animate-bounce" />
          View More
        </div>
      </div>

      <div className="relative z-20 flex flex-col w-full max-w-6xl px-6 pb-10">
        <div className="w-full p-6 mb-8 border border-divider rounded-xl bg-neutral-900 shadow-sm">
          <h3 className="text-2xl text-brand-primary-hover font-bold mb-4">Showcase</h3>
          <div className="w-full rounded-lg overflow-hidden border border-divider bg-background">
            <HomePageCode />
          </div>
        </div>

        <div className="w-full p-6 border border-divider rounded-xl bg-neutral-900 shadow-sm">
          <h3 className="text-2xl text-brand-primary-hover font-bold mb-4">Tutorials</h3>
          <div className="flex flex-row space-x-3 overflow-x-auto p-1 pb-4">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="flex flex-col w-72 md:w-90 gap-4 pb-4 shrink-0 rounded-lg border border-divider bg-background hover:shadow-xl hover:border-brand-primary transition-all cursor-pointer">
                <img src={tutorial.image || "./logo_icon.svg"} className="w-full h-32 object-cover rounded-t-lg border-b border-divider" />
                <h4 className="text-lg font-semibold mx-4">{tutorial.name}</h4>
                <p className="text-sm text-accent-text mx-4">{tutorial.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full p-6 mt-8 border border-divider rounded-xl bg-neutral-900 shadow-sm">
          <h3 className="text-2xl text-brand-primary-hover font-bold mb-4">Repositories</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {repositories.map((repository, index) => (
              <div key={index} className="flex flex-col p-4 gap-2 rounded-lg border border-divider bg-background hover:shadow-xl hover:border-brand-primary transition-all cursor-pointer" onClick={() => window.open(repository.link, '_blank')}>
                <h4 className="text-lg font-semibold">{repository.name}</h4>
                <p className="text-sm text-accent-text">{repository.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full p-6 mt-8 border border-divider rounded-xl bg-neutral-900 shadow-sm">
          <h3 className="text-2xl text-brand-primary-hover font-bold mb-4">Connect With Us</h3>
          <div className="flex flex-wrap gap-4">
            {socialLinks.map((social, index) => (
              <div key={index} className="flex flex-1 min-w-35 flex-row p-4 gap-3 items-center justify-center rounded-lg border border-divider bg-background hover:shadow-xl hover:border-brand-primary transition-all cursor-pointer" onClick={() => window.open(social.link, '_blank')}>
                {social.icon}
                <p className="font-medium">{social.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}