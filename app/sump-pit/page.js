import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function SumpPit({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40 px-3">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-3xl overflow-y-auto py-4 max-h-[90vh]">
        <div className="p-2 sm:p-4">
          {/* Close Button */}
          <div className="flex flex-row-reverse">
            <button
              onClick={onClose}
              className="px-2 text-3xl font-bold hover:text-red-500"
            >
              X
            </button>
          </div>

          {/* Contents */}
          <div className="px-4 py-2 sm:px-8">
            {/* Node name / Item name */}
            <div className="text-2xl sm:text-3xl font-bold">
              Sump Pit Sensor 1
            </div>
            <div className="mb-4 text-sm sm:text-md">Device ID</div>
            <div className="flex justify-center items-center bg-white">
              {/* Dashboard Wrapper */}
              <div className="w-full max-w-6xl">
                {/* Sump Pit Dashboard */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-16">
                  {/* Left Panel */}
                  <div className="space-y-6">
                    {/* Sensor Status */}
                    <div className="w-full rounded-xl p-4 bg-gray-50 shadow-md">
                      <div className="flex justify-between items-center mb-3">
                        <h3 className="text-lg font-semibold">Sensor Status</h3>
                        <span className="font-semibold bg-yellow-400 py-1 px-2 rounded-lg text-white">
                          Cautious
                        </span>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="flex justify-between">
                          <span>Distance</span>
                          <span className="font-semibold text-red-400">
                            500 cm
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Overview Table */}
                    <div className="w-full rounded-xl bg-gray-50 shadow-md">
                      <h2 className="text-xl font-semibold mb-2 px-4 pt-4">
                        Overview
                      </h2>
                      <div className="overflow-x-auto overflow-y-auto h-40 text-sm sm:text-md rounded-b-xl">
                        <table className="w-full table-auto text-left rounded-lg">
                          <thead className="bg-gray-100 sticky -top-0.5 z-10 shadow-md">
                            <tr>
                              <th className="px-4 py-2">Distance</th>
                              <th className="px-4 py-2">Timestamp</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="px-4 py-2">500cm</td>
                              <td className="px-4 py-2">2025-05-20 12:45</td>
                            </tr>
                            <tr>
                              <td className="px-4 py-2">489cm</td>
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
                      {/* Sump Pit indicator */}
                      <div>
                        {/* Detail status */}
                        <div className="text-sm text-red-400">
                          Water is almost Full!
                        </div>
                        <div className="flex items-center gap-4">
                          <div className="text-xl font-semibold">
                            Sump Pit Level
                          </div>
                          {/* Status ping */}
                          <div className="relative flex h-6 w-6">
                            <div className="absolute inline-flex h-6 w-6 rounded-full bg-yellow-300 opacity-75 animate-ping"></div>
                            <div className="relative inline-flex h-6 w-6 rounded-full bg-yellow-300"></div>
                          </div>
                        </div>
                      </div>

                      {/* Sump Pit visualization */}
                      <div className="relative w-40 h-80 sm:w-52">
                        {/* Sump Pit */}
                        <div className="relative w-full h-full border-4 border-gray-600 rounded-3xl overflow-hidden bg-gray-100 shadow-md">
                          <div className="flex justify-center h-full relative">
                            <div className="relative border-l-4 h-1/3 border-dashed border-gray-600">
                              <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 whitespace-nowrap">
                                500 cm
                              </span>
                            </div>
                          </div>
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
                      </div>
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
