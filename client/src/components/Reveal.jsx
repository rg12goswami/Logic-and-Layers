import { useInView } from "../hooks/useInView.js";

/**
 * Wraps children and fades/lifts them in once scrolled into view.
 * Usage: <Reveal delay={100}><h2>...</h2></Reveal>
 */
export default function Reveal({ children, delay = 0, className = "", as = "div" }) {
  const [ref, isVisible] = useInView();
  const Tag = as;

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
