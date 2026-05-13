"use client"
import { useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

export default function WeatherPage() {
  const router = useRouter();

  return (
    <div className="flex gap-4 bg-[#0E1230] h-screen p-4">
      <div className=" justify-items-center rounded-xl w-[10%] h-dvh bg-[#183366]">
        <div className="flex items-start mb-4">
        <button
          onClick={() => router.push("/")}
        >
          < ArrowLeft className="cursor-pointer rounded-xl text-blue-40 w-8 h-6 m-4" />
        </button>
      </div>
        <div className="bg-blue-950 h-12 w-12 mt-12 rounded-xl p-1">
          <img src="https://cdn-icons-png.flaticon.com/128/5024/5024369.png" />
        </div>
        <img className=" w-[30px] h-[30px] m-4 mt-16 mb-2" src="/cloud.svg" />
        <p>Weather</p>
        <img className=" w-[30px] h-[30px] m-4 mb-2" src="/listy.svg" />
        <p>Cities</p>
        <img className=" w-[30px] h-[30px] m-4 mb-2" src="/map.svg" />
        <p>Map</p>
        <img className=" w-[30px] h-[30px] m-4 mb-2" src="/settings.svg" />
        <p>Settings</p>
      </div>

      <div className="w-[60%] h-dvh rounded-xl gap-4 flex flex-col">
        <input
          placeholder="Search for cities"
          className="pl-4 bg-[#183366]  h-[7%] w-full rounded-[20px] text-white"
        />
        <div className="h-[32%] w-full bg-[#0E1230] rounded-xl p-8 flex justify-between items-center">
          <div>
            <h1 className="text-5xl font-bold">Madrid</h1>
            <p className="text-gray-400 mb-6">Chance of rain: 0%</p>
            <h2 className="text-6xl font-bold">31°</h2>
          </div>
          <div>
            <img className="w-[150px] h-[150px]" src="https://cdn-icons-png.flaticon.com/128/3222/3222675.png" />
          </div>
        </div>
        <div className="h-[32%] w-full bg-[#183366] rounded-xl p-4 justify-between">
          <div>
            <h3 className="font-bold text-[15px] mb-4 text-slate-400">
              TODAY S FORECAST
            </h3>
          </div>
          <div className="flex m-8 justify-between">
            <div>
              <p className="font-bold text-[15px] mb-4 text-slate-400">
                6:00 AM
              </p>
              <img
                className="h-16 w-16"
                src="https://cdn-icons-png.flaticon.com/128/616/616516.png"
              />
              <p className="font-bold text-[20px] justify-self-center justify-self-center">
                25°
              </p>
            </div>
            <div>
              <p className="font-bold text-[15px] mb-4 text-slate-400">
                9:00 AM
              </p>
              <img
                className="h-16 w-16"
                src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png"
              />
              <p className="font-bold text-[20px] justify-self-center">28°</p>
            </div>
            <div>
              <p className="font-bold text-[15px] mb-4 text-slate-400">
                12:00 PM
              </p>
              <img
                className="h-16 w-16"
                src="https://cdn-icons-png.flaticon.com/128/3222/3222675.png"
              />
              <p className="font-bold text-[20px] justify-self-center">33°</p>
            </div>
            <div>
              <p className="font-bold text-[15px] mb-4 text-slate-400">
                3:00 PM
              </p>
              <img
                className="h-16 w-16"
                src="https://cdn-icons-png.flaticon.com/128/3222/3222675.png"
              />
              <p className="font-bold text-[20px] justify-self-center justify-between">
                32°
              </p>
            </div>
            <div>
              <p className="font-bold text-[15px] mb-4 text-slate-400">
                6:00 PM
              </p>
              <img
                className="h-16 w-16"
                src="https://cdn-icons-png.flaticon.com/128/3222/3222675.png"
              />
              <p className="font-bold text-[20px] justify-self-center">30°</p>
            </div>
            <div className="">
              <p className="font-bold text-[15px] mb-4 text-slate-400">
                9:00 PM
              </p>
              <img
                className="h-16 w-16"
                src="https://cdn-icons-png.flaticon.com/128/2698/2698213.png"
              />
              <p className="font-bold text-[20px] justify-self-center">30°</p>
            </div>
          </div>
        </div>
        <div className="h-[29%] w-full bg-[#183366] rounded-xl p-4">
          <div>
            <h4 className="text-[15px] mb-4 text-slate-400 font-bold">
              AIR CONDITIONS
            </h4>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="flex">
              <div>
                <img
                  className="h-[35px] w-[35px] mr-4 mt-2"
                  src="https://cdn-icons-png.flaticon.com/128/808/808602.png"
                />
              </div>
              <div>
                <p className="text-gray-400">Real Feel</p>
                <p className="text-[30px] font-bold">30°</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img
                  className="h-[30px] w-[30px] mr-4 mt-2"
                  src="https://cdn-icons-png.flaticon.com/128/2011/2011448.png"
                />
              </div>
              <div>
                <p className="text-gray-400">Wind</p>
                <p className="text-[30px] font-bold">0.2 km/h</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img
                  className="h-[30px] w-[30px] mr-4 mt-2"
                  src="https://cdn-icons-png.flaticon.com/128/67/67780.png"
                />
              </div>
              <div>
                <p className="text-gray-400">Chance of rain</p>
                <p className="text-[30px] font-bold">0%</p>
              </div>
            </div>
            <div className="flex">
              <div>
                <img
                  className="h-[30px] w-[30px] mr-4 mt-2"
                  src="https://cdn-icons-png.flaticon.com/128/2354/2354809.png"
                />
              </div>
              <div>
                <p className="text-gray-400">UV Index</p>
                <p className="text-[30px] font-bold">3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-[30%] h-dvh mt-12 bg-[#183366] rounded-xl p-4 ">
        <div>
          <h5 className="text-[15px] mb-4 text-slate-400 font-bold">
            7-DAY FORECAST
          </h5>
        </div>
        <div className="">
          <div className="flex justify-between p-10">
            <div>
              <p className="font-bold text-[15px] text-slate-400">TODAY</p>
            </div>
            <div className="flex">
              <img
                className="w-[30px] h-[30px] mr-4"
                src="https://cdn-icons-png.flaticon.com/128/3222/3222675.png"
              />
              <p>Sunny</p>
            </div>
            <div>
              <p className="font-bold text-slate-400">36/22</p>
            </div>
          </div>
          <div className="flex justify-between p-8">
            <div>
              <p className="font-bold text-slate-400">Tue</p>
            </div>
            <div className="flex">
              <img
                className="w-[30px] h-[30px] mr-4"
                src="https://cdn-icons-png.flaticon.com/128/3222/3222675.png"
              />
              <p>Sunny</p>
            </div>
            <div>
              <p className="font-bold text-slate-400">37/21</p>
            </div>
          </div>
          <div className="flex justify-between p-8">
            <div>
              <p className="font-bold text-slate-400">Wed</p>
            </div>
            <div className="flex">
              <img
                className="w-[30px] h-[30px] mr-4"
                src="https://cdn-icons-png.flaticon.com/128/3222/3222675.png"
              />
              <p>Sunny</p>
            </div>
            <div>
              <p className="font-bold text-slate-400">37/21</p>
            </div>
          </div>
          <div className="flex justify-between p-8">
            <div>
              <p className="font-bold text-slate-400">Thu</p>
            </div>
            <div className="flex">
              <img
                className="w-[30px] h-[30px] mr-4"
                src="https://cdn-icons-png.flaticon.com/128/616/616516.png"
              />
              <p>Cloudy</p>
            </div>
            <div>
              <p className="font-bold text-slate-400">37/21</p>
            </div>
          </div>
          <div className="flex justify-between p-8">
            <div>
              <p className="font-bold text-slate-400">Fri</p>
            </div>
            <div className="flex">
              <img
                className="w-[30px] h-[30px] mr-4"
                src="https://cdn-icons-png.flaticon.com/128/616/616516.png"
              />
              <p>Cloudy</p>
            </div>
            <div>
              <p className="font-bold text-slate-400">37/21</p>
            </div>
          </div>
          <div className="flex justify-between p-8">
            <div>
              <p className="font-bold text-slate-400">Sat</p>
            </div>
            <div className="flex">
              <img
                className="w-[30px] h-[30px] mr-4"
                src="https://cdn-icons-png.flaticon.com/128/1959/1959338.png"
              />
              <p>Rainy</p>
            </div>
            <div>
              <p className="font-bold text-slate-400">37/21</p>
            </div>
          </div>
          <div className="flex justify-between p-8">
            <div>
              <p className="font-bold text-slate-400">Sun</p>
            </div>
            <div className="flex">
              <img
                className="w-[30px] h-[30px] mr-4"
                src="https://cdn-icons-png.flaticon.com/128/3982/3982078.png"
              />
              <p>Storm </p>
            </div>
            <div>
              <p className="font-bold text-slate-400">37/21</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
