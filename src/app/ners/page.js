"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import DataJson from "../../utils/data.json";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");
  const router = useRouter();

  const q = query.trim().toLowerCase();
  const filtered = DataJson.filter((item) => {
    if (!q) return true;
    const fullName = `${item.first_name} ${item.last_name}`.toLowerCase();
    const email = (item.email || "").toLowerCase();
    const country = (item.country || "").toLowerCase();
    const type = (item.type || "").toLowerCase();
    return (
      fullName.includes(q) ||
      email.includes(q) ||
      country.includes(q) ||
      type.includes(q)
    );
  });

  return (
    <div className="p-6 bg-pink-200 h-[100%] ">
      <div className="flex items-start gap-4 mb-4">
        <button onClick={() => router.push("/")}>
          <img
            className="cursor-pointer rounded-xl text-blue-500 w-8 h-6"
            src="/arrow.png"
            alt="back"
          />
        </button>
        <div className="mb-4 w-full flex justify-center items-center gap-2">
          <input
            aria-label="Search"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setQuery(searchTerm);
            }}
            className="w-[50%] h-[42px] px-3 py-2 rounded rounded-xl border border-black bg-white text-black"
          />
          <button
            onClick={() => setQuery(searchTerm)}
            className="w-[75px] h-[42px] cursor-pointer bg-black text-white px-2 py-2 rounded rounded-xl hover:scale-105 hover:bg-violet-2`00"
          >
            Search
          </button>
          <button
            onClick={() => {
              setSearchTerm("");
              setQuery("");
            }}
            className="w-[60px] h-[42px] cursor-pointer bg-white text-black px-2 py-2 rounded rounded-xl border hover:scale-105 hover:bg-violet-200"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-1 gap-6">
        {filtered?.length > 0 ? (
          filtered.map((item) => (
            <div
              key={item.id}
              className="cursor-pointer p-4 text-white bg-white h-auto w-auto rounded rounded-xl border border-solid border-2 border-black hover:scale-103 hover:bg-violet-200"
            >
              <div className="flex justify-betweenx">
                <img
                  className="m-2 text-black h-35 w-60"
                  src={item.image}
                  alt={`${item.first_name} ${item.last_name}`}
                />
              </div>
              <div className="flex justify-between">
                <h1 className="m-2 font-bold text-black">
                  {item.first_name} {item.last_name}
                </h1>
                <p className="m-4 text-black bg-blue-200 h-6 w-18 rounded rounded-xl flex justify-center items-center">
                  {item.type}
                </p>
              </div>
              <div className="flex justify-betweenx ">
                <p className="m-2 text-black font-bold">Email: </p>
                <p className="m-2 text-black">{item.email}</p>
              </div>
              <div className="flex justify-betweenx ">
                <p className="m-2 text-black font-bold">Age: </p>
                <p className="m-2 text-black">{item.age}</p>
              </div>
              <div className="flex justify-betweenx ">
                <p className="m-2 text-black font-bold">Country: </p>
                <p className="m-2 text-black">{item.country}</p>
              </div>
              <div className="flex justify-betweenx ">
                <p className="m-2 text-black font-bold">Points: </p>
                <p className="m-2 text-black">{item.point}</p>
              </div>
              <div className="flex justify-betweenx ">
                <p className="m-2 text-black font-bold">Created: </p>
                <p className="m-2 text-black">{item.created_at}</p>
              </div>

              <div>
                {item.item?.map((a, index) => (
                  <div key={index} className="flex justify-betweenx ">
                    <p className="text-black m-2 font-bold">items:</p>
                    <img
                      className="m-2 h-[50px] w-[65px]"
                      src={a.image}
                      alt={a.name || "item image"}
                    />
                  </div>
                ))}
              </div>

              <div className="pl-4">
                <button className="bg-red-600 rounded rounded-xl h-10 w-20 hover:scale-105 hover:bg-red-800">
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="mb-4 w-full h-screen text-black">
            <img className="h-screen w-full" src="/notfound.jpeg" alt="Data oldsongui"/>
          </div>
        )}
      </div>
    </div>
  );
}
