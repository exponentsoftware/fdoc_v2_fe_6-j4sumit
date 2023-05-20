import './App.css';
import EventList from './components/EventList';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import EventDetails from './components/EventDetails';
import EventForm from './components/EventForm';


function App() {
  return (
    <div>      
      <h1>Heading </h1>
    <EventList />
</div>
   
//  <Router>
//       <Routes>
//         <Route exact path="/" element= {EventList} />
//         <Route path="/event/:eventId" element={EventDetails} />
//         <Route path="/create" element={EventForm} />
//       </Routes>
// </Router>    
  );
}

export default App;

