'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Link from 'next/link'
import Navbar from "../../components/Navbar"

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const visibleCards = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3
      if (window.innerWidth >= 768) return 2
    }
    return 1
  }

  const [cardsPerView, setCardsPerView] = useState(visibleCards())

  useEffect(() => {
    const handleResize = () => setCardsPerView(visibleCards())
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const goToNext = () => {
    if (currentIndex + cardsPerView < images.length) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const goToPrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  useEffect(() => {
    const interval = setInterval(goToNext, 5000)
    return () => clearInterval(interval)
  }, [currentIndex, cardsPerView])

  return (
    <div className="w-full px-4 py-6">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${(100 / cardsPerView) * currentIndex}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className={`min-w-[100%] md:min-w-[50%] lg:min-w-[33.33%] px-2`}
            >
              <div className="relative h-[200px] md:h-[250px] lg:h-[300px] rounded-lg overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      
      <div className="flex justify-center gap-6 mt-4">
        <button
          onClick={goToPrev}
          disabled={currentIndex === 0}
          className="bg-[#13133F]/70 hover:bg-[#13133F]/90 text-white p-2 rounded-full disabled:opacity-50"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={goToNext}
          disabled={currentIndex + cardsPerView >= images.length}
          className="bg-[#13133F]/70 hover:bg-[#13133F]/90 text-white p-2 rounded-full disabled:opacity-50"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
export default function AboutPage() {
  const carouselImages = [
    {
      src: '/images/about/c1.svg',
      alt: 'Tech Image 1',
    },
    {
      src: '/images/about/c2.svg',
      alt: 'Mobile App',
    },
    {
      src: '/images/about/c3.svg',
      alt: 'Sports Image',
    },
    {
      src: '/images/about/c4.gif',
      alt: 'Tech Image 2',
    },
  ]

  const teamMembers = [
    {
      name: 'Anshul Bagai',
      role: 'FOUNDER & CEO',
      image: '/images/about/1 (1).svg',
    },
    {
      name: 'Jatin Srivastava',
      role: 'ADVISOR',
      image: '/images/about/2 (1).svg',
    },
    {
      name: 'Manish Jainn',
      role: 'ADVISOR',
      image: '/images/about/3.svg',
    },
    {
      name: 'Raman Singh',
      role: 'CO-FOUNDER & CTO',
      image: '/images/about/4 (1).svg',
    },
  ]

  const coreValues = [
    {
      title: 'Customer Centric Approach',
      description:
        'Developing systems according to requirements of the customer with utmost priority to customer satisfaction.',
    },
    {
      title: 'Reliable Communication',
      description:
        'We believe in responsible and precise communication which builds mutual trust and boosts relationships for the future.',
    },
    {
      title: 'Futuristic Approach',
      description:
        'Designing products with an eye on the future for our clients with the ability to respond to change and adapt is our forte.',
    },
  ]

  return (
    <main className="min-h-screen bg-[#13133F] text-white">
      <Navbar />

    
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">About Us</h1>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      
      <section className="py-12 bg-[#13133F]">
  <div className="container mx-auto px-4 md:px-6">
  
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white md:w-1/2">Our Vision</h2>
      <p className="text-white/80 md:w-1/2">
        To use INNOVATION for enhancing the performance of our customers through the use of TECHNOLOGY.
        Our VISION is to build the most technologically efficient machine which brings the sports ecosystem together.
      </p>
    </div>

    
    <div className="p-4 bg-white/10 rounded-xl">
      <div className="relative w-full h-[250px] md:h-[400px]">
        <Image
          src="/images/about/vision.svg"
          alt="Vision"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</section>


      
      <section className="py-12 bg-[#13133F]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Our Leadership Team</h2>
          <p className="text-white/80 mb-8">
            Our futuristic leadership team consists of dedicated, focused, and experienced executives.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#1A184B] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative w-full h-[280px]">
                  <Image
                    src={member.image || '/placeholder.svg'}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="font-bold text-xl mb-1">{member.name}</h3>
                  <p className="text-[#E3AA2F] text-sm">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
  <section className="py-12 bg-[#13133F]">
  <div className="container mx-auto px-4 md:px-6">
    
    <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-8">
      <h2 className="text-2xl md:text-3xl font-bold text-white md:w-1/2">Our Mission</h2>
      <p className="text-white/80 md:w-1/2">
      Sports Ecosystem is growing and changing at a rapid pace. Our mission is to create a platform of excellence which will enable the Five Pillars (Athletes, Students, Educators, Governing Bodies & Corporates) of this ecosystem to be seamlessly connected through a common platform and empower them to achieve more.


      </p>
    </div>

   
    <div className="p-4 bg-white/10 rounded-xl">
      <div className="relative w-full h-[250px] md:h-[400px]">
        <Image
          src="/images/about/mission.svg"
          alt="Vision"
          fill
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  </div>
</section>

      
      <section className="py-12 bg-[#13133F]">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 md:mb-12">Our Core Values</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index} 
                className="bg-[#1A184B] rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold mb-4 text-[#E3AA2F]">{value.title}</h3>
                <p className="text-white/80">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section className="bg-[#13133F] py-10 border-t border-b border-[#2a2463]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image
              src="/images/HeroBottom/IBM.svg"
              alt="IBM"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/HeroBottom/Decathlon.svg"
              alt="Decathlon"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/HeroBottom/GreatSport.svg"
              alt="Great Sports Tech"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/HeroBottom/Kendrya.svg"
              alt="Partner 4"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/images/HeroBottom/Case.svg"
              alt="Partner 5"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      
      <section className="bg-[#0e0b30] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Need more info? <span className="text-[#E3AA2F]">Just reach out!</span>
          </h2>

          <form className="mt-8">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#161252] border border-[#2a2463] rounded-md p-3 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-[#161252] border border-[#2a2463] rounded-md p-3 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#161252] border border-[#2a2463] rounded-md p-3 text-white"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Your Message...
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-[#161252] border border-[#2a2463] rounded-md p-3 text-white"
              ></textarea>
            </div>

            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center">
                <input type="radio" id="player" name="role" className="mr-2" />
                <label htmlFor="player">Player</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="coach" name="role" className="mr-2" />
                <label htmlFor="coach">Coach</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="sportDirector" name="role" className="mr-2" />
                <label htmlFor="sportDirector">Sport Director</label>
              </div>
              <div className="flex items-center">
                <input type="radio" id="other" name="role" className="mr-2" />
                <label htmlFor="other">Other</label>
              </div>
            </div>

            <div className="flex justify-end">
              <button
                type="submit"
                className="text-white px-2 rounded-md font-medium transition-colors flex items-center"
              >
                Send
              </button>
              <Image
                src="/images/Arrow.svg"
                alt="Send arrow"
                width={20}
                height={20}
                className="rounded-lg"
              />
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0e0b30] py-12 border-t border-[#2a2463]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-[#E3AA2F] font-bold text-2xl mb-4 inline-block">
                <Image
                  src="/images/Logo.svg"
                  alt="KTSPL Logo"
                  width={100}
                  height={200}
                  className="rounded-lg"
                />
              </Link>
              <p className="text-white/70 text-sm">
                It's always nice to hear from people for whom we are working day-in and day-out. We would love to hear
                anything that you have to say, be it a feedback, or a query.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Products</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/allsport" className="text-white/70 hover:text-white">
                    Allsport
                  </Link>
                </li>
                <li>
                  <Link href="/e-excellence" className="text-white/70 hover:text-white">
                    E-Excellence
                  </Link>
                </li>
                <li>
                  <Link href="/classoncloud" className="text-white/70 hover:text-white">
                    ClassOnCloud
                  </Link>
                </li>
                <li>
                  <Link href="/motor-skill" className="text-white/70 hover:text-white">
                    Motor Skill Assessment
                  </Link>
                </li>
                <li>
                  <Link href="/file-tracking" className="text-white/70 hover:text-white">
                    File Tracking System
                  </Link>
                </li>
                <li>
                  <Link href="/sportwizz" className="text-white/70 hover:text-white">
                    SportWizz
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">KTSPL</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-white/70 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/70 hover:text-white">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/faqs" className="text-white/70 hover:text-white">
                    FAQS
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Subscribe to our newsletter</h3>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Subscribe to our newsletter"
                  className="bg-[#161252] border border-[#2a2463] rounded-l-md p-2 text-white flex-grow"
                />
                <button
                  type="button"
                  className="bg-[#E3AA2F] text-black px-4 py-1 rounded-r-md font-medium hover:bg-[#c99528] transition-colors"
                >
                  <span className="flex items-center">Join <ChevronRight size={16} className="ml-1" /></span>
                </button>
              </div>
              <div className="flex space-x-4 mt-4">
                <Link href="#" className="text-white hover:text-[#E3AA2F]">
                  <div className="w-8 h-8 bg-[#161252] rounded-full flex items-center justify-center">f</div>
                </Link>
                <Link href="#" className="text-white hover:text-[#E3AA2F]">
                  <div className="w-8 h-8 bg-[#161252] rounded-full flex items-center justify-center">t</div>
                </Link>
                <Link href="#" className="text-white hover:text-[#E3AA2F]">
                  <div className="w-8 h-8 bg-[#161252] rounded-full flex items-center justify-center">in</div>
                </Link>
                <Link href="#" className="text-white hover:text-[#E3AA2F]">
                  <div className="w-8 h-8 bg-[#161252] rounded-full flex items-center justify-center">ig</div>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-sm text-white/50">
            Copyright © 2024 Khelo Tech and Strategy Private Limited. All Rights Reserved
          </div>
        </div>
      </footer>
    </main>
  )
}