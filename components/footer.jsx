import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#13133F] py-12 border-t border-[#2a2463]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-[#E3AA2F] font-bold text-2xl mb-4 inline-block">
              KTSPL
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
                className="bg-[#1A184B] border border-[#2a2463] rounded-l-md p-2 text-white flex-grow"
              />
              <button
                type="button"
                className="bg-[#E3AA2F] text-black px-4 py-2 rounded-r-md font-medium hover:bg-[#c99528] transition-colors"
              >
                Join &gt;
              </button>
            </div>
            <div className="flex space-x-4 mt-4">
              <Link href="#" className="text-white hover:text-[#E3AA2F]">
                <div className="w-8 h-8 bg-[#1A184B] rounded-full flex items-center justify-center">
                  <Facebook size={16} />
                </div>
              </Link>
              <Link href="#" className="text-white hover:text-[#E3AA2F]">
                <div className="w-8 h-8 bg-[#1A184B] rounded-full flex items-center justify-center">
                  <Twitter size={16} />
                </div>
              </Link>
              <Link href="#" className="text-white hover:text-[#E3AA2F]">
                <div className="w-8 h-8 bg-[#1A184B] rounded-full flex items-center justify-center">
                  <Linkedin size={16} />
                </div>
              </Link>
              <Link href="#" className="text-white hover:text-[#E3AA2F]">
                <div className="w-8 h-8 bg-[#1A184B] rounded-full flex items-center justify-center">
                  <Instagram size={16} />
                </div>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-white/50">
          Copyright © 2024 Khelo Tech and Strategy Private Limited. All Rights Reserved
        </div>
      </div>
    </footer>
  )
}
