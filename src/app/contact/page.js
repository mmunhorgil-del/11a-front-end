"use client";

import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <header className="w-full bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/")}
              className="p-2 rounded-xl hover:bg-gray-100 transition"
            >
              <ArrowLeft className="w-6 h-6 text-blue-800" />
            </button>

            <h1 className="text-2xl font-bold text-blue-900">
              Contact Us
            </h1>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <p className="text-gray-600 hover:text-blue-700 cursor-pointer transition">
              Home
            </p>

            <p className="text-gray-600 hover:text-blue-700 cursor-pointer transition">
              About
            </p>

            <p className="text-blue-700 font-semibold cursor-pointer">
              Contact
            </p>
          </nav>
        </div>
      </header>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[4px] text-orange-500 font-semibold mb-4">
              Get In Touch
            </p>

            <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
              Let’s Talk About
              <br />
              Your Project
            </h1>

            <p className="text-gray-600 text-lg mt-6 leading-relaxed">
              Have questions or ideas? Feel free to contact us anytime.
              We would love to hear from you and help build something amazing.
            </p>

            {/* Contact Info */}
            <div className="mt-10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-blue-100 p-4 rounded-2xl">
                  <Mail className="text-blue-700 w-6 h-6" />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">Email</p>
                  <p className="text-gray-500">
                    hello@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-4 rounded-2xl">
                  <Phone className="text-orange-500 w-6 h-6" />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">Phone</p>
                  <p className="text-gray-500">
                    +976 **** ****
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-4 rounded-2xl">
                  <MapPin className="text-green-600 w-6 h-6" />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">
                    Location
                  </p>
                  <p className="text-gray-500">
                    Ulaanbaatar, Mongolia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side / Form */}
          <div className="bg-white shadow-2xl rounded-[40px] p-8 md:p-10">
            <h2 className="text-3xl font-bold text-blue-900 mb-8">
              Send Message
            </h2>

            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="text-gray-700 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 h-14 px-5 rounded-2xl bg-blue-50 border border-transparent focus:border-blue-400 focus:outline-none text-gray-700"
                />
              </div>

              {/* Email */}
              <div>
                <label className="text-gray-700 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 h-14 px-5 rounded-2xl bg-blue-50 border border-transparent focus:border-blue-400 focus:outline-none text-gray-700"
                />
              </div>

              {/* Message */}
              <div>
                <label className="text-gray-700 font-medium">
                  Message
                </label>

                <textarea
                  placeholder="Write your message..."
                  className="w-full mt-2 h-40 p-5 rounded-2xl bg-blue-50 border border-transparent focus:border-blue-400 focus:outline-none resize-none text-gray-700"
                />
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full h-14 rounded-2xl bg-blue-700 hover:bg-blue-800 transition text-white font-semibold text-lg flex items-center justify-center gap-3 shadow-lg"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}