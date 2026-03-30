export function HeroProjektyBubble() {
  const shadow =
    "shadow-[0_8px_22px_-8px_rgba(29,29,31,0.16),0_2px_6px_rgba(29,29,31,0.05)]";

  return (
    <span className="inline-block align-baseline rotate-[-2.25deg] sm:rotate-[-1.5deg]">
      <span className="inline-flex flex-col items-start">
        <span
          className={`relative z-[2] inline-flex w-max -translate-y-[0.14em] items-center justify-center rounded-full border border-brand-fg1 bg-[#fffdf9] px-[0.42em] py-[0.18em] text-center font-heading text-[0.76em] font-normal leading-none tracking-tight text-brand-fg1 ${shadow}`}
        >
          <span className="inline-block -translate-y-[0.055em]">projekty</span>
        </span>
        <span
          className={`relative z-[1] -mt-[0.38em] inline-flex w-max self-start items-center justify-center rounded-full border border-brand-fg1 bg-[#fffdf9] px-[0.46em] py-[0.18em] text-center font-heading text-[0.67em] font-bold leading-none tracking-tight text-brand-fg1 ${shadow} -ml-4 sm:-ml-6`}
        >
          <span className="inline-block -translate-y-[0.055em]">a prax</span>
        </span>
      </span>
    </span>
  );
}
