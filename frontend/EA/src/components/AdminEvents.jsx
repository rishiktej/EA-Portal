import React from "react";
import { EventCard1 } from "./Eventcard"; // Assuming you use EventCard for displaying events

// Sample data for past events
const events = [
  {
    id: 1,
    title: "Tech Talk",
    date: "2024-09-15",
    clubName: "Computer Science Club",
    time: "10:00 AM",
    poster: "tech_talk_poster.jpg",
  },
  {
    id: 3,
    title: "Tech Talk",
    date: "2024-09-12",
    clubName: "Satarc",
    time: "10:00 AM",
    poster: "tech_talk_poster.jpg",
  },
  {
    id: 2,
    title: "Art Workshop",
    date: "2024-08-20",
    clubName: "Art Club",
    time: "1:00 PM",
    poster: "art_workshop_poster.jpg",
  },
  // Add more events as needed
];

// Helper function to group events by year and month
const groupEventsByMonth = (events) => {
  return events.reduce((acc, event) => {
    const date = new Date(event.date);
    const year = date.getFullYear();
    const month = date.toLocaleString("default", { month: "long" });

    if (!acc[year]) acc[year] = {};
    if (!acc[year][month]) acc[year][month] = [];

    acc[year][month].push(event);

    return acc;
  }, {});
};

const AdminEvents = () => {
  const groupedEvents = groupEventsByMonth(events);

  return (
    <div className="p-4 space-y-4">
      <h2 className="text-2xl font-bold">Your Past Events</h2>
      {Object.entries(groupedEvents).map(([year, months]) => (
        <div key={year} className="space-y-4">
          <h3 className="text-xl font-semibold">{year}</h3>
          {Object.entries(months).map(([month, events]) => (
            <div key={month} className="space-y-2">
              <h4 className="text-lg font-semibold">{month}</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {events.map((event) => (
                  <EventCard1 key={event.id} event={event} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default AdminEvents;
