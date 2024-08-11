"use client";
import "./Dashboard.css";
import React, { useState } from "react";

const Dashboard = () => {
  const [events, setEvents] = useState([]);

  // useEffect(() => {
  //   // Fetch events from API
  //   axios.get('http://localhost:5000/api/events')
  //     .then(response => {
  //       setEvents(response.data);
  //     })
  //     .catch(error => {
  //       console.error('There was an error fetching the events!', error);
  //     });
  // }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Scan-track</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
          <li>
            <a href="#">Settings</a>
          </li>
          <li style={{ marginTop: "50px" }}>
            <a href="#">Logout</a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <div className="column-1">
          {/* <h2>Events </h2> */}
          <h2>Upcoming Events</h2>
          <ul>
            <li className="list">Event 1</li>
            <li className="list">Event 2</li>
            <li className="list">Event 3</li>
          </ul>
        </div>
        <div className="column-2">
          <h2>Create Events </h2>
          <form className="form">
            <div className="One">
              <p>Event Name </p>
              <input className="input " type="text" placeholder="Event Name" />
            </div>
            <div className="One">
              <p>Name of Organizer/Organization </p>
              <input
                className="input "
                type="text"
                placeholder="Organizer Name "
              />
            </div>
            <div className="One">
              <p>Venue </p>
              <input className="input " type="text" placeholder="Location" />
            </div>
            <div className="One">
              <p>Date </p>
              <input className="input " type="text" placeholder="Date" />
            </div>
            <div className="One">
              <p>Duration </p>
              <input className="input " type="text" placeholder="Duration" />
            </div>
            <div className="One">
              <p>Description </p>
              <input className="input " type="text" placeholder="Description" />
            </div>

            <button className="btn " type="submit">
              Create Event
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
