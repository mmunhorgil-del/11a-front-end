"use client";

import { useRouter } from "next/navigation";
import {
  Phone,
  Info,
  CloudSun,
  MapPinned,
  Database,
} from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  const pages = [
    {
      title: "Contact",
      icon: <Phone className="w-6 h-6" />,
      path: "/contact",
      color: "from-blue-500 to-blue-700",
    },
    {
      title: "About",
      icon: <Info className="w-6 h-6" />,
      path: "/about",
      color: "from-orange-400 to-orange-600",
    },
    {
      title: "Weather",
      icon: <CloudSun className="w-6 h-6" />,
      path: "/weather",
      color: "from-cyan-400 to-sky-600",
    },
    {
      title: "Aimag",
      icon: <MapPinned className="w-6 h-6" />,
      path: "/aimag",
      color: "from-green-400 to-green-600",
    },
    {
      title: "Teacher & Student",
      icon: <Database className="w-6 h-6" />,
      path: "/ners",
      color: "from-purple-500 to-purple-700",
    },
  ];

  return (
    <div
      className="
        min-h-screen
        bg-cover
        bg-center
        relative
        flex
        items-center
        justify-center
        px-6
      "
      style={{
        backgroundImage:
          "url(https://scontent-sin6-1.xx.fbcdn.net/o1/v/t0/f2/m421/AQP4mctPcUh4ei1ttUi0R2xIfcHuDTLFfoheiLp-kX7s-abuQQ6r-aM5t9wvL4BCq1ozB0zQIpb4ULiI5eYrQQBUwO74TP6CyqaWiwzMTY-jZeixHlnKXIY-WmANdciC07SyaIhxc532NJPrrfsthluMkO3upw.jpeg?_nc_ht=scontent-sin6-1.xx.fbcdn.net&_nc_gid=pGKgncjTrq3Dd6gRCNM6gQ&_nc_cat=108&_nc_oc=Adrx2-BGlfPMucQHzy_23Nm-4UvnpuDUnoW71LjZK26mfTBZ_8qWo5m8IbJ3-yipLy8&ccb=9-4&oh=00_Af7EdHn0sN-eL8sPhSmMURPqKA2OAu4xALsGi5GKXpcxSA&oe=6A05CDDF&_nc_sid=5b3566)",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Card */}
      <div
        className="
          relative
          z-10
          w-full
          max-w-5xl
          bg-white/10
          backdrop-blur-xl
          border
          border-white/20
          rounded-[40px]
          shadow-2xl
          p-8
          md:p-14
        "
      >
        {/* Logo + Text */}
        <div className="flex flex-col items-center text-center">
          <img
            className="
              h-36
              w-36
              md:h-44
              md:w-44
              rounded-full
              object-cover
              border-2
              border-white
              shadow-2xl
              hover:scale-105
              transition
              duration-300
            "
            src="/nest logo.png"
            alt="Nest Education Logo"
          />

          <h1 className="text-white text-3xl md:text-6xl font-extrabold mt-8">
            Nest Education IT School
          </h1>
        </div>

        {/* Buttons */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
            mt-14
          "
        >
          {pages.map((page, index) => (
            <button
              key={index}
              onClick={() => router.push(page.path)}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                p-[2px]
                hover:scale-105
                transition
                duration-300
              "
            >
              {/* Gradient Border */}
              <div
                className={`
                  absolute inset-0 bg-gradient-to-r ${page.color}
                `}
              />

              {/* Content */}
              <div
                className="
                  relative
                  bg-white
                  rounded-3xl
                  h-full
                  px-6
                  py-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  hover:bg-gray-50
                  transition
                "
              >
                <div
                  className={`
                    bg-gradient-to-r ${page.color}
                    text-white
                    p-4
                    rounded-2xl
                    shadow-lg
                  `}
                >
                  {page.icon}
                </div>

                <h2 className="text-xl font-bold text-gray-800">
                  {page.title}
                </h2>

                <p className="text-gray-500 text-sm">
                  Click To Open
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}