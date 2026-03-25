const fs = require('fs');
const path = require('path');

const sections = ['pricing', 'cta', 'faq', 'newsletter', 'team', 'blog', 'stats', 'footer'];
const variants = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

const baseDir = path.join(__dirname, '../');

function getComponentTemplate(type, variant) {
  const Type = capitalize(type);
  const bgColors = ['white', 'neutral-50', 'white', 'neutral-100', 'neutral-900', 'white', 'neutral-50', 'neutral-900', 'white', 'neutral-50'];
  const baseBg = bgColors[variants.indexOf(variant)] || 'white';
  const isDark = baseBg === 'neutral-900';
  const textClass = isDark ? 'text-white' : 'text-neutral-900';
  const subTextClass = isDark ? 'text-neutral-400' : 'text-neutral-600';

  let content = '';

  if (type === 'pricing') {
    content = `
      <div className="text-center max-w-2xl mx-auto mb-12">
        <Badge variant="${isDark ? 'ghost' : 'accent'}" className="mb-4">Pricing ${variant}</Badge>
        <h2 className="text-3xl font-bold tracking-tight ${textClass} sm:text-4xl mb-4">Simple, transparent pricing</h2>
        <p className="${subTextClass}">No hidden fees. No surprise charges.</p>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <Card key={i} className={cn("p-8", i === 2 && "border-accent-500 shadow-xl relative")}>
            {i === 2 && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent-500 text-white text-xs font-bold px-3 py-1 rounded-full">Most Popular</span>}
            <h3 className="text-xl font-bold mb-2">Plan {/* escape template */}{i}</h3>
            <p className="text-4xl font-extrabold mb-6">$ {/* escape template */}{i * 29}<span className="text-sm font-normal text-neutral-500">/mo</span></p>
            <ul className="space-y-4 mb-8">
              {[1, 2, 3, 4].map(f => (
                <li key={f} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent-500" />
                  <span className="text-sm">Feature {/* escape template */}{f} included</span>
                </li>
              ))}
            </ul>
            <Button variant={i === 2 ? "primary" : "outline"} className="w-full">Get Started</Button>
          </Card>
        ))}
      </div>
    `.replace(/\{\/\* escape template \*\/\}/g, '');
  } else if (type === 'cta') {
    content = `
      <div className="flex flex-col md:flex-row items-center justify-between gap-8 bg-accent-50 p-8 md:p-12 rounded-2xl">
        <div className="max-w-xl">
          <Badge variant="accent" className="mb-4">CTA ${variant}</Badge>
          <h2 className="text-3xl font-bold tracking-tight text-neutral-900 mb-4">Ready to get started?</h2>
          <p className="text-neutral-600 mb-8">Join thousands of users who are already building faster with our components.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="primary">Start for free</Button>
            <Button variant="outline">Schedule demo</Button>
          </div>
        </div>
        ${variant === 'C' || variant === 'F' ? '<img src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=600&auto=format&fit=crop" alt="Dashboard" className="w-full max-w-md rounded-xl shadow-lg" />' : ''}
      </div>
    `;
  } else if (type === 'faq') {
    content = `
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Badge variant="${isDark ? 'ghost' : 'accent'}" className="mb-4">FAQ ${variant}</Badge>
          <h2 className="text-3xl font-bold tracking-tight ${textClass} sm:text-4xl">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-4">
          {[1, 2, 3, 4, 5].map(i => (
            <Card key={i} className="p-6">
              <h3 className="text-lg font-semibold mb-2 flex items-center justify-between cursor-pointer text-neutral-900">
                What is question {/* escape template */}{i}?
                <ChevronDown className="w-5 h-5 text-neutral-400" />
              </h3>
              <p className="text-neutral-600 hidden">This is the detailed answer for question {/* escape template */}{i}. It provides comprehensive information to help the user understand.</p>
            </Card>
          ))}
        </div>
      </div>
    `.replace(/\{\/\* escape template \*\/\}/g, '');
  } else if (type === 'newsletter') {
    content = `
      <div className="text-center max-w-2xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <Badge variant="${isDark ? 'ghost' : 'accent'}" className="mb-4">Newsletter ${variant}</Badge>
        <h2 className="text-3xl font-extrabold tracking-tight ${textClass} sm:text-4xl mb-4">
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
    `;
  } else if (type === 'team') {
    content = `
      <div className="text-center mb-12">
        <Badge variant="${isDark ? 'ghost' : 'accent'}" className="mb-4">Team ${variant}</Badge>
        <h2 className="text-3xl font-bold tracking-tight ${textClass} sm:text-4xl mb-4">Meet our leadership</h2>
        <p className="${subTextClass} max-w-2xl mx-auto">We're a dynamic group of individuals who are passionate about what we do.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="text-center">
            <img className="w-32 h-32 rounded-full mx-auto object-cover mb-4" src={"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=200&auto=format&fit=crop"} alt="Team Member" />
            <h3 className="text-lg font-semibold ${textClass}">Member {/* escape template */}{i} Name</h3>
            <p className="text-accent-500 text-sm mb-3">Position Title</p>
            <div className="flex justify-center gap-3">
              <Globe className="w-4 h-4 text-neutral-400 hover:text-accent-500 cursor-pointer" />
              <Mail className="w-4 h-4 text-neutral-400 hover:text-accent-500 cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    `.replace(/\{\/\* escape template \*\/\}/g, '');
  } else if (type === 'blog') {
    content = `
      <div className="flex items-end justify-between mb-12">
        <div>
          <Badge variant="${isDark ? 'ghost' : 'accent'}" className="mb-4">Blog ${variant}</Badge>
          <h2 className="text-3xl font-bold tracking-tight ${textClass} sm:text-4xl">Latest from the blog</h2>
        </div>
        <Button variant="outline" className="hidden sm:flex">View all posts</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[1, 2, 3].map(i => (
          <Card key={i} className="overflow-hidden p-0">
            <img src={"https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop"} alt="Blog post" className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-xs font-semibold text-accent-500 uppercase tracking-wider mb-2 block">Category</span>
              <h3 className="text-xl font-bold mb-2 text-neutral-900">Blog Post Title {/* escape template */}{i}</h3>
              <p className="text-neutral-600 text-sm mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius...</p>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop" className="w-8 h-8 rounded-full" />
                <span className="text-sm font-medium text-neutral-900">Author Name</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    `.replace(/\{\/\* escape template \*\/\}/g, '');
  } else if (type === 'stats') {
    content = `
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-neutral-200">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="px-4">
            <h4 className="text-4xl font-extrabold ${textClass} mb-2">{/* escape template */}{i * 10}k+</h4>
            <p className="${subTextClass} font-medium tracking-wide">Metric {/* escape template */}{i}</p>
          </div>
        ))}
      </div>
    `.replace(/\{\/\* escape template \*\/\}/g, '');
  } else if (type === 'footer') {
    content = `
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 pb-12 border-b ${isDark ? 'border-neutral-800' : 'border-neutral-200'}">
        <div className="col-span-2 lg:col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-accent-500 rounded-lg flex items-center justify-center">
              <LayoutGrid className="w-4 h-4 text-white" />
            </div>
            <span className="font-semibold ${textClass} text-lg">Layout Bank</span>
          </div>
          <p className="${subTextClass} text-sm max-w-sm">
            Making the web beautiful, one component at a time. Designed for modern products.
          </p>
        </div>
        {[1, 2, 3, 4].map(col => (
          <div key={col}>
            <h4 className="font-semibold ${textClass} mb-4">Column {/* escape template */}{col}</h4>
            <ul className="space-y-3 text-sm ${subTextClass}">
              {['Link 1', 'Link 2', 'Link 3'].map(link => (
                <li key={link}><a href="#" className="hover:text-accent-500">{/* escape template */}{link}</a></li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm ${subTextClass}">© 2024 Layout Bank. All rights reserved.</p>
        <div className="flex gap-4">
          <Globe className="w-5 h-5 ${subTextClass} hover:text-accent-500 cursor-pointer" />
          <Star className="w-5 h-5 ${subTextClass} hover:text-accent-500 cursor-pointer" />
        </div>
      </div>
    `.replace(/\{\/\* escape template \*\/\}/g, '');
  }

  return `import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Badge } from "@/components/common/Badge";
import { Card } from "@/components/common/Card";
import { Button } from "@/components/common/Button";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronDown, Globe, Mail, Star, LayoutGrid } from "lucide-react";

export function ${Type}${variant}() {
  return (
    <SectionContainer background="${baseBg}" padding="default">
      ${content}
    </SectionContainer>
  );
}

export function ${Type}${variant}Demo() {
  return <${Type}${variant} />;
}
`;
}

