import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BarcodeScanner } from "./BarcodeScanner"; // Import the BarcodeScanner component
import { FaCamera } from "react-icons/fa"; // Import camera icon

const ScanAttendancePage = () => {
  const [cameraEnabled, setCameraEnabled] = useState(false);
  const [scannedResult, setScannedResult] = useState("");
  const navigate = useNavigate();

  // Function to handle the toggle of camera
  const toggleCamera = () => {
    setCameraEnabled(!cameraEnabled);
  };

  // Function to handle the result from BarcodeScanner
  const handleScan = (result) => {
    if (result) {
      setScannedResult(result);
      // Handle the scanned result here (e.g., send it to the server or navigate to another page)
    }
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center">
        Scan Attendance
      </h1>
      <button
        onClick={toggleCamera}
        className="w-full md:w-auto mb-4 p-3 md:p-4 bg-blue-600 text-white rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-700 transition"
      >
        <FaCamera className="text-lg md:text-xl" />
        <span className="text-sm md:text-base">
          {cameraEnabled ? "Stop Camera" : "Start Camera"}
        </span>
      </button>
      {cameraEnabled && (
        <div className="relative w-full h-64 md:h-80 lg:h-96 border border-gray-300 rounded-lg overflow-hidden">
          <BarcodeScanner onResult={handleScan} />
        </div>
      )}
      {scannedResult && (
        <div className="mt-4 text-center">
          <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
            Scanned Result:
          </h2>
          <p className="text-base md:text-lg lg:text-xl">{scannedResult}</p>
        </div>
      )}
    </div>
  );
};

export default ScanAttendancePage;
