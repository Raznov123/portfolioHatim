import { useEffect, useRef } from 'react'
import { ScrollTrigger } from 'gsap/all'
import { gsap } from 'gsap'
import Heading from '../ui/Heading'

export default function About () {
  const aboutSection = useRef(null)
  const heading = useRef(null)
  const body = useRef(null)

  useEffect(() => {
    ScrollTrigger.create({
      trigger: aboutSection.current,
      start: 'top 400px',
      animation: gsap
        .timeline()
        .to(
          heading.current,
          { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 },
          0
        )
        .to(
          body.current,
          { opacity: 1, y: 0, ease: 'power4.out', duration: 1.25 },
          0.2
        ),

      toggleActions: 'play none none none'
    })
    ScrollTrigger.refresh()
  }, [aboutSection])

  return (
    // Try using max width to contain the size of the container
    <section ref={aboutSection} aria-label='about me'>
      <Heading title='about me' />
      <div className='mt-10 flex justify-center items-center gap-8 md:flex-row lg:gap-10 '>
        <div className='top-20 sm:sticky md:top-28 lg:top-32 md:w-1/2'>
          <div className='w-full space-y-4 2xl:space-y-10'>
            <h3
              ref={heading}
              className='translate-y-10 text-heading-3 2xl:text-7xl font-semibold leading-tight opacity-0'
            >
              A brief intro, who am I?
            </h3>
            <p
              ref={body}
              className=' translate-y-10 text-body-1 2xl:text-4xl opacity-0'
            >
              I am an independent frontend developer, UI/UX designer and creator
              based in Casablanca, Morocco.
              <br></br>
              <br></br>I specialize in crafting elevated, intuitive, and
              minimalistic designs for startups and small businesses to help
              them stand out in the digital landscape with a powerful impact.
              <br></br>
              <br></br>
              When I am not developing or designing, I enjoy world-building and
              setting up Dungeon and Dragons games.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
