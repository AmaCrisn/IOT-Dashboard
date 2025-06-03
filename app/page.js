import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className="p-4 sm:p-6 h-auto min-h-screen flex flex-col justify-between md:flex-row gap-6">
      {/* Left */}
      <div className="w-full md:w-4/5">
        <div className="bg-white shadow-md my-2 rounded-xl p-2 flex items-center justify-between">
          <h1 className="px-5 py-2 text-2xl sm:text-3xl font-bold">
            Command Center: Standby
          </h1>

          <div className="flex flex-col sm:flex-row px-5 gap-2 sm:gap-6">
            <div className="h-12 w-12 rounded-md bg-green-300 duration-300 hover:bg-green-400 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-full h-full text-white p-1"
              >
                <path
                  fillRule="evenodd"
                  d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                />
              </svg>
            </div>
            <div className="h-12 w-12 rounded-md bg-green-300 duration-300 hover:bg-green-400 shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
                className="w-full h-full text-white p-1"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"
                />
                <path
                  fillRule="evenodd"
                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Category details */}
        <div className="flex flex-wrap p-5 mb-4 items-center justify-start gap-4 sm:gap-6">
          <div className="flex items-center gap-2 text-sm">
            <div className="h-8 w-12 bg-green-300"></div>
            Normal
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="h-8 w-12 bg-yellow-300"></div>
            Warning
          </div>
          <div className="flex items-center gap-2 text-sm">
            <div className="h-8 w-12 bg-red-300"></div>
            Critical
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded-full bg-gray-600 text-white px-3.5 py-2">
              0
            </span>
            No issues
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded-full bg-gray-600 text-white px-3.5 py-2">
              9
            </span>
            No. of issues
          </div>
          <div className="flex items-center gap-2 text-sm">
            <span className="rounded-full bg-gray-600 text-white px-3.5 py-2">
              &gt;
            </span>
            More than 99+ issues
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {/* Button critical */}
          <div className="relative flex items-center justify-center">
            {/* Button ping */}
            <span className="absolute h-[70%] w-[55%] rounded-lg bg-red-400 opacity-85 animate-ping z-0"></span>
            {/* Button content */}
            <Link
              href="/sump-pit"
              className="bg-red-300 hover:bg-red-400 h-full w-full transition-colors duration-300 uppercase font-bold shadow-md p-4 rounded-xl text-white block z-10"
            >
              <div className="flex flex-col justify-between h-full">
                <span className="text-xl truncate text-center">Sump Pit</span>
                <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className="rounded-full text-sm bg-gray-600 text-white px-3.5 py-2">
                      &gt;
                    </span>
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* Button warning */}
          <div className="relative">
            <Link
              href="/water-tank"
              className="bg-yellow-300 hover:bg-yellow-400 transition-colors duration-300 uppercase font-bold shadow-md p-4 rounded-xl text-white block"
            >
              <div className="flex flex-col justify-between h-full">
                <span className="text-xl truncate text-center">Water Tank</span>
                <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className="rounded-full text-sm bg-gray-600 text-white px-2.5 py-2">
                      10
                    </span>
                  </span>
                </span>
              </div>
            </Link>
          </div>

          {/* Button normal */}
          <div className="relative group">
            <Link
              href="/temperature"
              className="bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold shadow-md p-4 rounded-xl text-white block"
            >
              <div className="flex flex-col justify-between h-full">
                <span className="text-xl truncate text-center">
                  Temperature
                </span>
                <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                  <span className="relative flex h-8 w-8 items-center justify-center">
                    <span className="rounded-full text-sm bg-gray-600 text-white px-3.5 py-2">
                      1
                    </span>
                  </span>
                </span>
              </div>
            </Link>
          </div>

          <div className="group bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold shadow-md p-4 rounded-xl hover:cursor-pointer relative text-white">
            <div className="flex flex-col justify-between h-full">
              <span className="text-xl truncate text-center">
               smoke Sensors
              </span>
              <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="rounded-full text-sm bg-gray-600 text-white px-3.5 py-2">
                    1
                  </span>
                </span>
              </span>
            </div>
          </div>

          <div className="group bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold shadow-md p-4 rounded-xl hover:cursor-pointer relative text-white">
            <div className="flex flex-col justify-between h-full">
              <span className="text-xl truncate text-center">
                Vibration Sensor
              </span>
              <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="rounded-full text-sm bg-gray-600 text-white px-3.5 py-2">
                    1
                  </span>
                </span>
              </span>
            </div>
          </div>

          <div className="group bg-green-300 hover:bg-green-400 transition-colors duration-300 uppercase font-bold shadow-md p-4 rounded-xl hover:cursor-pointer relative text-white">
            <div className="flex flex-col justify-between h-full">
              <span className="text-xl truncate text-center">Sump Pit</span>
              <span className="absolute -bottom-2 -right-2 group-hover:z-20">
                <span className="relative flex h-8 w-8 items-center justify-center">
                  <span className="rounded-full text-sm bg-gray-600 text-white px-3.5 py-2">
                    1
                  </span>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="w-full md:w-1/5">
        {/* Account viewing this page */}
        <div className="bg-white shadow-md mt-2 rounded-t-xl text-2xl px-6 py-4 font-bold">
          Agents
        </div>
        <div className="bg-white h-64 overflow-auto py-2 px-5 shadow-md rounded-b-xl">
          {/* CC */}
          <div className="mt-2 flex flex-col">
            <span className="text-lg font-semibold mb-2">CC Active</span>
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Standby</span>
            </span>
            <hr className="border-gray-500 my-2" />
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Standby</span>
            </span>
          </div>
          <hr className="border-gray-500 my-2" />
          {/* BM */}
          <div className="mb-2 flex flex-col">
            <span className="text-lg font-semibold mb-2">BM Active</span>
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Standby</span>
            </span>
            <hr className="border-gray-500 my-2" />
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Standby</span>
            </span>
            <hr className="border-gray-500 my-2" />
          </div>
          {/* Receiptionist */}
          <div className="mb-2 flex flex-col">
            <span className="text-lg font-semibold mb-2">
              Receiptionist Active
            </span>
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Standby</span>
            </span>
            <hr className="border-gray-500 my-2" />
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Standby</span>
            </span>
            <hr className="border-gray-500 my-2" />
          </div>
          {/* Logged In */}
          <div className="mb-2 flex flex-col">
            <span className="text-lg font-semibold mb-2">Logged In</span>
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Logged in</span>
            </span>
            <hr className="border-gray-500 my-2" />
            <span className="text-sm flex justify-between">
              <span>Account 1</span>
              <span>Logged in</span>
            </span>
            <hr className="border-gray-500 my-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
