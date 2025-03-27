"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

type PageProps = {
  params: { slug: string[] };
};

export default function BlogSlugPage({ params }: PageProps) {
  const router = useRouter();
  const slugPath = params.slug.join("/");
  const blogUrl = `https://odoo.unisqoool.com/blog/${slugPath}`;

  useEffect(() => {
    function handleMessage(event: MessageEvent) {
      if (
        event.data?.type === "redirect" &&
        typeof event.data.url === "string"
      ) {
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
      src={blogUrl}
      style={{ width: "100%", height: "100vh", border: "none" }}
      title="Odoo Blog"
    />
  );
}
