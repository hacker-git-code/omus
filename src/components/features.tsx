"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Link from "next/link";

interface InitiativeProps {
  title: string;
  description: string;
  image: string;
  category: string;
  location: string;
  year: string;
  href: string;
}

const Initiative = ({ title, description, image, category, location, year, href }: InitiativeProps) => (
  <Link
    href={href}
    className="group block"
  >
    <div className="overflow-hidden aspect-[4/3] mb-4">
      <Image
        src={image}
        alt={title}
        width={640}
        height={480}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
    </div>
    <h3 className="text-lg font-bold mb-2 transition-colors group-hover:text-primary">
      {title}
    </h3>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
      {description}
    </p>
    <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-muted-foreground">
      <span>{category}</span>
      <span>{location}</span>
      <span>{year}</span>
    </div>
  </Link>
);

export function Features() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      "#featuresTitle",
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#featuresTitle",
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Fullwidth text animation
    gsap.fromTo(
      "#fullWidthText",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#fullWidthText",
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Card animations
    gsap.fromTo(
      ".initiative-card",
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".initiatives-grid",
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  // Sample initiative data
  const initiatives = [
    {
      title: "Autonomous Trading System",
      description: "AI-powered financial trading system that adapts to market conditions and integrates with multiple exchanges.",
      image: "https://ext.same-assets.com/1499303886/2448583960.jpeg",
      category: "Finance",
      location: "New York, USA",
      year: "2023",
      href: "/impact/autonomous-trading",
    },
    {
      title: "AI Healthcare Assistant",
      description: "Medical diagnostic tool using machine learning to help identify patterns and assist healthcare professionals.",
      image: "https://ext.same-assets.com/3250912639/2151772681.jpeg",
      category: "Healthcare",
      location: "London, UK",
      year: "2022",
      href: "/impact/healthcare-assistant",
    },
    {
      title: "Sustainable Agriculture System",
      description: "AI-powered system for monitoring and optimizing agricultural operations with minimal environmental impact.",
      image: "https://ext.same-assets.com/1615760972/1391571981.jpeg",
      category: "Agriculture",
      location: "Amsterdam, Netherlands",
      year: "2023",
      href: "/impact/sustainable-agriculture",
    },
    {
      title: "Transportation Optimizer",
      description: "Real-time traffic management system reducing congestion and emissions through smart routing algorithms.",
      image: "https://ext.same-assets.com/657731496/3381785673.jpeg",
      category: "Transportation",
      location: "Singapore",
      year: "2022",
      href: "/impact/transportation-optimizer",
    },
    {
      title: "Distributed Decision Platform",
      description: "Collaborative decision-making platform enabling consensus-building in large distributed organizations.",
      image: "https://ext.same-assets.com/3525135024/2257558395.jpeg",
      category: "Governance",
      location: "Taipei, Taiwan",
      year: "2023",
      href: "/impact/distributed-decision",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative"
    >
      {/* Intro section */}
      <div className="container mx-auto px-6 mb-24">
        <div className="max-w-2xl">
          <h2
            id="featuresTitle"
            className="text-3xl md:text-4xl uppercase font-bold tracking-tighter mb-6"
          >
            Impact in Action
          </h2>
          <p className="text-xl text-muted-foreground">
            Our innovative AI agents are transforming industries and creating
            positive change, with solutions already working across the globe.
          </p>
        </div>
      </div>

      {/* Full-width text section */}
      <div className="w-full py-32 bg-black relative mb-24">
        <div
          className="absolute inset-0 opacity-20 z-0"
          style={{
            backgroundImage: `url(https://ext.same-assets.com/2743888320/3492041354.png)`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div id="fullWidthText" className="container mx-auto px-6 relative z-10">
          <p className="text-3xl md:text-5xl font-bold tracking-tighter text-white/90 max-w-5xl mx-auto">
            Around the world, thousands of initiatives are quietly revolutionizing our predatory system, though like an iceberg they often remain hidden beneath the surface.
          </p>
        </div>
      </div>

      {/* Initiatives grid */}
      <div className="container mx-auto px-6 mb-20">
        <div className="initiatives-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {initiatives.map((initiative, index) => (
            <div key={index} className="initiative-card">
              <Initiative {...initiative} />
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <Link
            href="/impact"
            className="text-sm uppercase tracking-wider font-medium border-b pb-1 hover:text-primary hover:border-primary transition-colors"
          >
            All initiatives
          </Link>
        </div>
      </div>
    </section>
  );
}
