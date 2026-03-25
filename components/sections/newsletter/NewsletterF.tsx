import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function NewsletterF() {
  return (
    <SectionContainer background="white" padding="default">
      
      <div className="text-center max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Badge variant="accent" className="mb-4">Newsletter F</Badge>
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl mb-4">
          <span className="block">Want product news and updates?</span>
          <span className="block text-accent-500">Sign up for our newsletter.</span>
        </h2>
        <form className="mt-8 sm:flex justify-center max-w-md mx-auto">
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input id="email-address" name="email" type="email" autoComplete="email" required className="w-full px-5 py-3 placeholder-neutral-500 border border-neutral-300 rounded-md shadow-sm focus:ring-accent-500 focus:border-accent-500 sm:max-w-xs" placeholder="Enter your email" />
          <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
            <Button variant="primary" className="w-full flex items-center justify-center px-5 py-3">Notify me</Button>
          </div>
        </form>
      </div>
    
    </SectionContainer>
  );
}

export function NewsletterFDemo() {
  return <NewsletterF />;
}
