"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";
import { ArrowRight, Play } from "lucide-react";

export function HeroF() {
  return (
    <SectionContainer padding="spacious" background="white" maxWidth="full" className="px-0 md:px-0 lg:px-0 py-0 md:py-0 lg:py-0">
      <div className="relative w-full h-[600px] md:h-[800px] flex items-center justify-center overflow-hidden">
        {/* Dark overlay and Image Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=2000" 
            alt="Team collaborating" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-neutral-900/60 mix-blend-multiply" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-[36px] md:text-[64px] leading-tight font-bold text-white mb-6">
            Empower your team to do their best work
          </h1>
          <p className="text-[18px] md:text-[20px] text-neutral-200 mb-10 max-w-2xl mx-auto">
            The collaborative workspace that brings your teams, tools, and ideas together into one seamless experience.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" className="w-full sm:w-auto text-base">
              Start for free
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto text-base text-white border-white hover:bg-white hover:text-neutral-900" icon={<Play className="w-4 h-4" />} iconPosition="left">
              Watch Demo
            </Button>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

export function HeroFDemo() {
  return <HeroF />;
}
