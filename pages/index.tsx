import About from '@/components/About'
import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import MobileNav from '@/components/MobileNav'
import Nav from '@/components/Nav'
import Projects from '@/components/Projects'
import Services from '@/components/Services'
import Skills from '@/components/Skils'
import Testimonial from '@/components/Testimonial'
import Footer from '@/components/Footer'
import React, { useEffect, useState } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

const HomePage = () => {
  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true)
  const closeNav = () => setNav(false)

  useEffect(() => {
    AOS.init({
      disable: false,
      startEvent: 'DOMContentLoaded',
      initClassName: 'aos-init',
      animatedClassName: 'aos-animate',
      useClassNames: false,
      disableMutationObserver: false,
      debounceDelay: 50,
      throttleDelay: 99,
      offset: 120,
      delay: 0,
      duration: 1000,
      easing: 'ease',
      once: true,
      mirror: false,
      anchorPlacement: 'top-bottom',
    })
  }, [])

  return (
    <div className="overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        <Hero />
        <div className="relative z-[30]">
          <About />
          <Services />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps(context: { locale: any }) {
  return {
    props: {
      messages: (await import(`../messages/${context.locale}.json`)).default,
    },
  }
}

export default HomePage
