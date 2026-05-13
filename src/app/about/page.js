"use client";

import { useRouter } from "next/navigation";
import { ArrowLeft, Menu } from "lucide-react";

export default function AboutPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50">
      {/* Navbar */}
      <header className="w-full border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/")}
              className="p-2 cursor-pointer rounded-xl hover:bg-gray-100 transition"
            >
              <ArrowLeft className="text-blue-700 w-6 h-6" />
            </button>

            <img
              className="w-14 h-14 rounded-2xl shadow-md"
              src="https://nhs.edu.mn/favicon.ico"
              alt="logo"
            />

            <div>
              <h1 className="text-xl font-bold text-blue-900">
                NHS Education
              </h1>
              <p className="text-sm text-gray-500">
                Building better futures
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-8">
            <p className="text-gray-700 hover:text-blue-700 cursor-pointer transition font-medium">
              Home
            </p>
            <p className="text-blue-700 font-semibold cursor-pointer">
              About Us
            </p>
            <p className="text-gray-700 hover:text-blue-700 cursor-pointer transition font-medium">
              Portfolio
            </p>
            <p className="text-gray-700 hover:text-blue-700 cursor-pointer transition font-medium">
              Contact
            </p>
          </nav>

          {/* Mobile Menu */}
          <button className="md:hidden p-2 rounded-xl hover:bg-gray-100">
            <Menu className="w-6 h-6 text-gray-700" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-12">
        {/* Left Content */}
        <div className="flex-1 text-center lg:text-left">
          <p className="uppercase tracking-[5px] text-orange-500 font-semibold mb-4">
            Welcome To Our Company
          </p>

          <h1 className="text-5xl md:text-6xl font-extrabold text-blue-900 leading-tight">
            We Create Modern <br />
            Digital Experiences
          </h1>

          <p className="text-gray-600 text-lg mt-6 leading-relaxed max-w-xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam quis nostrud exercitation.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <button className="bg-orange-500 cursor-pointer hover:bg-orange-600 transition text-white text-lg px-8 py-4 rounded-full shadow-lg">
              Contact Now
            </button>

            <button className="border-2 cursor-pointer border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white transition text-lg px-8 py-4 rounded-full">
              Learn More
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div>
              <h2 className="text-3xl font-bold text-blue-900">10+</h2>
              <p className="text-gray-500">Years</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900">500+</h2>
              <p className="text-gray-500">Students</p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-blue-900">98%</h2>
              <p className="text-gray-500">Success</p>
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex-1 flex justify-center">
          <div className="relative">
            {/* Background Blur */}
            <div className="absolute inset-0 bg-blue-300 blur-3xl opacity-20 rounded-full"></div>

            <img
              className="relative w-full max-w-[550px] rounded-[40px] shadow-2xl object-cover"
              src="https://i.pinimg.com/736x/c7/77/1b/c7771bd71ad9615abfb93bbc5078e4f5.jpg"
              alt="about"
            />
          </div>
        </div>
      </section>

      {/* Bottom Cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Mission
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Helping students and developers build strong digital skills for
              the future.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Vision
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Creating a modern and innovative learning environment for
              everyone.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">
              Our Values
            </h2>

            <p className="text-gray-600 leading-relaxed">
              Creativity, teamwork, technology, and continuous improvement.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}