import React from "react";
import { Link } from "react-router-dom";

export default function EventList({events}) {
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
