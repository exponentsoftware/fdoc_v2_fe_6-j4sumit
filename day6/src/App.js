import "./App.css";
import React from "react";
import EventList from "./Components/EventList";
import EventDetails from "./Components/EventDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
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
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/event-list" element={<EventList events={events} />}></Route>
        <Route path="/event-details/:eventId" element={<EventDetails events={events}/>}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