sections.forEach(type => {
  const TypeDir = path.join(baseDir, 'components', 'sections', type);
  if (!fs.existsSync(TypeDir)) {
    fs.mkdirSync(TypeDir, { recursive: true });
  }

  variants.forEach(variant => {
    const Type = capitalize(type);
    const content = getComponentTemplate(type, variant);
    fs.writeFileSync(path.join(TypeDir, Type + variant + ".tsx"), content);
  });

  // Generate page.tsx
  const PageDir = path.join(baseDir, 'app', 'sections', type);
  if (!fs.existsSync(PageDir)) {
    fs.mkdirSync(PageDir, { recursive: true });
  }

  const imports = variants.map(v => 'import { ' + capitalize(type) + v + 'Demo } from "@/components/sections/' + type + '/' + capitalize(type) + v + '";').join('\n');
  const variantItems = variants.map(v => '    { id: "' + type + '-' + v.toLowerCase() + '", label: "' + capitalize(type) + ' ' + v + '", subtitle: "' + capitalize(type) + ' layout variant ' + v + '", component: <' + capitalize(type) + v + 'Demo /> },').join('\n');

  const pageContent = 'import React from "react";\n' +
'import { Badge } from "@/components/common/Badge";\n' +
imports + '\n\n' +
'export default function ' + capitalize(type) + 'SectionsPage() {\n' +
'  const variants = [\n' +
variantItems + '\n' +
'  ];\n\n' +
'  return (\n' +
'    <div className="pb-24">\n' +
'      <section className="py-12 md:py-16 px-4 md:px-8 border-b border-neutral-200">\n' +
'        <div className="max-w-7xl mx-auto">\n' +
'          <Badge variant="accent" className="mb-4">10 Variants</Badge>\n' +
'          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-3">\n' +
'            ' + capitalize(type) + ' Sections\n' +
'          </h1>\n' +
'          <p className="text-body text-neutral-600 max-w-2xl">\n' +
'            High-fidelity ' + type + ' components ready to drop into your landing page.\n' +
'          </p>\n' +
'        </div>\n' +
'      </section>\n\n' +
'      {variants.map((variant) => (\n' +
'        <div key={variant.id} id={variant.id}>\n' +
'          <div className="bg-neutral-50 border-b border-neutral-200 px-4 md:px-8 py-3">\n' +
'            <div className="max-w-7xl mx-auto flex items-center gap-3">\n' +
'              <span className="text-sm font-semibold text-neutral-900">{variant.label}</span>\n' +
'              <span className="text-sm text-neutral-500">— {variant.subtitle}</span>\n' +
'            </div>\n' +
'          </div>\n' +
'          <div className="border-b border-neutral-200">{variant.component}</div>\n' +
'        </div>\n' +
'      ))}\n' +
'    </div>\n' +
'  );\n' +
'}\n';
  fs.writeFileSync(path.join(PageDir, 'page.tsx'), pageContent);
});

console.log('Successfully generated all components and pages for missing sections!');
