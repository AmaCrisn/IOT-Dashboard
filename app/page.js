import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 h-screen">
      <div>
        <h1 className="px-5 py-2 text-2xl sm:text-3xl mb-6 font-bold">
          Building Intelligence Management
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        <div className="relative group">
          {/* Main Link */}
          <Link
            href="/sump-pit"
            className="bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold text-[10px] shadow-md p-4 rounded-xl text-white block"
          >
            <div className="flex flex-col justify-between h-full">
              <span className="text-xl truncate text-center">Sump Pit</span>
              <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                  <span className="rounded-full text-sm bg-red-400 text-white px-2.5 py-2">
                    9+
                  </span>
                </span>
              </span>
            </div>
          </Link>

          {/* Dropdown Menu (outside the <Link>) */}
          <div className="absolute text-sm top-full right-0 w-1/2 bg-white text-black font-bold uppercase shadow-md rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block hidden z-10">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 1
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 2
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 3
            </Link>
          </div>
        </div>

        <div className="relative group">
          {/* Main Link */}
          <Link
            href="/water-tank"
            className="bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold text-[10px] shadow-md p-4 rounded-xl text-white block"
          >
            <div className="flex flex-col justify-between h-full">
              <span className="text-xl truncate text-center">Water Tank</span>
              <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                  <span className="rounded-full text-sm bg-red-400 text-white px-2.5 py-2">
                    9+
                  </span>
                </span>
              </span>
            </div>
          </Link>

          {/* Dropdown Menu (outside the <Link>) */}
          <div className="absolute text-sm top-full right-0 w-1/2 bg-white text-black font-bold uppercase shadow-md rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block hidden z-10">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 1
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 2
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 3
            </Link>
          </div>
        </div>

        <div className="relative group">
          {/* Main Link */}
          <Link
            href="/temperature"
            className="bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold text-[10px] shadow-md p-4 rounded-xl text-white block"
          >
            <div className="flex flex-col justify-between h-full">
              <span className="text-xl truncate text-center">Temperature</span>
              <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                  <span className="rounded-full text-sm bg-red-400 text-white px-2.5 py-2">
                    9+
                  </span>
                </span>
              </span>
            </div>
          </Link>

          {/* Dropdown Menu (outside the <Link>) */}
          <div className="absolute text-sm top-full right-0 w-1/2 bg-white text-black font-bold uppercase shadow-md rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block hidden z-10">
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 1
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 2
            </Link>
            <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
              Link 3
            </Link>
          </div>
        </div>

        <div className="group bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold text-[10px] shadow-md p-4 rounded-xl hover:cursor-pointer relative text-white">
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl truncate text-center">Smoke Sensors</span>
            <span className="absolute -bottom-2 -right-2 group-hover:z-20">
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="rounded-full text-sm bg-red-400 text-white px-2.5 py-2">
                  9+
                </span>
              </span>
            </span>
            <div className="absolute text-sm top-full right-0 w-1/2 bg-white text-black shadow-md rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block hidden z-10">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 2
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 3
              </Link>
            </div>
          </div>
        </div>

        <div className="group bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold text-[10px] shadow-md p-4 rounded-xl hover:cursor-pointer relative text-white">
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl truncate text-center">
              Vibration Sensor
            </span>
            <span className="absolute -bottom-2 -right-2 group-hover:z-20">
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="rounded-full text-sm bg-red-400 text-white px-2.5 py-2">
                  9+
                </span>
              </span>
            </span>
            <div className="absolute text-sm top-full right-0 w-1/2 bg-white text-black shadow-md rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block hidden z-10">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 2
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 3
              </Link>
            </div>
          </div>
        </div>

        <div className="group bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold text-[10px] shadow-md p-4 rounded-xl hover:cursor-pointer relative text-white">
          <div className="flex flex-col justify-between h-full">
            <span className="text-xl truncate text-center">Sump Pit</span>
            <span className="absolute -bottom-2 -right-2 group-hover:z-20">
              <span className="relative flex h-8 w-8 items-center justify-center">
                <span className="absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="rounded-full text-sm bg-red-400 text-white px-2.5 py-2">
                  9+
                </span>
              </span>
            </span>
            <div className="absolute text-sm top-full right-0 w-1/2 bg-white text-black shadow-md rounded opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 group-hover:block hidden z-10">
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 1
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 2
              </Link>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-100">
                Link 3
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}