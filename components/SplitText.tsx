import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export interface SplitTextProps {
    text: string;
    className?: string;
    delay?: number;
    duration?: number;
    ease?: string | ((t: number) => number);
    splitType?: "chars" | "words" | "lines";
    from?: gsap.TweenVars;
    to?: gsap.TweenVars;
    threshold?: number;
    rootMargin?: string;
    textAlign?: React.CSSProperties["textAlign"];
    onAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
    text,
    className = "",
    delay = 80,
    duration = 0.6,
    ease = "power3.out",
    splitType = "chars",
    from = { opacity: 0, y: 20 },
    to = { opacity: 1, y: 0 },
    threshold = 0.1,
    rootMargin = "-50px",
    textAlign = "center",
    onAnimationComplete,
}) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!ref.current || !text) return;

        const el = ref.current;
        const split = new SplitType(el, {
            types: [splitType, 'words'],
            tagName: 'span'
        });

        let targets: HTMLElement[] = [];
        if (splitType === 'chars' && split.chars) {
            targets = split.chars;
        } else if (splitType === 'words' && split.words) {
            targets = split.words;
        } else if (splitType === 'lines' && split.lines) {
            targets = split.lines;
        }

        if (targets.length === 0) {
            console.warn("No targets found for SplitText animation");
            return;
        }

        gsap.set(targets, from);

        const st = ScrollTrigger.create({
            trigger: el,
            start: `top bottom-=${rootMargin}`,
            once: true,
            onEnter: () => {
                gsap.to(targets, {
                    ...to,
                    duration,
                    ease,
                    stagger: delay / 1000,
                    onComplete: () => {
                        onAnimationComplete?.();
                        st.kill();
                        split.revert();
                    },
                });
            },
        });

        return () => {
            st.kill();
            if (split) {
                split.revert();
            }
        };
    }, [
        text,
        delay,
        duration,
        ease,
        splitType,
        from,
        to,
        threshold,
        rootMargin,
        onAnimationComplete,
    ]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ textAlign, whiteSpace: 'pre-wrap' }}
            dangerouslySetInnerHTML={{ __html: text }}
        />
    );
};

export default SplitText;

