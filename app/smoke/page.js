import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function Smoke({ onClose }) {
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
            <div className="text-2xl sm:text-3xl font-bold">Smoke Sensor 1</div>
            <div className="mb-4 text-sm sm:text-md">Device ID</div>
            <div className="flex justify-center items-center bg-white">
              {/* Dashboard Wrapper */}
              <div className="w-full max-w-6xl">
                <div className="mb-2 flex flex-col justify-center">
                    <span className="font-bold text-2xl text-center">Air Quality is 167</span>
                    <span className="text-md text-center text-red-400">Air quality is bad!</span>
                </div>

                {/* Smoke indicator bar */}
                <div className="w-full bg-gray-200 rounded-full h-4">
                  <div
                    className="bg-red-500 h-4 rounded-full transition-all duration-300"
                    style={{ width: "83.5%" }}
                  ></div>
                  {/* Value indicator */}
                  <div className="flex justify-between text-sm sm:text-md">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                    <span>150</span> 
                    <span>200</span>
                    {/* Above 150 should be alarm  */}
                  </div>
                </div>

                <div>
                    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
