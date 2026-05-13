"use client";

import { useRouter } from "next/navigation";
import DataJson from "../../utils/aimag.json";
import { ArrowLeft, MapPinned } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Left */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => router.push("/")}
              className="
                p-3
                rounded-2xl
                bg-blue-100
                hover:bg-blue-200
                transition
                shadow-sm
              "
            >
              <ArrowLeft className="w-5 h-5 text-blue-800" />
            </button>

            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-blue-900">
                Mongolia Provinces
              </h1>

              <p className="text-gray-500 text-sm md:text-base">
                Explore all provinces
              </p>
            </div>
          </div>

          {/* Right Badge */}
          <div
            className="
              hidden
              md:flex
              items-center
              gap-2
              bg-blue-100
              px-4
              py-2
              rounded-full
            "
          >
            <MapPinned className="w-5 h-5 text-blue-700" />

            <p className="text-blue-800 font-medium">
              {DataJson.length} Provinces
            </p>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-14 text-center">
        <p className="uppercase tracking-[4px] text-orange-500 font-semibold">
          Discover Mongolia
        </p>

        <h1
          className="
            text-4xl
            md:text-6xl
            font-extrabold
            text-blue-900
            mt-4
          "
        >
          Aimag List
        </h1>
      </section>

      {/* Grid */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-6
          "
        >
          {DataJson.map((item) => (
            <div
              key={item.id}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white
                border
                border-blue-100
                shadow-md
                hover:shadow-2xl
                hover:-translate-y-2
                transition
                duration-300
                cursor-pointer
              "
            >
              {/* Top Gradient */}
              <div
                className="
                  h-2
                  bg-gradient-to-r
                  from-blue-500
                  via-cyan-400
                  to-emerald-400
                "
              />

              {/* Content */}
              <div className="p-8 flex flex-col items-center text-center">
                <div
                  className="
                    bg-blue-100
                    p-4
                    rounded-2xl
                    group-hover:scale-110
                    transition
                  "
                >
                  <MapPinned className="w-8 h-8 text-blue-700" />
                </div>

                <h2
                  className="
                    mt-6
                    text-xl
                    font-bold
                    text-gray-800
                    group-hover:text-blue-700
                    transition
                  "
                >
                  {item.country_side}
                </h2>

                <p className="text-gray-500 text-sm mt-2">
                  Mongolia Province
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}