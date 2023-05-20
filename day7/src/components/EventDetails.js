import React from 'react';
import { Link, useParams } from 'react-router-dom';

const EventDetails = (events) => {
  const { eventId } = useParams();
  const event = events.find((event) => event.id === Number(eventId));

  return (
    <div>
      <h2>Event Details</h2>
      <h3>{event.title}</h3>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <Link to="/">Back</Link>
    </div>
  );
};

export default EventDetails;
