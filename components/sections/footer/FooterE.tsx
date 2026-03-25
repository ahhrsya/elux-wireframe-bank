import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function FooterE() {
  return (
    <SectionContainer background="neutral-900" padding="default">
      
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b border-neutral-800">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
              <LayoutGrid className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold text-white text-lg">Layout Bank</span>
          </div>
          <p className="text-neutral-400 text-sm max-w-sm">
            Making the web beautiful, one component at a time. Designed for modern products.
          </p>
        </div>
        {[1, 2, 3, 4].map(col => (
          <div key={col}>
            <h4 className="font-semibold text-white mb-4">Column {col}</h4>
            <ul className="space-y-3 text-sm text-neutral-400">
              {['Link 1', 'Link 2', 'Link 3'].map(link => (
                <li key={link}><a href="#" className="hover:text-accent-500">{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400">© 2024 Layout Bank. All rights reserved.</p>
        <div className="flex gap-4">
          <Globe className="w-5 h-5 text-neutral-400 hover:text-accent-500 cursor-pointer" />
          <Star className="w-5 h-5 text-neutral-400 hover:text-accent-500 cursor-pointer" />
        </div>
      </div>
    
    </SectionContainer>
  );
}

export function FooterEDemo() {
  return <FooterE />;
}
