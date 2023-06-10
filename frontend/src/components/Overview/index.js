import './index.css';
import LightSwitchButton from './switch.js'; // Replace with the correct path to the LightSwitchButton component file
import React, { useState, useEffect } from 'react';

//import {BrowserRouter as Router, Switch, Route, Routes, Link, Redirect} from 'react-router-dom';
// Fake data
export const rooms = [
    {
        id: 1,
        name: 'Living Room',
        temp: 40,
        humid: 0.23,
        gas: 0.2,
        door: 1,
        light: 0,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 2,
        name: 'Kitchen',
        temp: 40,
        humid: 0.4,
        gas: 0.5,
        door: 0,
        light: 1,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 3,
        name: 'Library',
        temp: 24,
        humid: 0.4,
        gas: 0.8,
        door: 1,
        light: 1,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 4,
        name: 'Bedroom 1',
        temp: 15,
        humid: 0.7,
        gas: 0.3,
        door: 0,
        light: 0,
        time: '21:09 4/25/2022',
        device: 1
    },
    {
        id: 5,
        name: 'Bedroom 2',
        temp: 33,
        humid: 0.3,
        gas: 0.1,
        door: 0,
        light: 0,
        time: '21:09 4/25/2022',
        device: 1
    }
]


function genARoom(roomItem) {
    const switchh = roomItem.light === 1 ? 'ON' : 'OFF';
    const door = roomItem.door === 1 ? 'ON' : 'OFF';
    return (
      <tr>
        <td>{roomItem.id}</td>
        <td>{roomItem.name}</td>
        <td>{roomItem.temp}</td>
        <td>{switchh}</td>
      </tr>
    );
  }
  
  function Overview() {
    const [data, setData] = useState({ sslight: '', sstemp: '', 'ctlight-slash': ''});
  
  // Update the data every 100ms
  useEffect(() => {
    const interval = setInterval(() => {
      fetchData(); // Function to fetch the updated data from the server
    }, 100);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to fetch the updated data from the server
  const fetchData = () => {
    // Make an API request to your server to get the updated data
    fetch('http://localhost:7000/data')
      .then(response => response.json())
      .then(data => {
        setData(data); // Update the state with the received data
      })
      .catch(error => {
        console.log('Error fetching data:', error);
      });
  };
    const light = data.sslight?.value || '';
    const temp = data.sstemp?.value || '';
    const moist = data.ssmoist?.value || '';
  
    return (
      <div>
        <table>
          <tr>
            <th>ID</th>
            <th>Room</th>
            <th>Temp</th>
            <th>Light</th>
            <th>Moisture</th>
            <th>LSwitch</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Room 1</td>
            <td>{temp}</td>
            <td>{light}</td>
            <td>{moist}</td>
            <td><LightSwitchButton /></td>
          </tr>
        </table>
      </div>
      
    );
  }
  
  

export default Overview;
