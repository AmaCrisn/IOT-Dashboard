import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function WaterTank() {
  return (
    <div className="flex items-center justify-center px-3">
      <div className="w-3/4 pt-8 pb-7">
        {/* Contents */}
        <div className="flex justify-center items-center">
          {/* Dashboard Wrapper */}
          <div className="w-full max-w-6xl">
            {/* Node name / Item name */}
            <div className="text-2xl sm:text-3xl font-bold">
              Lotus Tower - Basement 1
            </div>
            <div className="mb-4 text-sm sm:text-md">Device ID</div>
            {/* Water Tank Dashboard */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
              {/* Left Panel */}
              <div className="space-y-6">
                {/* Sensor Status */}
                <div className="w-full rounded-xl p-4 bg-gray-50 shadow-md">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold">Switch Status</h3>
                    <span className="font-semibold bg-green-300 py-1 px-2 rounded-lg text-white">
                      Good
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

                {/* Overview Table */}
                <div className="w-full rounded-xl bg-gray-50 shadow-md">
                  <h2 className="text-xl font-semibold mb-2 px-4 pt-4">
                    Overview
                  </h2>
                  <div className="overflow-x-auto overflow-y-auto h-80 text-sm sm:text-md rounded-b-xl">
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
                          <td className="px-4 py-2 text-red-400">OFF</td>
                          <td className="px-4 py-2">2025-05-20 12:40</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Full Level</td>
                          <td className="px-4 py-2 text-green-400">ON</td>
                          <td className="px-4 py-2">2025-05-20 12:45</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">Min Level</td>
                          <td className="px-4 py-2 text-green-400">ON</td>
                          <td className="px-4 py-2">2025-05-20 12:40</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Right Panel */}
              <div className="flex justify-center md:justify-end w-full">
                <div className="flex flex-col items-center space-y-4">
                  {/* Water tank indicator */}
                  <div>
                    {/* Detail status */}
                    <div className="text-sm text-green-400">
                      Water is filled!
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-xl font-semibold">
                        Water Tank Level
                      </div>
                      {/* Status ping */}
                      <div className="relative flex h-6 w-6">
                        <div className="absolute inline-flex h-6 w-6 rounded-full bg-green-300 opacity-75 animate-ping"></div>
                        <div className="relative inline-flex h-6 w-6 rounded-full bg-green-300"></div>
                      </div>
                    </div>
                  </div>

                  {/* Water tank visualization */}
                  <div className="relative w-52 h-80 sm:h-96">
                    {/* Water Tank */}
                    <div className="relative w-full h-full border-4 border-gray-600 rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                      <div className="absolute bottom-0 w-full h-2/3 bg-blue-500 transition-all duration-500 rounded-b-2xl">
                        <div className="absolute -top-6 w-full h-fit">
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
                    <div className="absolute top-[45%] right-full ml-2 flex items-center">
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
