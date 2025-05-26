import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function SumpPit() {
  return (
    <div className="p-4 sm:p-6">
      <div>
        <h1 className="px-5 py-2 text-2xl sm:text-3xl mb-6 font-bold">
          Building Intelligence Management
        </h1>
      </div>

      {/* <!-- Menu Bar --> */}
      <details className="relative w-4/5 mx-auto bg-white shadow-md my-2 rounded-xl p-2">
        <summary className="flex items-center justify-between px-4 py-2 cursor-pointer list-none">
          <span className="text-xl font-semibold text-black">Categories</span>
          <span className="p-2 border-2 border-black rounded-md">
            <svg
              className="w-6 h-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </span>
        </summary>

        {/* <!-- Dropdown Menu --> */}
        <div className="bg-white border-t">
          <div className="flex flex-col p-2 text-md space-y-2">
            {/* <!-- Each Button --> */}
            <button className="flex justify-between items-center px-4 py-2 bg-green-300 text-white rounded-md">
              <span>Sump Pit</span>
            </button>

            <Link
              href="/water-tank"
              className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md"
            >
              <span>Water Tank</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </Link>

            <Link
              href="/temperature"
              className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md"
            >
              <span>Temperature</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </Link>

            <button className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md">
              <span>Smoke</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </button>

            <button className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md">
              <span>Vibration</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </button>

            <button className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md">
              <span>CO₂ Sensors</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </button>

            <button className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md">
              <span>Pressure</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </button>

            <button className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md">
              <span>Electricity</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </button>

            <button className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md">
              <span>Gas Flow</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </button>
          </div>
        </div>
      </details>

      {/* <!-- Contents --> */}
      <div className="flex justify-center items-center bg-white p-4 sm:p-8">
        
      </div>
    </div>
  );
}
