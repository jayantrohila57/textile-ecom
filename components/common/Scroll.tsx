'use client'

import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'

function Scroll() {
  useEffect(() => {
    const lenis = new Lenis()

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return null
}
export default Scroll
