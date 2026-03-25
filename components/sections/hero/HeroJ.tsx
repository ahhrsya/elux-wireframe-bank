"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";
import { Card } from "@/components/common/Card";

export function HeroJ() {
  return (
    <SectionContainer padding="spacious" background="white" className="relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        <div className="lg:col-span-6 pr-0 lg:pr-8">
          <h1 className="text-[36px] md:text-[52px] leading-[1.15] font-bold text-neutral-900 mb-6">
            Get started with the #1 analytics platform.
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-lg">
            Join 30,000+ companies who use our software to drive better data-driven decisions every single day.
          </p>
          <ul className="space-y-4 mb-8">
            {['14-day free trial', 'No credit card required', 'Cancel anytime'].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-neutral-700">
                <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        
        <div className="lg:col-span-5 lg:col-start-8">
          <Card padding="lg" shadow="md" variant="default" className="w-full">
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">Create your account</h2>
            <p className="text-neutral-500 mb-6 font-medium">Takes less than a minute.</p>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">First Name</label>
                  <input type="text" className="w-full h-11 px-3 border border-neutral-300 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" placeholder="John" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-neutral-700">Last Name</label>
                  <input type="text" className="w-full h-11 px-3 border border-neutral-300 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-neutral-700">Work Email</label>
                <input type="email" className="w-full h-11 px-3 border border-neutral-300 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" placeholder="john@company.com" />
              </div>
              <div className="space-y-2 mb-6">
                <label className="text-sm font-semibold text-neutral-700">Password</label>
                <input type="password" className="w-full h-11 px-3 border border-neutral-300 rounded-md focus:border-accent-500 focus:ring-1 focus:ring-accent-500 outline-none" placeholder="••••••••" />
              </div>
              
              <Button size="lg" className="w-full mt-2 h-12 text-base">
                Get Started Now
              </Button>
              <div className="text-xs text-neutral-500 text-center mt-4">
                By clicking "Get Started Now", you agree to our Terms of Service.
              </div>
            </form>
          </Card>
        </div>
      </div>
    </SectionContainer>
  );
}

export function HeroJDemo() {
  return <HeroJ />;
}
