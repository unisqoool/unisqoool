// components/layout-extras.tsx
"use client";

import { usePathname } from "next/navigation";
import FAQSection from "@/components/faq-section";
import CTASection from "@/components/cta-section";

export default function LayoutExtras() {
  const pathname = usePathname();
  // List of routes on which FAQ and CTA should be excluded.
  const excludedRoutes = [
    "/blog",
    "/privacy-policy",
    "/terms-and-conditions",
    "/refund-policy",
  ];

  const shouldDisplay = !excludedRoutes.some((route) =>
    pathname.startsWith(route)
  );

  if (!shouldDisplay) {
    return <div className="text-gray-600 border-b pt-8 max-w-[75vw] mx-auto"></div>;
  }

  return (
    <>
      <FAQSection />
      <CTASection />
    </>
  );
}
