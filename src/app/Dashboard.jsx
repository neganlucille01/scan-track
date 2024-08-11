
import './Dashboard.css'
import React, { useState } from 'react'


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

    <div class="dashboard-container">
      {/* Sidebar */}
      <div class="sidebar">
        <h2>Scan-track</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li style={{ marginTop: '50px' }}><a href="#">Logout</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <div class="main-content">
        <div class="column-1">
          {/* <h2>Events </h2> */}
          <h2>
            
            Upcoming Events
          </h2>
          <ul>
            <li class="list">Event 1</li>
            <li class="list">Event 2</li>
            <li class="list">Event 3</li>
          </ul>

        </div>
        <div class="column-2">
          <h2>Create Events </h2>
          <form class="form">

            <div class="One"><p>Event Name                     </p><input class="input " type="text" placeholder="Event Name" /></div>
            <div class="One"><p>Name of Organizer/Organization </p><input class="input " type="text" placeholder="Organizer Name " /></div>
            <div class="One"><p>Venue                          </p><input class="input " type="text" placeholder="Location" /></div>
            <div class="One"><p>Date                           </p><input class="input " type="text" placeholder="Date" /></div>
            <div class="One"><p>Duration                       </p><input class="input " type="text" placeholder="Duration" /></div>
            <div class="One"><p>Description                    </p><input class="input " type="text" placeholder="Description" /></div>





            <button class="btn " type="submit">Create Event</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Dashboard