import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function WaterTank() {
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
            <Link
              href="/sump-pit"
              className="flex justify-between items-center px-4 py-2 hover:bg-green-100 rounded-md"
            >
              <span>Sump Pit</span>
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-2 w-2 rounded-full bg-red-400 opacity-75 animate-ping"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-red-400"></span>
              </span>
            </Link>

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

            <button className="flex justify-between items-center px-4 py-2 bg-green-300 text-white rounded-md">
              <span>Temperature</span>
            </button>

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
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left panel */}
            <div className="space-y-6">
              {/* <!-- Floor Selector --> */}
              <div className="flex w-full rounded-xl p-4 bg-gray-50 shadow-md gap-8">
                <div className="w-1/2">
                  <label
                    htmlFor="floor"
                    className="block mb-2 text-xl font-semibold"
                  >
                    Tower
                  </label>
                  <select
                    id="floor"
                    className="w-full p-2 border rounded-lg shadow-sm"
                  >
                    <option value="top">Royale</option>
                    <option value="bottom">Lotus</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="floor"
                    className="block mb-2 text-xl font-semibold"
                  >
                    Lift
                  </label>
                  <select
                    id="floor"
                    className="w-full p-2 border rounded-lg shadow-sm"
                  >
                    <option value="top">1</option>
                    <option value="bottom">2</option>
                  </select>
                </div>
              </div>

              {/* <!-- Overview Table --> */}
              <div className="w-full rounded-xl bg-gray-50 shadow-md">
                <h2 className="text-xl font-semibold mb-2 px-4 pt-4">
                  Overview
                </h2>
                <div className="overflow-x-auto overflow-y-auto h-40 text-sm sm:text-md rounded-b-xl">
                  <table className="w-full table-auto text-left rounded-lg">
                    <thead className="bg-gray-100 sticky -top-0.5 z-10 shadow-md">
                      <tr>
                        <th className="px-4 py-2">Switch</th>
                        <th className="px-4 py-2">State</th>
                        <th className="px-4 py-2">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="px-4 py-2">Full Level</td>
                        <td className="px-4 py-2">ON</td>
                        <td className="px-4 py-2">2025-05-20 12:45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Full Level</td>
                        <td className="px-4 py-2">ON</td>
                        <td className="px-4 py-2">2025-05-20 12:45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Full Level</td>
                        <td className="px-4 py-2">ON</td>
                        <td className="px-4 py-2">2025-05-20 12:45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Full Level</td>
                        <td className="px-4 py-2">ON</td>
                        <td className="px-4 py-2">2025-05-20 12:45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Full Level</td>
                        <td className="px-4 py-2">ON</td>
                        <td className="px-4 py-2">2025-05-20 12:45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Full Level</td>
                        <td className="px-4 py-2">ON</td>
                        <td className="px-4 py-2">2025-05-20 12:45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2">Min Level</td>
                        <td className="px-4 py-2">OFF</td>
                        <td className="px-4 py-2">2025-05-20 12:40</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Right */}
            <div className="mx-auto w-full space-y-6">
              {/* Temperature */}
              <div className="rounded-xl p-4 bg-gray-50 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Temperature</h3>
              </div>
              
              {/* Humidity */}
              <div className="rounded-xl p-4 bg-gray-50 shadow-md">
                <h3 className="text-lg font-semibold mb-2">Humidity</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
