import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function EditEvent({events, updateEvent}) {

const {eventId} = useParams();
const event= events.find((event)=> event.id === eventId);
const [title, setTitle] =useState(event.title);
const [date, setDate] =useState(event.date);
const [time, setTime] =useState(event.time);
const [location, setLocation] =useState(event.location);
const [description, setDescription] =useState(event.description);

// const history = useHistory();
const navigate=useNavigate();
    
  const handleSubmit =((e)=>{
    e.preventDefault();
    const updatedEvent={
        id:eventId,
        title,
        date,
        time,
        location,
        description,
    };
    updateEvent(updatedEvent);
    navigate(`/`);
  } )

    return (
    <div>
        <h2> Edit Event</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title</label> <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Date</label> <input type='date' value={date} onChange={(e)=>setDate(e.target.value)} required />
            </div>
            <div>
                <label>Time</label> <input type='time' value={time} onChange={(e)=>setTime(e.target.value)} required />
            </div>
            <div>
                <label>Location</label> <input type='text' value={location} onChange={(e)=>setLocation(e.target.value)} required />
            </div>
            <div>
                <label>Description</label> <input type='text' value={description} onChange={(e)=>setDescription(e.target.value)} required />
            </div>
            <button type='submit'>Update Event</button>
        </form>
    </div>
  )
}
