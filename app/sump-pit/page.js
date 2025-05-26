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
                    Basement
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

              {/* Sensor Status */}
              <div className="w-full rounded-xl p-4 bg-gray-50 shadow-md">
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold">Sensor Status</h3>
                  <span className="font-semibold bg-yellow-400 py-2 px-4 rounded-xl text-white">
                    Cautious
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between">
                    <span>Full Level</span>
                    <span className="font-semibold text-red-400">OFF</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Min Level</span>
                    <span className="font-semibold text-green-400">ON</span>
                  </div>
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
              {/* <!-- Sump Pit Selector --> */}
              <div className="w-full flex flex-col gap-4 rounded-xl p-4 bg-gray-50 shadow-md">
                <span className="block w-2/8 text-xl font-semibold">
                  Sump Pit Locations
                </span>
                {/* <Image src="" /> */}
                <span className="flex items-center">
                  <label
                    htmlFor="floor"
                    className="block w-3/6 text-xl font-semibold"
                  >
                    Sump Pit:
                  </label>
                  <select
                    id="floor"
                    className="w-full p-2 border rounded-lg shadow-sm"
                  >
                    <option value="top">Sump pit 1</option>
                    <option value="bottom">Sump pit 2</option>
                  </select>
                </span>
              </div>

              {/* <!-- Container for Right Alignment --> */}
              <div className="flex justify-center md:justify-end w-full">
                {/* <!-- Right Panel: Water Tank --> */}
                <div className="flex flex-col items-center space-y-4">
                  {/* <!-- Light Indicator --> */}
                  <div>
                    <div className="text-sm text-red-400">
                      Water is almost full!
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-xl font-semibold">
                        Sump Pit Level, Status:
                      </div>
                      {/* Full Level */}
                      {/* <div className="relative flex h-6 w-6">
                        <div className="absolute inline-flex h-6 w-6 rounded-full bg-green-500 opacity-75 animate-ping"></div>
                        <div
                          id="indicatorLight"
                          className="relative inline-flex h-6 w-6 rounded-full bg-green-400"
                        ></div>
                      </div> */}
                      {/* Minimum Level*/}
                      <div className="relative flex h-6 w-6">
                        <div className="absolute inline-flex h-6 w-6 rounded-full bg-yellow-300 opacity-75 animate-ping"></div>
                        <div
                          id="indicatorLight"
                          className="relative inline-flex h-6 w-6 rounded-full bg-yellow-300"
                        ></div>
                      </div>
                      {/* Very Low Level */}
                      {/* <div className="relative flex h-6 w-6">
                      <div className="absolute inline-flex h-6 w-6 rounded-full bg-red-400 opacity-75 animate-ping"></div>
                      <div
                        id="indicatorLight"
                        className="relative inline-flex h-6 w-6 rounded-full bg-red-400"
                      ></div>
                    </div> */}
                    </div>
                  </div>

                  <div className="relative w-24 h-[300px] sm:w-52 sm:h-[400px]">
                    {/* Water Tank */}
                    <div className="relative w-full h-full border-4 border-black rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                      <div
                        id="waterLevel"
                        className="absolute bottom-0 w-full h-2/3 bg-blue-500 transition-all duration-500 rounded-b-2xl"
                      >
                        <div
                          id="markerBar"
                          className="absolute -top-6 w-full h-fit"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 1440 320"
                            className="w-full h-6"
                            preserveAspectRatio="none"
                          >
                            <path
                              fill="#2b7fff"
                              fillOpacity="1"
                              d="M0,128L60,117.3C120,107,240,85,360,101.3C480,117,600,171,720,208C840,245,960,267,1080,234.7C1200,203,1320,117,1380,74.7L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>

                    {/* Full Level Marker */}
                    <div className="absolute -top-3 right-full ml-2 flex items-center">
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        Full Level
                      </span>
                      <div className="w-4 h-1 bg-gray-700 opacity-75"></div>
                    </div>

                    {/* Min Level Marker */}
                    <div className="absolute top-1/2 right-full ml-2 flex items-center">
                      <span className="ml-2 text-sm font-medium text-gray-700">
                        Min Level
                      </span>
                      <div className="w-4 h-1 bg-gray-700 opacity-75"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
