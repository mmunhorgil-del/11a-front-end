"use client";

import Link from "next/link";
import DataJson from "../utils/aimag.json";
import { useRouter } from "next/navigation";

export default function HomePage() {
  console.log(DataJson);
  const router = useRouter();

  return (
    <div className="bg-white h-screen w-full flex flex-col justify-center items-center gap-8">
        <div >
          <img className="h-64 w-64" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5UOiHZq_kreTAbUxIpi8XntVxA5jhzPhKFw&s" />
        </div>
      <div className="">
        <button
          onClick={() => router.push("/contact")}
          className="rounded rounded-xl border borrder-solid border-black border-2 text-black hover:scale-105 hover:bg-slate-400 h-[40px] w-[100px] m-2"
        >
          Contact
        </button>
        <button
          onClick={() => router.push("/about")}
          className="border border-solid rounded rounded-xl border-black border-2 text-black hover:scale-105 hover:bg-slate-400 h-[40px] w-[100px] m-2"
        >
          About
        </button>
        <button
          onClick={() => router.push("/weather")}
          className="border border-solid border-black border-2 rounded rounded-xl text-black hover:scale-105 hover:bg-slate-400 h-[40px] w-[100px] m-2"
        >
          Weather
        </button>
        <button
          onClick={() => router.push("/aimag")}
          className="border border-solid border-black border-2 rounded rounded-xl text-black hover:scale-105 hover:bg-slate-400 h-[40px] w-[100px] m-2"
        >
          Aimag
        </button>
        <button
          onClick={() => router.push("/ners")}
          className="border border-solid border-black border-2 rounded rounded-xl text-black hover:scale-105 hover:bg-slate-400 h-[40px] w-[200px] m-2"
        >
          Teacher,Student Json
        </button>
      </div>
    </div>
  );
}
