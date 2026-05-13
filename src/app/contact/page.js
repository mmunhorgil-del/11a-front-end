"use client";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  return (
    <div className="">
      <div className="h-[50px] bg-[#1c2e99]">
        <div className="flex items-center justify-start pl-4">
                      <button onClick={() => router.push("/")}>
              <img
                className="cursor-pointer rounded-xl text-blue-500 w-8 h-6"
                src="/arrow.png"
                alt="back"
              />
            </button>
        </div>
        {/*<div className="flex items-center gap-4 pr-8">
          <div className="h-4 w-15 bg-neutral-300 rounded-md" />
          <div className="h-4 w-15 bg-neutral-300 rounded-md" />
          <div className="h-4 w-15 bg-neutral-300 rounded-md" />
        </div>*/}
      </div>
      <div className="h-screen bg-white flex flex-col ">
        <h1 className="ml-12 text-black text-[65px] pt-12 ">Contact Us</h1>
        <input
          placeholder="Name"
          className="m-4 ml-10 pl-6 bg-sky-100  h-[50px] w-[650px] rounded-[20px] text-sky-500"
        />
        <input
          placeholder="Email"
          className="m-4 ml-10 pl-6 h-[50px] bg-sky-100 w-[650px] rounded-[20px] text-sky-500"
        />
        <input
          placeholder="Message"
          className="m-4 ml-10 pl-6 h-[100px] bg-sky-100 w-[650px] rounded-[20px] text-sky-500"
        />
        <button className="bg-[#3fa0e0] h-[60px] w-[650px] rounded-[30px] text-white m-6">
          Send Message
        </button>
      </div>
    </div>
  );
}
