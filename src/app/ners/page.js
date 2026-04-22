import Link from "next/link";
import DataJson from "../../utils/data.json";

export default function HomePage() {
  console.log(DataJson);

  return (
    <div className="grid grid-cols-4 gap-6 p-6 bg-cyan-300">
      {DataJson.map((item) => (
        <div key={item.id} className="text-white bg-white h-150 w-80 rounded rounded-xl border border-solid border-2 border-black">
          <div className="flex justify-betweenx">
            <img
              className="m-2 text-black h-35 w-60"
              src={item.image}
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

          <div >
            {item.item?.map((a, index) => (
              <div key={index} className="flex justify-betweenx ">
                <p className="text-black m-2 font-bold">{a.name}</p>
                <img className="m-2 h-[50px] w-[65px]" src={a.image} />
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
  );
}
