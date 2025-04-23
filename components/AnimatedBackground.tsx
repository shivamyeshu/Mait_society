"use client"

import { useEffect, useRef } from "react"

export default function AnimatedBackground() {
  const blob1 = useRef<HTMLDivElement>(null)
  const blob2 = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const animateBlob = (element: HTMLDivElement | null, xRange: number, yRange: number) => {
      if (!element) return

      const move = () => {
        const x = Math.random() * xRange - xRange / 2
        const y = Math.random() * yRange - yRange / 2

        element.animate(
          [
            { transform: `translate(${x}px, ${y}px)` },
            { transform: `translate(${-x}px, ${-y}px)` },
          ],
          {
            duration: 10000 + Math.random() * 5000,
            iterations: Infinity,
            direction: "alternate",
            easing: "ease-in-out",
          }
        )
      }

      move()
    }

    animateBlob(blob1.current, 100, 100)
    animateBlob(blob2.current, 120, 120)
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden">
      <div
        ref={blob1}
        className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-pink-400 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
      ></div>
      <div
        ref={blob2}
        className="absolute bottom-[-100px] right-[-100px] w-[400px] h-[400px] bg-blue-500 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob"
      ></div>
    </div>
  )
}
