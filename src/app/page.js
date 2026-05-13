"use client";

import Link from "next/link";
import DataJson from "../utils/aimag.json";
import { useRouter } from "next/navigation";

export default function HomePage() {
  console.log(DataJson);
  const router = useRouter();

  return (
    <div className="bg-white h-screen w-full flex flex-col justify-center items-center gap-8 bg-[url(https://scontent-sin6-1.xx.fbcdn.net/o1/v/t0/f2/m421/AQP4mctPcUh4ei1ttUi0R2xIfcHuDTLFfoheiLp-kX7s-abuQQ6r-aM5t9wvL4BCq1ozB0zQIpb4ULiI5eYrQQBUwO74TP6CyqaWiwzMTY-jZeixHlnKXIY-WmANdciC07SyaIhxc532NJPrrfsthluMkO3upw.jpeg?_nc_ht=scontent-sin6-1.xx.fbcdn.net&_nc_gid=pGKgncjTrq3Dd6gRCNM6gQ&_nc_cat=108&_nc_oc=Adrx2-BGlfPMucQHzy_23Nm-4UvnpuDUnoW71LjZK26mfTBZ_8qWo5m8IbJ3-yipLy8&ccb=9-4&oh=00_Af7EdHn0sN-eL8sPhSmMURPqKA2OAu4xALsGi5GKXpcxSA&oe=6A05CDDF&_nc_sid=5b3566)]">
        <div >
          <img className="h-75 w-75 rounded rounded-[100px]" src="/nest logo.png" />
        </div>
      <div className="">
        <button
          onClick={() => router.push("/contact")}
          className="rounded rounded-xl border border-solid border-black border-2 cursor-pointer text-black bg-white hover:scale-105 hover:bg-slate-300 h-[40px] w-[100px] m-2"
        >
          Contact
        </button>
        <button
          onClick={() => router.push("/about")}
          className="border border-solid rounded rounded-xl border-black border-2 cursor-pointer text-black hover:scale-105 hover:bg-slate-300 bg-white cursor-pointer h-[40px] w-[100px] m-2"
        >
          About
        </button>
        <button
          onClick={() => router.push("/weather")}
          className="border border-solid border-black border-2 cursor-pointer rounded rounded-xl text-black hover:scale-105 hover:bg-slate-300 bg-white cursor-pointer h-[40px] w-[100px] m-2"
        >
          Weather
        </button>
        <button
          onClick={() => router.push("/aimag")}
          className="border border-solid border-black border-2 cursor-pointer rounded rounded-xl text-black hover:scale-105 hover:bg-slate-300 bg-white cursor-pointer h-[40px] w-[100px] m-2"
        >
          Aimag
        </button>
        <button
          onClick={() => router.push("/ners")}
          className="border border-solid border-black border-2 cursor-pointer rounded rounded-xl text-black hover:scale-105 hover:bg-slate-300 bg-white cursor-pointer h-[40px] w-[200px] m-2"
        >
          Teacher,Student Json
        </button>
      </div>
    </div>
  );
}
