import fs from "node:fs";
import path from "node:path";
import type { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

const REPORT_PATH = path.join(
  process.cwd(),
  "docs/REPORT-MATURITNY-PROJEKT-LYCEUM-WEB.md",
);

const h2 =
  "font-heading mt-12 mb-4 scroll-mt-28 text-[clamp(1.5rem,1.1rem+1.5vw,2rem)] font-bold leading-[1.15] tracking-tight text-brand-fg1 first:mt-0";
const h3 =
  "font-heading mt-8 mb-3 text-[clamp(1.15rem,1rem+0.6vw,1.35rem)] font-bold leading-snug tracking-tight text-brand-fg1";

function isRedVisualization(children: ReactNode): boolean {
  const s = String(children);
  return s.includes("VIZUALIZÁCIA") || s.includes("[VIZUALIZÁCIA");
}

export async function MaturitnyReportMarkdown() {
  let raw = fs.readFileSync(REPORT_PATH, "utf8");
  raw = raw.replace(/^#\s+[^\n]+\n+/, "");

  return (
    <div className="report-prose text-brand-fg1">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug, rehypeRaw]}
        components={{
          h2: ({ id, children }) => (
            <h2 id={id} className={h2}>
              {children}
            </h2>
          ),
          h3: ({ id, children }) => (
            <h3 id={id} className={h3}>
              {children}
            </h3>
          ),
          p: ({ children }) => (
            <p className="mb-4 text-[1.02rem] leading-[1.65] text-brand-fg1 last:mb-0">
              {children}
            </p>
          ),
          strong: ({ children }) => (
            <strong className="font-bold text-brand-fg1">{children}</strong>
          ),
          em: ({ children }) => (
            <em className="italic text-brand-fg3">{children}</em>
          ),
          ul: ({ children }) => (
            <ul className="mb-4 list-disc space-y-2 pl-6 text-brand-fg1 marker:text-brand-primary">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="mb-4 list-decimal space-y-2 pl-6 text-brand-fg1 marker:font-bold marker:text-brand-fg3">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="leading-relaxed [&>p]:mb-2">{children}</li>
          ),
          a: ({ href, children }) => (
            <a
              href={href}
              className="font-medium text-[#562082] underline decoration-brand-primary/50 underline-offset-[3px] transition-colors hover:text-brand-fg1 hover:decoration-brand-primary"
            >
              {children}
            </a>
          ),
          span: ({ children, ...props }) => {
            const style = props.style as
              | { color?: string }
              | undefined
              | Record<string, string>;
            const isRed =
              style &&
              typeof style === "object" &&
              "color" in style &&
              String(style.color).toLowerCase().includes("red");
            if (isRed || isRedVisualization(children)) {
              return (
                <span
                  className="not-prose my-5 block rounded-2xl border-2 border-dashed border-red-400/70 bg-red-50 px-4 py-3 text-sm font-semibold leading-snug text-red-800 shadow-sm"
                  {...props}
                  style={undefined}
                >
                  {children}
                </span>
              );
            }
            return (
              <span {...props} className="text-inherit">
                {children}
              </span>
            );
          },
        }}
      >
        {raw}
      </ReactMarkdown>
    </div>
  );
}
