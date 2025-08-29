import { projects } from '../ui/data'; 
import Card from '../lib/Card'; 
import { useScroll } from 'framer-motion'; 
import { useEffect, useRef } from 'react'; 

import Lenis from '@studio-freight/lenis' 
import { TextReveal } from '../components/magicui/text-reveal';



export default function ParallexCard() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative px-6 md:px-12 lg:px-20">
      {/* Header */}
      <div className="w-12 h-12 bg-white  clip-polygon-logo ml-[480px] mt-[100px]"></div>
      <h1 
        className="text-4xl md:text-8xl font-bold pt-[100px] text-left ml-[480px]"
        style={{ fontFamily: 'Antonio, sans-serif' }}
      >
        My Work
      </h1>

      {/* Cards */}
      {projects.map((project, i) => {
        const targetScale = 1 - ((projects.length - i) * 0.05);
        return (
          <Card
            key={`p_${i}`}
            i={i}
            {...project}
            progress={scrollYProgress}
            range={[i * 0.25, 1]}
            targetScale={targetScale}
          />
        );
      })}
    </main>
  );
}
