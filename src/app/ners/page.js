"use client";

import { useState } from "react";
import Link from "next/link";
import DataJson from "../../utils/data.json";

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [query, setQuery] = useState("");

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
    <div className="p-6 bg-cyan-300">
      <div className="mb-4 flex items-center gap-2">
        <input
          aria-label="Search"
          placeholder="Search by name, email, country or type..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") setQuery(searchTerm);
          }}
          className="px-3 py-2 rounded border border-gray-300 w-full max-w-md"
        />
        <button
          onClick={() => setQuery(searchTerm)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Search
        </button>
        <button
          onClick={() => {
            setSearchTerm("");
            setQuery("");
          }}
          className="bg-gray-200 px-3 py-2 rounded"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {filtered.map((item) => (
          <div
            key={item.id}
            className="text-white bg-white h-150 w-80 rounded rounded-xl border border-solid border-2 border-black"
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
              <p className="m-4 text-black bg-blue-200 h-6 w-18 rounded rounded-xl flex justify-center sitems-center">
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
              <p className="m-2 text-black font-bold">created: </p>
              <p className="m-2 text-black">{item.created_at}</p>
            </div>

            <div>
              {item.item?.map((a, index) => (
                <div key={index} className="flex justify-betweenx ">
                  <p className="text-black m-2 font-bold">{a.name}</p>
                  <img
                    className="m-2 h-[50px] w-[65px]"
                    src={a.image}
                    alt={a.name || "item image"}
                  />
                </div>
              ))}
            </div>

            <div className="pl-4">
              <button className="bg-red-600 rounded rounded-xl h-10 w-20">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
