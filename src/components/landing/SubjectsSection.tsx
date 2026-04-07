import { subjectsSectionTitle } from "@/content/subjectsCurriculum";
import { SubjectsCurriculumInteractive } from "@/components/landing/SubjectsCurriculumInteractive";

const CX = "mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8";

export function SubjectsSection() {
  return (
    <section
      id="studium"
      aria-labelledby="predmety-heading"
      className="scroll-mt-24 bg-brand-bg2 py-11 md:scroll-mt-28 md:py-14"
    >
      <div className={CX}>
        <div id="predmety" className="scroll-mt-24 md:scroll-mt-28">
          <header className="max-w-3xl">
            <h2
              id="predmety-heading"
              className="font-heading m-0 text-[clamp(1.85rem,1.15rem+2.5vw,2.85rem)] leading-[1.08] tracking-tight text-brand-fg1"
            >
              {subjectsSectionTitle}
            </h2>
          </header>

          <div className="mt-8 sm:mt-10">
            <SubjectsCurriculumInteractive />
          </div>
        </div>
      </div>
    </section>
  );
}
