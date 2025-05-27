import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Temperature({ onClose }) {
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
            <div className="text-2xl sm:text-3xl font-bold">
              Temperature Sensor 1
            </div>
            <div className="mb-4 text-sm sm:text-md">Device ID</div>
            <div className="flex justify-center items-center bg-white">
              <div className="w-full max-w-6xl">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-5">
                  {/* Temperature Progress Bar */}
                  <div className="rounded-xl p-4 bg-gray-50 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Temperature</h3>
                    <div className="text-sm mb-2">
                      Current: 27°C / Max: 40°C
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-green-400 h-4 rounded-full transition-all duration-300"
                        style={{ width: "27%" }}
                      ></div>
                    </div>
                  </div>

                  {/* Humidity */}
                  <div className="rounded-xl p-4 bg-gray-50 shadow-md">
                    <h3 className="text-lg font-semibold mb-2">Humidity</h3>
                    <div className="text-sm mb-2">
                      Current: 80% / Min: 30% - Max: 60%
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-red-500 h-4 rounded-full transition-all duration-300"
                        style={{ width: "80%" }}
                      ></div>
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
                          <th className="px-4 py-2">Temperature</th>
                          <th className="px-4 py-2">Humidity</th>
                          <th className="px-4 py-2">Timestamp</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="px-4 py-2">27°C</td>
                          <td className="px-4 py-2">80%</td>
                          <td className="px-4 py-2">2025-05-20 12:45</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2">20°C</td>
                          <td className="px-4 py-2">77%</td>
                          <td className="px-4 py-2">2025-05-20 12:45</td>
                        </tr>
                      </tbody>
                    </table>
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
