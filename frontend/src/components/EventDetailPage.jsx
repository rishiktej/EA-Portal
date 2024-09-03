import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCamera } from "react-icons/fa"; // Import the camera icon

const EventDetailPage = () => {
  const { eventId } = useParams();
  const navigate = useNavigate();

  // Dummy event data
  const event = {
    id: eventId,
    title: "Tech Talk",
    date: "2024-09-15",
    clubName: "Computer Science Club",
    time: "10:00 AM",
    description:
      "Join us for a tech talk on the latest trends in software development.",
    poster: "tech_talk_poster.jpg",
  };

  const handlePostAttendance = () => {
    navigate("/scan-attendance");
  };

  return (
    <div className="p-4">
      <img
        src={event.poster}
        alt={`${event.title} Poster`}
        className="w-full h-64 object-cover rounded-lg"
      />
      <h2 className="text-3xl font-bold mt-4">{event.title}</h2>
      <p className="text-gray-600">
        {event.date} | {event.time}
      </p>
      <p className="text-gray-600">{event.clubName}</p>
      <p className="mt-4">{event.description}</p>

      {/* Post Attendance Button */}
      <button
        onClick={handlePostAttendance}
        className="mt-8 p-4 bg-purple-600 text-white rounded-lg flex items-center space-x-4 hover:bg-purple-700 transition"
      >
        <FaCamera className="text-2xl" />
        <span className="text-lg font-semibold">Post Attendance</span>
      </button>
    </div>
  );
};

export default EventDetailPage;
