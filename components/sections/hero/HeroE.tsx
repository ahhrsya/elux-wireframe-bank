"use client";

import React from "react";
import { SectionContainer } from "@/components/common/SectionContainer";
import { Button } from "@/components/common/Button";
import { Badge } from "@/components/common/Badge";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeroEProps {
  badge?: string;
  heading: string;
  subheading: string;
  ctaPrimary: { text: string; href: string };
  ctaSecondary?: { text: string; href: string };
  features?: string[];
}

export function HeroE({
  badge,
  heading = "The smarter way to manage your workflow",
  subheading = "Automate repetitive tasks, collaborate in real time, and ship products your users love.",
  ctaPrimary = { text: "Try it Free", href: "#" },
  ctaSecondary = { text: "Book a Demo", href: "#" },
  features = [
    "No credit card required",
    "14-day free trial",
    "Cancel anytime",
  ],
}: HeroEProps) {
  return (
    <SectionContainer padding="spacious" background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {badge && (
            <div className="mb-6">
              <Badge variant="accent">{badge}</Badge>
            </div>
          )}
          <h1 className="text-[32px] md:text-[48px] leading-[38.4px] md:leading-[57.6px] font-semibold text-neutral-900 tracking-tight mb-4">
            {heading}
          </h1>
          <p className="text-body text-neutral-600 max-w-lg mb-6">
            {subheading}
          </p>

          {/* Feature pills */}
          {features && features.length > 0 && (
            <div className="flex flex-wrap gap-3 mb-8">
              {features.map((feature, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 text-sm text-neutral-600"
                >
                  <CheckCircle2 className="w-4 h-4 text-accent-500" />
                  {feature}
                </span>
              ))}
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              variant="primary"
              size="lg"
              icon={<ArrowRight className="w-4 h-4" />}
              iconPosition="right"
              onClick={() => (window.location.href = ctaPrimary.href)}
            >
              {ctaPrimary.text}
            </Button>
            {ctaSecondary && (
              <Button
                variant="outline"
                size="lg"
                onClick={() => (window.location.href = ctaSecondary.href)}
              >
                {ctaSecondary.text}
              </Button>
            )}
          </div>
        </motion.div>

        {/* Right: Staggered visual elements */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {/* Main card */}
          <div className="bg-neutral-50 rounded-2xl border border-neutral-200 p-8 aspect-square flex items-center justify-center">
            <div className="space-y-4 w-full max-w-xs">
              {/* Progress bars (wireframe style) */}
              {[75, 45, 90, 60].map((width, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.4 + i * 0.15,
                    ease: "easeOut",
                  }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-neutral-200 shrink-0" />
                    <div className="flex-1">
                      <div
                        className="h-2 bg-neutral-200 rounded-full mb-1.5"
                        style={{ width: "60%" }}
                      />
                      <div
                        className="h-1.5 bg-accent-500/20 rounded-full overflow-hidden"
                      >
                        <div
                          className="h-full bg-accent-500 rounded-full"
                          style={{ width: `${width}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Floating mini card */}
          <motion.div
            className="absolute -bottom-4 -left-4 bg-white border border-neutral-200 rounded-lg p-3 shadow-md"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8, ease: "easeOut" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-accent-500/10 rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-accent-500" />
              </div>
              <span className="text-xs font-medium text-neutral-700">
                Deployed successfully
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
}

export function HeroEDemo() {
  return (
    <HeroE
      badge="✨ New Features"
      heading="The smarter way to manage your workflow"
      subheading="Automate repetitive tasks, collaborate in real time, and ship products your users love."
      ctaPrimary={{ text: "Try it Free", href: "#" }}
      ctaSecondary={{ text: "Book a Demo", href: "#" }}
      features={[
        "No credit card required",
        "14-day free trial",
        "Cancel anytime",
      ]}
    />
  );
}
