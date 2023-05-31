import React from "react";
import { Link } from "react-router-dom";

export default function EventList() {
  const events = [
    {
      id: "1",
      title: "Event 1",
      date: "2023-06-01",
      time: "10:00 AM",
      location: "Location 1",
      description: "Description for Event 1",
    },
    {
      id: "2",
      title: "Event 2",
      date: "2023-06-02",
      time: "11:00 AM",
      location: "Location 2",
      description: "Description for Event 2",
    },
  ];
  return (
    <div>
      <h1>Event List</h1>
      {events.map((event) => {
        return(
        <div key={event.id}>
          <Link to={`/event-details/${event.id}`}>
            <h2>{event.title}</h2>
          </Link>
          <p>{event.date}</p>
          
        </div>
)
})}
    </div>
  );
}
