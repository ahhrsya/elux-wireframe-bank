import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function BlogB() {
  return (
    <SectionContainer background="neutral-50" padding="default">
      
      <div className="flex items-end justify-between mb-12">
        <div>
          <Badge variant="accent" className="mb-4">Blog B</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl">Latest from the blog</h2>
        </div>
        <Button variant="outline" className="hidden sm:flex">View all posts</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <Card key={i} className="overflow-hidden p-0">
            <img src={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"} alt="Blog post" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2 block">Category</span>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Blog Post Title {i}</h3>
              <p className="text-neutral-600 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius...</p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium text-neutral-900">Author Name</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    
    </SectionContainer>
  );
}

export function BlogBDemo() {
  return <BlogB />;
}
