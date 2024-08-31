import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link
      to={`/event/${event.id}`}
      className="block p-4 rounded-lg shadow-lg hover:bg-gray-100 transition"
    >
      <img
        src={event.poster}
        alt={`${event.title} Poster`}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-600">{event.clubName}</p>
        <p className="text-gray-600">{event.time}</p>
      </div>
    </Link>
  );
};

const EventCard1 = ({ event }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // Navigate to the event details page
    navigate(`/pastevent/${event.id}`, { state: { event } });
  };

  return (
    <div
      onClick={handleClick}
      className="block p-4 rounded-lg shadow-lg hover:bg-gray-100 transition cursor-pointer"
    >
      <img
        src={event.poster}
        alt={`${event.title} Poster`}
        className="w-full h-48 object-cover rounded-lg"
      />
      <div className="mt-4">
        <h3 className="text-xl font-bold">{event.title}</h3>
        <p className="text-gray-600">{event.date}</p>
        <p className="text-gray-600">{event.clubName}</p>
        <p className="text-gray-600">{event.time}</p>
      </div>
    </div>
  );
};

export { EventCard, EventCard1 };
