import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function WaterTank() {
  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-row-reverse">
        <div className="px-5 py-2 text-2xl sm:text-3xl font-bold">
          x
        </div>
      </div>

      {/* <!-- Contents --> */}
      <div className="flex justify-center items-center bg-white p-4 sm:p-8">
        <div className="w-full max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Left panel */}
            <div className="space-y-6">
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
