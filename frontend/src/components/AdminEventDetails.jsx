import React from "react";
import { useLocation } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaFileAlt, FaDownload } from "react-icons/fa";

const AdminEventDetails = () => {
  const location = useLocation();
  const { event } = location.state || {}; // Retrieve the event data from state

  if (!event) {
    return <div className="p-4">No event data available</div>;
  }

  const {
    title,
    date,
    clubName,
    time,
    description,
    photos,
    attendanceDocument,
  } = event;

  // Settings for the photo slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };

  return (
    <div className="p-4 max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{title}</h1>

      <div className="space-y-4">
        <div className="flex flex-col items-start">
          <p className="text-xl">
            <span className="font-semibold">Date:</span> {date}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Time:</span> {time}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Club:</span> {clubName}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Description:</span> {description}
          </p>
        </div>

        {/* {photos && photos.length > 0 && (
          <div className="mt-6">
            <h2 className="text-2xl font-semibold mb-4">Event Photos</h2>
            <Slider {...sliderSettings}>
              {photos.map((photo, index) => (
                <div key={index} className="w-full h-64">
                  <img
                    src={photo}
                    alt={`Event Photo ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </Slider>
          </div>
        )} */}

        <div className="mt-6 space-y-2">
          <h2 className="text-2xl font-semibold">Attendance</h2>
          <div className="flex flex-col space-y-2">
            <a
              href={attendanceDocument}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:text-blue-800 transition text-lg"
            >
              <FaFileAlt className="mr-2 text-xl" />
              View Attendance Document
            </a>
            <a
              href={attendanceDocument}
              download
              className="flex items-center text-blue-600 hover:text-blue-800 transition text-lg"
            >
              <FaDownload className="mr-2 text-xl" />
              Download Attendance Document
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEventDetails;
