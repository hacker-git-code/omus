"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

export function Team() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Title animation
    gsap.fromTo(
      "#teamTitle",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#teamTitle",
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Team member animations
    gsap.fromTo(
      ".team-member",
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  const teamMembers = [
    {
      name: "Dr. Alexandra Chen",
      role: "Chief AI Officer",
      image: "https://ext.same-assets.com/451158774/4049178722.jpeg",
      bio: "PhD in Computer Science with 15+ years of experience in machine learning and neural networks.",
    },
    {
      name: "Marcus Johnson",
      role: "Head of Engineering",
      image: "https://ext.same-assets.com/4018623163/373920930.jpeg",
      bio: "Former Tech Lead at Google AI with extensive experience in large-scale AI systems.",
    },
    {
      name: "Sarah Lopez",
      role: "UX Director",
      image: "https://ext.same-assets.com/1762511559/670131056.jpeg",
      bio: "Award-winning designer focused on human-centered AI interactions and intuitive interfaces.",
    },
    {
      name: "Raj Patel",
      role: "Head of AI Research",
      image: "https://ext.same-assets.com/657731496/3381785673.jpeg",
      bio: "Published researcher specializing in reinforcement learning and autonomous systems.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 relative bg-muted"
    >
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mb-20">
          <h2
            id="teamTitle"
            className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-8"
          >
            Team
          </h2>
          <p className="text-xl text-muted-foreground max-w-prose">
            Behind our intelligent agents is a team of brilliant minds pushing the boundaries
            of what's possible with artificial intelligence.
          </p>
        </div>

        <div className="team-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-member group"
            >
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-black">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:opacity-80"
                />
              </div>
              <h3 className="text-lg font-bold">{member.name}</h3>
              <p className="text-primary text-sm mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 max-w-2xl">
          <h3 className="text-2xl font-bold tracking-tighter uppercase mb-6">Join Our Team</h3>
          <p className="text-muted-foreground mb-8">
            We're always looking for talented individuals passionate about AI
            and creating technology that makes a difference.
          </p>
          <a
            href="/careers"
            className="text-sm uppercase tracking-wider font-medium border-b pb-1 hover:text-primary hover:border-primary transition-colors inline-block"
          >
            View Careers
          </a>
        </div>
      </div>
    </section>
  );
}
