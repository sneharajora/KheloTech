'use client';

import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { useState } from "react"
import { Menu, X } from "lucide-react"


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen)
    }
  
  return (
    <main className="min-h-screen bg-[#0e0b30] text-white md:px-20 px-5">
      
{/* 
       <Navbar/>  */}
       <nav className="bg-[#13133F] py-4 sticky top-0 z-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center">
        <img
          src="/images/about/logo.svg"
          alt="KTSPL Logo"
          className="w-16 h-16 mr-2" 
        />
      </Link>
      
                <div className="hidden md:flex items-center space-x-6">
                  <Link href="/" className="text-white hover:text-[#E3AA2F] transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-white hover:text-[#E3AA2F] transition-colors">
                    About Us
                  </Link>
                  <Link href="/projects" className="text-white hover:text-[#E3AA2F] transition-colors">
                    Key Projects
                  </Link>
                  <Link href="/services" className="text-white hover:text-[#E3AA2F] transition-colors">
                    Services
                  </Link>
                  <Link href="/products" className="text-white hover:text-[#E3AA2F] transition-colors">
                    Products
                  </Link>
                  <Link href="/testimonials" className="text-white hover:text-[#E3AA2F] transition-colors">
                    Testimonials
                  </Link>
                  <Link href="/contact" className="text-white hover:text-[#E3AA2F] transition-colors">
                    Contact Us
                  </Link>
                </div>
      
                <Link
                  href="/get-started"
                  className="hidden md:block bg-[#E3AA2F] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c99528] transition-colors"
                >
                  Get Started
                </Link>
      
                <button className="md:hidden text-white" onClick={toggleMenu}>
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
      
              {isMenuOpen && (
                <div className="md:hidden mt-4 bg-[#1A184B] rounded-lg p-4">
                  <div className="flex flex-col space-y-4">
                    <Link href="/" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                      Home
                    </Link>
                    <Link href="/about" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                      About Us
                    </Link>
                    <Link href="/projects" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                      Key Projects
                    </Link>
                    <Link href="/services" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                      Services
                    </Link>
                    <Link href="/products" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                      Products
                    </Link>
                    <Link
                      href="/testimonials"
                      className="text-white hover:text-[#E3AA2F] transition-colors"
                      onClick={toggleMenu}
                    >
                      Testimonials
                    </Link>
                    <Link href="/contact" className="text-white hover:text-[#E3AA2F] transition-colors" onClick={toggleMenu}>
                      Contact Us
                    </Link>
                    <Link
                      href="/get-started"
                      className="bg-[#E3AA2F] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c99528] transition-colors text-center"
                      onClick={toggleMenu}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>


      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <Image
          src="/Hero1.svg"
          alt="Sports coaches"
          width={1920}
          height={500}
          className="object-cover w-full h-full"
          priority
        />
        <div className="absolute inset-0 z-20 container mx-auto px-4 md:px-6 flex flex-col justify-center">
          <h1 className="text-[#E3AA2F] text-3xl md:text-4xl lg:text-5xl font-bold mb-2">Khelo Tech & Strategy</h1>
          <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Innovative and Futuristic</h2>
          <p className="text-white/80 max-w-lg mb-8">
            Empowering Players, Coaches and Clubs with the simplest and most engaging game analysis solution
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/get-started"
              className="bg-[#E3AA2F] text-black px-6 py-3 rounded-md font-medium hover:bg-[#c99528] transition-colors"
            >
              Get Started
            </Link>
            <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors flex items-center">
              <span className="mr-2">Video</span>
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </section>

     
      <section className="bg-[#0e0b30] py-10 border m-3 rounded-xl">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image src="/images/HeroBottom/IBM.svg" alt="IBM" width={100} height={50} />
            <Image src="/images/HeroBottom/Decathlon.svg" alt="Decathlon" width={100} height={50} />
            <Image src="/images/HeroBottom/GreatSport.svg" alt="Partner 3" width={100} height={50} />
            <Image src="/images/HeroBottom/Kendrya.svg" alt="Partner 4" width={100} height={50} />
            <Image src="/images/HeroBottom/Case.svg" alt="Partner 5" width={100} height={50} />
          </div>
        </div>
      </section>

      <section className="bg-[#0e0b30] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            A new tech experience, <span className="text-[#E3AA2F]">in a heartbeat</span>
          </h2>
          <p className="text-white/80 mb-12 max-w-2xl">
            Install your App in seconds, connect your app and take your sport to the next level
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            
            <div className="bg-[#161252] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Sportwizz</h3>
              <p className="text-white/70 mb-4">
                Facility Booking Management System is a cloud-based Sports Management solution.
              </p>
              <div className="mt-auto">
                <Link href="/more" className="text-[#E3AA2F] hover:underline flex items-center">
                  More
                </Link>
              </div>
            </div>

            <div className="bg-[#161252] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-2">Allsport</h3>
              <p className="text-white/70 mb-4">
                Facility Booking Management System is a cloud-based Sports Management solution.
              </p>
              <div className="mt-auto">
                <Link href="/more" className="text-[#E3AA2F] hover:underline flex items-center">
                  More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="bg-[#0e0b30] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-medium mb-1">The App</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            The only <span className="text-[#E3AA2F]">advantage</span> you need
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
           
            <div className="bg-[#161252] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Gamified Drills</h3>
              <p className="text-white/70 mb-2">
                Engage, compete and have fun while practicing your skills. Choose your drill and we take care of the
                experience: light & sound feedback, scoreboards, rankings...
              </p>
              <p className="text-white/70">
                Whether you are working on your depth, consistency, pace or accuracy, your court turns into a virtual
                playground!
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="/images/Mobile.svg"
                alt="Mobile app"
                width={300}
                height={200}
                className="rounded-lg  "
              />
            </div>


          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
           
            <div className="bg-[#161252] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Line Calling & Challenges</h3>
              <p className="text-white/70">
                No more arguments or distractions. Get accurate real-time voice line-calling and 3D visualization for
                your tournaments or casual matches.
              </p>
            </div>
          </div>

          <div className="bg-[#161252] flex justify-between items-center rounded-lg p-8 text-center">
            <p className="">Care for a cup of tea? Lets connect and get in touch.</p>
            <Link
              href="/get-started"
              className="inline-block bg-[#E3AA2F] text-black px-4 py-2 rounded-xl font-medium hover:bg-[#c99528] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0e0b30] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-medium mb-1">Our Services</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            The only <span className="text-[#E3AA2F]">advantage</span> you need
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-[#161252] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E3AA2F] flex items-center justify-center mr-4">
                  <span className="text-black font-bold">1</span>
                </div>
                <h3 className="text-xl font-bold">Customized Web & APP Development</h3>
              </div>
              <p className="text-white/70">
                A complete range of Web & App development services that turns your ideas into a new driving force of
                your business.
              </p>
            </div>

            <div className="bg-[#161252] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E3AA2F] flex items-center justify-center mr-4">
                  <span className="text-black font-bold">2</span>
                </div>
                <h3 className="text-xl font-bold">Games & Sports Management System</h3>
              </div>
              <p className="text-white/70">
                A complete range of Web & App development services that turns your ideas into a new driving force of
                your business.
              </p>
            </div>

            <div className="bg-[#161252] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E3AA2F] flex items-center justify-center mr-4">
                  <span className="text-black font-bold">3</span>
                </div>
                <h3 className="text-xl font-bold">Fitness Assessment & Monitoring</h3>
              </div>
              <p className="text-white/70">
                A complete range of Web & App development services that turns your ideas into a new driving force of
                your business.
              </p>
            </div>

            <div className="bg-[#161252] rounded-lg p-6">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-[#E3AA2F] flex items-center justify-center mr-4">
                  <span className="text-black font-bold">4</span>
                </div>
                <h3 className="text-xl font-bold">Corporate Training</h3>
              </div>
              <p className="text-white/70">
                A complete range of Web & App development services that turns your ideas into a new driving force of
                your business.
              </p>
            </div>
          </div>

          <div className="bg-[#161252] rounded-lg p-6 text-center">
            <p>Lets connect and get in touch.</p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#E3AA2F] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c99528] transition-colors mt-4"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#0e0b30] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Testimonials</h2>
              <h3 className="text-xl md:text-2xl font-bold">
                Don't take our word for it <span className="text-[#E3AA2F]">Take theirs</span>
              </h3>
            </div>
            <div className="md:w-2/3">
              <div className="bg-[#161252] rounded-lg p-6 mb-6">
                <h4 className="text-[#E3AA2F] text-xl font-bold mb-1">Shreeja Puri</h4>
                <p className="text-sm text-white/70 mb-4">IBM</p>
                <p className="text-white/90">
                  "Thank you so much for a very engaging, fun and effective session! We have had a great time, learning,
                  gaining and understanding many aspects of Mindfulness from professionals who have given their time and
                  effort to make this Program a Grand Success. Thank you so much for a very engaging, fun and effective
                  session! We have had a great time, learning, gaining and understanding many aspects of Mindfulness
                  from professionals who have given their time and effort to make this Program a Grand Success."
                </p>
              </div>
              <div className="bg-[#161252] rounded-lg p-6">
                <h4 className="text-[#E3AA2F] text-xl font-bold mb-1">Ankita arora</h4>
                <p className="text-sm text-white/70 mb-4">Corporate Trainer</p>
                <p className="text-white/90">
                  "It was a great experience enlightening IBM team on "Fulfilling Friday" where I imparted my experience
                  and learning about Happiness and Emotional Wellbeing."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0e0b30] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 ">On  <span className="text-orange-500">Social Media</span></h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div key={item} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={`/images/Socials/Social${item}.svg`}
                  alt={`Social media post ${item}`}
                  fill
                  className="object-cover "
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0e0b30] py-12  md:py-16">
        <div className="container mx-auto px-4  md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Need more info? <span className="text-[#E3AA2F]">Just reach out!</span>
          </h2>

          <form className="mt-8  ">
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
                className=" text-white  px-2 rounded-md font-medium transition-colors flex items-center"
              >
                Send
              </button>
              <Image
                src="/images/Arrow.svg"
                alt="Mobile app"
                width={20}
                height={20}
                className="rounded-lg  "
              />
            </div>
          </form>
        </div>
      </section>

      <footer className="bg-[#0e0b30] py-12 border-t border-[#2a2463]">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link href="/" className="text-[#E3AA2F] font-bold text-2xl mb-4 inline-block">
                <Image
                  src="/images/Logo.svg"
                  alt="Mobile app"
                  width={100}
                  height={200}
                  className="rounded-lg  "
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
