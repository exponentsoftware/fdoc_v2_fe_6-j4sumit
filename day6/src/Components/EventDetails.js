import React from 'react'
import { Link, useParams } from 'react-router-dom';

export default function EventDetails({events}) {
    const { eventId } = useParams();
const event = events.find((event)=> event.id === eventId);
if(!event)
{
    return <div>Event not found according to given ID</div>
}
    return (
    <div>
<h2>{event.title}</h2>
<p>Date: {event.date}</p>
<p>Time :{event.time}</p>
<p>Location:{event.location}</p>
<p>Description: {event.description}</p>
<Link to="/"><button>Back to EventList</button></Link>
    </div>
  )
}