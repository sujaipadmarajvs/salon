"use client";

import React from "react";

interface RotatingWordProps {
  words: string[];
  intervalMs?: number;
  className?: string;
}

const RotatingWord = ({ words, intervalMs = 2000, className }: RotatingWordProps) => {
  const [index, setIndex] = React.useState(0);
  const [prevWord, setPrevWord] = React.useState<string | null>(null);
  const [maxWidth, setMaxWidth] = React.useState<number>(0);
  const measurerRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!words || words.length === 0) return;
    const id = setInterval(() => {
      setIndex((currentIndex) => {
        setPrevWord(words[currentIndex]);
        const nextIndex = (currentIndex + 1) % words.length;
        return nextIndex;
      });
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs, words]);

  // Measure max word width to avoid layout shift
  React.useLayoutEffect(() => {
    const measure = () => {
      if (!measurerRef.current) return;
      let widest = 0;
      const children = measurerRef.current.querySelectorAll("span[data-word]");
      children.forEach((el) => {
        const w = (el as HTMLElement).offsetWidth;
        if (w > widest) widest = w;
      });
      setMaxWidth(widest);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [words, className]);

  const currentWord = words && words.length > 0 ? words[index] : "";

  return (
    <>
      {/* Offscreen measurer to compute max width for stability */}
      <div
        ref={measurerRef}
        className="absolute -z-50 left-[-9999px] top-0 opacity-0 pointer-events-none select-none whitespace-nowrap"
      >
        {words.map((word, i) => (
          <span key={`measure-${i}`} data-word className={["inline-block", className ?? ""].join(" ")}>{word}</span>
        ))}
      </div>

      <span
        className={[
          "relative inline-block align-baseline [perspective:700px] min-h-[1em]",
          className ?? "",
        ].join(" ")}
        style={{ width: maxWidth ? `${maxWidth}px` : undefined }}
        aria-live="polite"
        role="status"
      >
        {prevWord !== null && (
          <span
            key={`out-${prevWord}-${index}`}
            className="absolute inset-0 rotate-word-out will-change-transform [backface-visibility:hidden]"
          >
            {prevWord}
          </span>
        )}
        <span
          key={`in-${currentWord}-${index}`}
          className="block rotate-word-in will-change-transform [backface-visibility:hidden]"
        >
          {currentWord}
        </span>
      </span>
    </>
  );
};

export default RotatingWord;


