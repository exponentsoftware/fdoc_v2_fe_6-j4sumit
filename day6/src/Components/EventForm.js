import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function EventForm({addEvent}) {

const [title, setTitle] =useState("");
const [date, setDate] =useState("");
const [time, setTime] =useState("");
const [location, setLocation] =useState("");
const [description, setDescription] =useState("");

const navigate =useNavigate()

const handleSubmit =((e)=> {
  e.preventDefault();
const newEvent = {
    id: Date.now().toString(),
    title,
    date,
    time,
    location,
    description,
};
addEvent(newEvent);
setTitle("");
setDate("");
setTime("");
setLocation("");
setDescription("");
navigate("/")
})


return (
<form onSubmit={handleSubmit}>   
        <div><label>Title</label> <input type='text' value={title} onChange={(e)=> setTitle(e.target.value)} required /></div>
        <div><label>Date:</label><input type='date' value={date} onChange={(e)=> setDate(e.target.value)} required /></div>
        <div><label>Time:</label><input type='time' value={time} onChange={(e)=> setTime(e.target.value)} required /></div>
        <div><label>Location</label><input type='text' value={location} onChange={(e)=> setLocation(e.target.value)} required /></div>
        <div><label>Description</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} required/></div>
    <button type='submit'>Add-Event-Data</button>
</form>
  )
}
