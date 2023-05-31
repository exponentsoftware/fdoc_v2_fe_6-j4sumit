import "./App.css";
import React from "react";
import EventList from "./Components/EventList";
import EventDetails from "./Components/EventDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/event-list" element={<EventList />}></Route>
        <Route path="/event-details/:eventId" element={<EventDetails />}></Route>
        </Routes>
    </Router>
    </div>
  );
}

export default App;
