"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SplitType from "split-type";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Split text animation for main title
    const titleElement = document.querySelector("#mainTitle") as HTMLElement;
    if (titleElement) {
      const titleSplit = new SplitType(titleElement, { types: "chars" });
      gsap.fromTo(
        titleSplit.chars,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 1,
          ease: "power4.out",
          delay: 0.5,
        }
      );
    }

    // Parallax effect on scroll for the image
    gsap.to("#heroImage", {
      y: "20%",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Animate the vertical text
    gsap.fromTo(
      "#verticalText",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 1.5,
        ease: "power2.out",
        delay: 1.2,
      }
    );

    // Fade in subtitle
    gsap.fromTo(
      "#subtitle",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        delay: 1.5,
      }
    );

    // Fade in discovery button
    gsap.fromTo(
      "#discoverBtn",
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        delay: 2,
      }
    );

  }, { scope: heroRef });

  return (
    <section
      ref={heroRef}
      className="h-screen w-full relative overflow-hidden flex flex-col justify-end pt-20"
    >
      {/* Fullscreen background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          id="heroImage"
          src="https://ext.same-assets.com/1786559659/1070927783.jpeg"
          alt="AI landscape"
          fill
          quality={100}
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Vertical side text */}
      <div
        id="verticalText"
        className="absolute left-6 top-1/2 -translate-y-1/2 vertical-text text-sm tracking-widest text-muted-foreground/80 z-10"
      >
        ICEBERG AI • RESHAPING THE FUTURE
      </div>

      {/* Main content */}
      <div className="container mx-auto px-6 relative z-10 mb-20">
        <div className="max-w-5xl mx-auto">
          <h1
            id="mainTitle"
            ref={titleRef}
            className="text-5xl md:text-7xl lg:text-8xl mb-10 font-bold tracking-tighter uppercase"
          >
            Change Begins Where We're Not Looking
          </h1>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <p
              id="subtitle"
              className="text-lg md:text-xl text-muted-foreground max-w-lg"
            >
              Our AI agents uncover humanity's hidden capacity to transform business, technology, and society—revealing solutions already emerging beneath the surface.
            </p>

            <Link
              id="discoverBtn"
              href="/the-project"
              className="text-sm md:text-base uppercase tracking-wider font-medium border-b pb-1 hover:text-primary hover:border-primary transition-colors whitespace-nowrap"
            >
              Discover the project
            </Link>
          </div>
        </div>
      </div>

      {/* Numbered items at bottom */}
      <div className="container mx-auto px-6 relative z-10 mb-12 hidden md:block">
        <div className="grid grid-cols-3 gap-12">
          {[
            "Iceberg AI is a technology ecosystem that uncovers hidden capacity to tackle complex problems.",
            "Through autonomous agents, collaborative systems, and human augmentation, Iceberg AI reveals solutions already emerging beneath the surface.",
            "It's an invitation to reimagine the future and reconnect with our ability to transform it."
          ].map((text, index) => (
            <div key={index} className="pl-8 relative">
              <div className="absolute left-0 top-0 text-primary font-mono text-sm">
                0{index + 1}.
              </div>
              <p className="text-sm text-muted-foreground">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
