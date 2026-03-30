import Link from "next/link";
import { Header } from "@/components/landing/Header";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

export default function OchranaOsobnychUdajovPage() {
  return (
    <>
      <Header />
      <main className="min-h-[50vh] scroll-mt-24 bg-brand-bg1 pb-16 pt-8 md:scroll-mt-28 md:pt-12">
        <div className={CX}>
          <nav className="mb-6 text-sm text-brand-fg3" aria-label="Navigácia">
            <Link
              href="/#kontakt"
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2 hover:decoration-brand-primary"
            >
              Späť na úvod
            </Link>
          </nav>
          <h1 className="font-heading m-0 text-[clamp(1.5rem,1rem+2vw,2rem)] leading-tight tracking-tight text-brand-fg1">
            Ochrana osobných údajov
          </h1>
          <p className="mt-4 max-w-2xl text-[15px] font-normal leading-relaxed text-brand-fg3">
            Text dokumentu pripravujeme. Ak potrebuješ informácie skôr, napíš na{" "}
            <a
              href="mailto:info@lyceum.sk"
              className="font-medium text-brand-primary underline decoration-brand-primary/35 underline-offset-2"
            >
              info@lyceum.sk
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
