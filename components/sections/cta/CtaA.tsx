import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function CtaA() {
  return (
    <SectionContainer background="white" padding="default">
      
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-accent-50 p-8 md:p-12 rounded-2xl">
        <div className="max-w-xl">
          <Badge variant="accent" className="mb-4">CTA A</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Ready to get started?</h2>
          <p className="text-neutral-600 mb-8">Join thousands of users who are already building faster with our components.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Start for free</Button>
            <Button variant="outline">Schedule demo</Button>
          </div>
        </div>
        
      </div>
    
    </SectionContainer>
  );
}

export function CtaADemo() {
  return <CtaA />;
}
