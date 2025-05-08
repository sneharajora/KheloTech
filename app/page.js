import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#13133F] text-white">
      {/* Hero Section */}
      <section className="relative h-[500px] w-full">
        <div className="absolute inset-0 bg-black/50 z-10"></div>
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=500&width=1920"
            alt="Sports coaches"
            fill
            className="object-cover"
            priority
          />
        </div>
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

      {/* Partners Section */}
      <section className="bg-[#13133F] py-10">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <Image
              src="/placeholder.svg?height=50&width=100&text=IBM"
              alt="IBM"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=50&width=100&text=DECATHLON"
              alt="Decathlon"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=50&width=100&text=Great+Sports+Tech"
              alt="Great Sports Tech"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=50&width=100&text=Partner+4"
              alt="Partner 4"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=50&width=100&text=Partner+5"
              alt="Partner 5"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
            <Image
              src="/placeholder.svg?height=50&width=100&text=case:"
              alt="case:"
              width={100}
              height={50}
              className="opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Tech Experience Section */}
      <section className="bg-[#13133F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            A new tech experience, <span className="text-[#E3AA2F]">in a heartbeat</span>
          </h2>
          <p className="text-white/80 mb-12 max-w-2xl">
            Install your App in seconds, connect your app and take your sport to the{" "}
            <span className="text-[#E3AA2F]">next level</span>
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {/* Sportwizz Card */}
            <div className="bg-[#1A184B] rounded-lg p-6 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Sportwizz</h3>
              <p className="text-white/70 mb-4">
                Facility Booking Management System is a cloud-based Sports Management solution.
              </p>
              <div className="mt-auto">
                <Link href="/more" className="text-[#E3AA2F] hover:underline flex items-center">
                  More <span className="ml-1 text-[#E3AA2F]">●</span>
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-8 translate-y-8">
                <Image
                  src="/placeholder.svg?height=150&width=150&text=Sportwizz"
                  alt="Sportwizz App"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>

            {/* Allsport Card */}
            <div className="bg-[#1A184B] rounded-lg p-6 relative overflow-hidden">
              <h3 className="text-xl font-bold mb-2">Allsport</h3>
              <p className="text-white/70 mb-4">
                Facility Booking Management System is a cloud-based Sports Management solution.
              </p>
              <div className="mt-auto">
                <Link href="/more" className="text-[#E3AA2F] hover:underline flex items-center">
                  More <span className="ml-1 text-[#E3AA2F]">●</span>
                </Link>
              </div>
              <div className="absolute bottom-0 right-0 w-32 h-32 transform translate-x-8 translate-y-8">
                <Image
                  src="/placeholder.svg?height=150&width=150&text=Allsport"
                  alt="Allsport App"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Advantages Section */}
      <section className="bg-[#13133F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-medium mb-1">The App</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            The only <span className="text-[#E3AA2F]">advantage</span> you need
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Gamified Drills */}
            <div className="bg-[#1A184B] rounded-lg p-6">
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

            {/* App Image */}
            <div className="flex justify-center items-center">
              <div className="relative w-[200px] h-[400px]">
                <Image
                  src="/placeholder.svg?height=400&width=200&text=Mobile+App"
                  alt="Mobile app"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Line Calling & Challenges */}
            <div className="bg-[#1A184B] rounded-lg p-6">
              <h3 className="text-xl font-bold mb-4">Line Calling & Challenges</h3>
              <p className="text-white/70">
                No more arguments or distractions. Get accurate real-time voice line-calling and 3D visualization for
                your tournaments or casual matches.
              </p>
            </div>
          </div>

          <div className="bg-[#1A184B] rounded-lg p-6 text-center">
            <p className="mb-4">Care for a cup of tea? Lets connect and get in touch.</p>
            <Link
              href="/get-started"
              className="inline-block bg-[#E3AA2F] text-black px-4 py-2 rounded-md font-medium hover:bg-[#c99528] transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-[#13133F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-medium mb-1">Our Services</h2>
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            The only <span className="text-[#E3AA2F]">advantage</span> you need
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Services Cards */}
            <div className="bg-[#1A184B] rounded-lg p-6">
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

            <div className="bg-[#1A184B] rounded-lg p-6">
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

            <div className="bg-[#1A184B] rounded-lg p-6">
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

            <div className="bg-[#1A184B] rounded-lg p-6">
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

          <div className="bg-[#1A184B] rounded-lg p-6 text-center">
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

      {/* Testimonials Section */}
      <section className="bg-[#13133F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Testimonials</h2>
              <h3 className="text-xl md:text-2xl font-bold">
                Don't take our word for it <span className="text-[#E3AA2F]">Take theirs</span>
              </h3>
            </div>
            <div className="md:w-2/3">
              <div className="bg-[#1A184B] rounded-lg p-6 mb-6 border-l-4 border-[#E3AA2F]">
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
              <div className="bg-[#1A184B] rounded-lg p-6 border-l-4 border-[#E3AA2F]">
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

      {/* Social Media Section */}
      <section className="bg-[#13133F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            On <span className="text-[#E3AA2F]">Social Media</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="aspect-square relative overflow-hidden rounded-lg">
                <Image
                  src={`/placeholder.svg?height=300&width=300&text=Social${item}`}
                  alt={`Social media post ${item}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#13133F] py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Need more info? <span className="text-[#E3AA2F]">Just reach out!</span>
          </h2>

          <form className="mt-8 max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-[#1A184B] border border-[#2a2463] rounded-md p-3 text-white"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full bg-[#1A184B] border border-[#2a2463] rounded-md p-3 text-white"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#1A184B] border border-[#2a2463] rounded-md p-3 text-white"
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
                className="w-full bg-[#1A184B] border border-[#2a2463] rounded-md p-3 text-white"
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
                className="bg-[#E3AA2F] text-black px-6 py-2 rounded-md font-medium hover:bg-[#c99528] transition-colors flex items-center"
              >
                Send
                <ChevronRight size={16} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  )
}
