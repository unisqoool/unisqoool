"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

export default function BlogPage() {
  const router = useRouter();
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState("100vh");

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.origin === "https://odoo.unisqoool.com" &&
        typeof event.data === "object"
      ) {
        if (
          event.data.type === "redirect" &&
          typeof event.data.url === "string"
        ) {
          const newPath = event.data.url.replace(
            "https://odoo.unisqoool.com/blog/",
            "/blog/"
          );
          router.push(newPath);
        } else if (
          event.data.type === "height" &&
          typeof event.data.height === "number"
        ) {
          setIframeHeight(
            `${Math.max(event.data.height, window.innerHeight)}px`
          );
        }
      }
    }

    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, [router]);

  return (
    <iframe
      ref={iframeRef}
      src="https://odoo.unisqoool.com/blog"
      style={{ width: "100%", height: iframeHeight, border: "none" }}
      title="Odoo Blog"
    />
  );
}
