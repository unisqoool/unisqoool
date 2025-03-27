"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      // Optionally validate event.origin to ensure it comes from your Odoo instance.
      if (
        event.data?.type === "redirect" &&
        typeof event.data.url === "string"
      ) {
        // Convert the Odoo URL to your internal route.
        const newPath = event.data.url.replace(
          "https://odoo.unisqoool.com/blog/",
          "/blog/"
        );
        router.push(newPath);
      }
    }
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <iframe
      src="https://odoo.unisqoool.com/blog"
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="Odoo Blog"
    />
  );
}
