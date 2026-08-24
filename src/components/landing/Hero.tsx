"use client";

import { SignUpButton } from "@clerk/nextjs";
import { Button } from "../ui/button";
import { Calendar1Icon, MicIcon } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      {/* GRID BG */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/5 to-primary/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] opacity-20"></div>
      </div>

      {/* GRADIENT ORBS */}
      <div className="absolute top-20 left-1/4 w-72 h-72 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-primary/15 to-primary/5 rounded-full blur-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* LEFT CONTENT */}
            <div className="space-y-10">
              <div className="space-y-6">
                
                {/* BADGE */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/5 rounded-full border border-primary/20 backdrop-blur-sm">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-primary">AI-Powered Eye Care Assistant</span>
                </div>

                {/* MAIN HEADING */}
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Your Eye Health
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    Questions
                  </span>
                  <br />
                  <span className="bg-gradient-to-br from-foreground via-foreground to-foreground/70 bg-clip-text text-transparent">
                    Answered Instantly
                  </span>
                </h1>
                {/* SUBHEADING */}
                <p className="text-lg text-muted-foreground leading-relaxed max-w-xl font-medium">
                  Talk to our AI eye assistant for instant vision insights, seamless booking, and personalized eye care recommendations. Available 24/7.
                </p>
              </div>
              {/* CTA BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    className="rounded-full bg-primary px-6 text-primary-foreground shadow-lg shadow-primary/25 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30"
                  >
                    <MicIcon className="size-5" />
                    Try Voice Agent
                  </Button>
                </SignUpButton>
                <SignUpButton mode="modal">
                  <Button
                    size="lg"
                    variant="outline"
                    className="rounded-full border-primary/30 bg-background/60 px-6 shadow-sm backdrop-blur-sm hover:border-primary/60 hover:bg-primary/10 hover:text-foreground"
                  >
                    <Calendar1Icon className="size-5" />
                    Book Appointment
                  </Button>
                </SignUpButton>
              </div>
            </div>


            {/* RIGHT CONTENT */}
            <div className="relative lg:pl-8">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl rotate-45 blur-xl"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-primary/15 to-primary/5 rounded-full blur-2xl"></div>
              <Image
                src="/hero.png"
                alt="AI Eye Care Assistant"
                width={600}
                height={400}
                className="w-full h-auto "
              />
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;