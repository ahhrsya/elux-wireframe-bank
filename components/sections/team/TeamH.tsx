import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function TeamH() {
  return (
    <SectionContainer background="neutral-900" padding="default">
      
      <div className="text-center mb-12">
        <Badge variant="ghost" className="mb-4">Team H</Badge>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-4">Meet our leadership</h2>
        <p className="text-neutral-400 max-w-2xl mx-auto">We're a dynamic group of individuals who are passionate about what we do.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="text-center">
            <img className="w-32 h-32 rounded-full mx-auto object-cover mb-4" src={"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop"} alt="Team Member" />
            <h3 className="text-lg font-semibold text-white">Member {i} Name</h3>
            <p className="text-accent-500 text-sm mb-3">Position Title</p>
            <div className="flex justify-center gap-3">
              <Globe className="w-4 h-4 text-neutral-400 hover:text-accent-500 cursor-pointer" />
              <Mail className="w-4 h-4 text-neutral-400 hover:text-accent-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    
    </SectionContainer>
  );
}

export function TeamHDemo() {
  return <TeamH />;
}
