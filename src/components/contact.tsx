"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Here you would typically submit the form data to your backend
  };

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Content animation
    gsap.fromTo(
      "#contactContent",
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
          trigger: "#contactContent",
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-black text-white relative"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `url(https://ext.same-assets.com/3191615392/69964635.png)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div
        id="contactContent"
        className="container mx-auto px-6 relative z-10"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Left Side - Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter uppercase mb-8">
                We'd Love to Hear From You
              </h2>
              <p className="text-lg text-white/70 mb-12 max-w-md">
                Whether you're interested in learning more about Iceberg AI,
                collaborating on an initiative, or sharing your insights, reach out!
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <p className="text-white/70">info@icebergai.com</p>
                </div>

                <div>
                  <h3 className="font-bold mb-1">Location</h3>
                  <p className="text-white/70">123 AI Boulevard, San Francisco, CA 94105</p>
                </div>

                <div className="pt-8">
                  <h3 className="font-bold mb-4">Follow us</h3>
                  <div className="flex space-x-6">
                    {["Twitter", "Instagram", "LinkedIn"].map((platform) => (
                      <a
                        key={platform}
                        href="#"
                        className="text-sm uppercase tracking-wide text-white/70 hover:text-primary transition-colors"
                      >
                        {platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div>
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      {...register("name", { required: "Name is required" })}
                      className={`bg-white/10 border-white/10 text-white placeholder:text-white/50 ${errors.name ? "border-red-500" : ""}`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Invalid email address",
                        },
                      })}
                      className={`bg-white/10 border-white/10 text-white placeholder:text-white/50 ${errors.email ? "border-red-500" : ""}`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500">{errors.email.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-white">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="How can we help you?"
                      rows={4}
                      {...register("message", { required: "Message is required" })}
                      className={`bg-white/10 border-white/10 text-white placeholder:text-white/50 ${errors.message ? "border-red-500" : ""}`}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500">{errors.message.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 text-sm uppercase tracking-wider font-medium bg-primary text-black hover:bg-primary/90 transition-colors"
                  >
                    Send Message
                  </button>

                  <p className="text-xs text-white/50 text-center">
                    By submitting this form, you agree to our{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
