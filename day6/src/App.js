import "./App.css";
import React, { useState } from "react";
import EventList from "./Components/EventList";
import EventDetails from "./Components/EventDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EventForm from "./Components/EventForm";

function App() {
  // const events = [
  //   {
  //     id: "1",
  //     title: "Event 1",
  //     date: "2023-06-01",
  //     time: "10:00 AM",
  //     location: "Location 1",
  //     description: "Description for Event 1",
  //   },
  //   {
  //     id: "2",
  //     title: "Event 2",
  //     date: "2023-06-02",
  //     time: "11:00 AM",
  //     location: "Location 2",
  //     description: "Description for Event 2",
  //   },
  // ];

    const [events, setEvents] = useState([]);
  
    const addEvent = (newEvent) => {
        setEvents((prevEvents) => [...prevEvents, newEvent]);
    };
    return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<EventList events={events} />}/>
        <Route path="/event-details/:eventId" element={<EventDetails events={events}/>}/>
        <Route path="/event-create" element={<EventForm addEvent={addEvent}/>}/>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
