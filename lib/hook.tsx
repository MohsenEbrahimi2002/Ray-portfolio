import { SectionName, useActiveContext } from "@/context/activeSectionContext";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useInViewSection(sectionName: SectionName, threshold: number) {
    const { setactiveSection,lastClickTime } = useActiveContext();
  const { ref, inView } = useInView({
    threshold: threshold,
  });
  useEffect(() => {
    
    
    if (inView && Date.now() - lastClickTime > 1000) {
      setactiveSection(sectionName)
    }
  
  }, [inView])
  return {ref}
}