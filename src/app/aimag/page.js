import Link from "next/link";
import DataJson from "../../utils/aimag.json";

export default function HomePage() {
  console.log(DataJson);

  return (
    <div className="grid grid-cols-5 gap-6 p-10 bg-blsck">
      {DataJson.map((item) => (
          <div key={item.id} className="border-[1px] border-sky-200 rounded-xl h-[45px] bg-blue-500 hover:scale-105 hover:bg-emerald-300 flex justify-center items-center">
            <p className="text-black hover:scale-110">{item.country_side}</p>
          </div>
      ))}
    </div>
  );
}
