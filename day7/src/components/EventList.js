import React from 'react';
import { Link } from 'react-router-dom';
import EventDetails from './EventDetails';



const EventList = () => {

  const events = [
    {
      id: 1,
      title: 'Event 1',
      date: '2023-05-21',
      time: '10:00 AM',
      location: 'Location 1',
      description: 'Event 1 description',
    },
    {
      id: 2,
      title: 'Event 2',
      date: '2023-05-22',
      time: '11:00 AM',
      location: 'Location 2',
      description: 'Event 2 description',
    },
  ];

  return (
    <div>
      <h2>Event List</h2>
      {events.map((event) => (
        <div key={event.id}>
        <Link to={`/{EventDetails}/${key}`}>
          <h3>{event.title}</h3> 
          </Link>
           <h3>{event.title}</h3>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;