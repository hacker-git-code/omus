"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function ScrollSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Create a slowed down scroll effect for text
    gsap.to("#scrollText", {
      y: "-30%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax the image slower than scroll
    gsap.to("#parallaxImage", {
      y: "-15%",
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    // Fade in numbered items
    gsap.fromTo(
      ".numbered-item",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".numbered-items",
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden"
    >
      {/* Split section with image and text */}
      <div className="h-screen flex flex-col lg:flex-row">
        {/* Left side - Image */}
        <div className="w-full lg:w-1/2 h-[60vh] lg:h-full relative overflow-hidden">
          <div id="parallaxImage" className="absolute inset-0 w-full h-[120%]">
            <Image
              src="https://ext.same-assets.com/2166101167/4017370958.jpeg"
              alt="AI landscape"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right side - Text */}
        <div className="w-full lg:w-1/2 h-[40vh] lg:h-full flex items-center bg-black">
          <div className="relative w-full h-full flex items-center px-6 lg:px-12">
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage: `url(https://ext.same-assets.com/912246379/1992789802.png)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            <div id="scrollText" className="relative">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-12 text-white">
                Echoes of <span className="text-primary">Change</span>
              </h2>
              <p className="text-lg md:text-xl text-white/70 max-w-xl">
                Our AI agents delve into the stories of transformation, uncovering patterns and solutions that reshape how organizations operate, making the impossible possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Numbered items section */}
      <div className="bg-muted py-24">
        <div className="container mx-auto px-6">
          <div className="numbered-items grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {[
              "Our agents employ advanced neural network architectures to understand complex contexts and adapt to changing environments.",
              "Through continuous learning and real-time processing, our systems evolve alongside your business needs.",
              "Technology augmentation without replacement—our AI creates new possibilities while keeping humans at the center."
            ].map((text, index) => (
              <div key={index} className="numbered-item relative pl-12">
                <div className="absolute left-0 top-0 text-4xl font-mono font-bold text-primary opacity-70">
                  {index + 1}
                </div>
                <p className="text-muted-foreground">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
