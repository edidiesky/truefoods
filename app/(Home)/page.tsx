'use client';
import { useEffect, useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import gsap from 'gsap';
import { useInView, motion } from 'framer-motion'
import { slideUp } from '@/components/anim/framer';
import Hero from './_components/hero';
import Cta from './_components/cta';
import ProductList from './_components/productlist';
import Chefs from './_components/chefs';
import Farmers from './_components/farmers';
import Collaboration from './_components/collaboration';
import Footer from '@/components/common/Footer';
import { Header } from '@/components/common/Header';
import Sidebar from '@/components/common/Sidebar';

export default function Home() {
  const [sidebar, setSidebar]  = useState(false)
  const Homeref = useRef<null | HTMLDivElement>(null);
  const textref = useRef<null>(null);
  const isInview = useInView(textref)
  let locoScroll: LocomotiveScroll;
  let LocomotiveScroll: new (arg0: { el: HTMLDivElement; smooth: boolean; multiplier: number; class: string; }) => LocomotiveScroll;
  if (typeof window !== 'undefined') {
    LocomotiveScroll = require('locomotive-scroll').default;
  }

  // useEffect(() => {


  //   // Check if Homeref.current is not null before creating the LocomotiveScroll instance
  //   if (Homeref.current) {
  //     locoScroll = new LocomotiveScroll({
  //       el: Homeref.current,
  //       smooth: true,
  //       multiplier: 1,
  //       class: "is-reveal"
  //     });

  //     // Use a function to update LocomotiveScroll on resize
  //     const handleResize = () => locoScroll.update();
  //     const resizeObserver = new ResizeObserver(handleResize);
  //     resizeObserver.observe(Homeref.current);

  //     // Cleanup functions
  //     return () => {
  //       if (locoScroll) {
  //         locoScroll.destroy();
  //       }
  //       resizeObserver.disconnect();
  //     };
  //   }

  //   // If Homeref.current is null, return a cleanup function without creating LocomotiveScroll
  //   return () => {
  //     // Cleanup without creating LocomotiveScroll
  //   };
  // }, [Homeref]);

  console.log(isInview)

  const text = " For example, maybe you'd like to make each character or word fade into place in a staggered fashion. SplitText automatically works around various browser inconsistencies and recognizes line breaks appropriately. Plus it is highly configurable. "

  return (
    <div ref={Homeref} style={{ perspective: "1px", minHeight: "100vh" }}
      data-scroll-section className="w-full min-h-full overflow-hidden">
        <Header
        sidebar={sidebar}
        setSidebar={setSidebar}
        />
        <Sidebar
        sidebar={sidebar}
        setSidebar={setSidebar}
        />
        <Hero/>
        <Cta/>
        <ProductList/>
        <Chefs/>
        <Farmers/>
        <Collaboration/>
        <Footer/>
    </div>
  );
}
