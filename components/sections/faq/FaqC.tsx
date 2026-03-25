import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function FaqC() {
  return (
    <SectionContainer background="white" padding="default">
      
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="accent" className="mb-4">FAQ C</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map(i => (
            <Card key={i} className="p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between cursor-pointer text-neutral-900">
                What is question {i}?
                <ChevronDown className="w-5 h-5 text-neutral-400" />
              </h3>
              <p className="text-neutral-600 hidden">This is the detailed answer for question {i}. It provides comprehensive information to help the user understand.</p>
            </Card>
          ))}
        </div>
      </div>
    
    </SectionContainer>
  );
}

export function FaqCDemo() {
  return <FaqC />;
}
