"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function ImageCarousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    const slideInterval = setInterval(() => {
      goToNext()
    }, 5000)

    return () => clearInterval(slideInterval)
  }, [currentIndex])

  return (
    <div className="relative h-[300px] md:h-[400px] w-full">
      <div className="absolute inset-0 rounded-lg overflow-hidden">
        <Image
          src={images[currentIndex].src || "/placeholder.svg"}
          alt={images[currentIndex].alt}
          fill
          className="object-cover transition-opacity duration-500"
        />
      </div>

      <div
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full cursor-pointer z-10"
        onClick={goToPrevious}
      >
        <ChevronLeft size={24} />
      </div>
    <div
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 p-2 rounded-full cursor-pointer z-10"
        onClick={goToNext}
      >
        <ChevronRight size={24} />
      </div>

      
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {images.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-2 h-2 rounded-full cursor-pointer ${
              currentIndex === slideIndex ? "bg-[#E3AA2F]" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>
    </div>
  )
}
