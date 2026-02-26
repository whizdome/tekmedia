// src/components/layout/Page.jsx
import { useEffect } from "react";

export default function Page({
  title,
  children,
  className = "",
  withTopDivider = true,
}) {
  useEffect(() => {
    document.title = title ? `${title} – Anakle` : "Anakle";
  }, [title]);

  return (
    <main id="content" className={`min-h-[60vh] ${className}`}>
      {withTopDivider && <div className="border-t border-zinc-300/80" />}
      {children}
    </main>
  );
}
