"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10 bg-black text-white relative">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl tracking-tighter uppercase font-bold">
                Iceberg<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-sm text-white/60 max-w-xs">
              Our AI agents uncover humanity's hidden capacity to transform business,
              technology, and society—revealing solutions already emerging beneath the surface.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-wider font-medium mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/the-project"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  The Project
                </Link>
              </li>
              <li>
                <Link
                  href="/impact"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Impact in Action
                </Link>
              </li>
              <li>
                <Link
                  href="/join"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Join the Journey
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-wider font-medium mb-6">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="text-white/60 hover:text-primary transition-colors"
                >
                  Cookies Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-xs tracking-wider font-medium mb-6">
              Stay Tuned
            </h3>
            <p className="text-sm text-white/60 mb-4">
              Join our newsletter to get the latest updates on AI advancements
              and our breakthrough solutions.
            </p>
            <div className="flex items-end gap-2">
              <div className="border-b border-white/30 flex-1">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-transparent w-full py-2 text-sm outline-none text-white placeholder:text-white/40"
                />
              </div>
              <button className="bg-primary text-black px-4 py-2 text-xs uppercase tracking-wide font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-white/40 mb-4 md:mb-0">
            © {new Date().getFullYear()} Iceberg AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            {["Twitter", "Instagram", "LinkedIn"].map((platform) => (
              <a
                key={platform}
                href="#"
                className="text-xs uppercase tracking-wide text-white/40 hover:text-primary transition-colors"
              >
                {platform}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
