import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function EventDetails({events, deleteEvent}) {
    const { eventId } = useParams();
const event = events.find((event)=> event.id === eventId);
// const history = useHistory();
const navigate =useNavigate()
if(!event)
{
    return <div>Event not found according to given ID</div>
}

const handleDelete=()=>{
const confirmDelete = window.confirm("Are you  sure want to Delete this event?");
if(confirmDelete)
{
    deleteEvent(eventId);
    navigate("/");
}
}

    return (
    <div>
<h2>{event.title}</h2>
<p>Date: {event.date}</p>
<p>Time :{event.time}</p>
<p>Location:{event.location}</p>
<p>Description: {event.description}</p>
<Link to={`/edit-event/${eventId}`}><button>Edit</button></Link>
<button onClick={handleDelete}>Delete</button>
<Link to="/"><button>Back to EventList</button></Link>
    </div>
  )
}