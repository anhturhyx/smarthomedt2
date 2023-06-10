import './index.css';
import React, { useState, useEffect } from 'react';
import {rooms} from '../Overview/index'

// const rooms = [
//     {
//         id: 1,
//         name: 'Living Room',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 2,
//         name: 'Kitchen',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 3,
//         name: 'Library',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 4,
//         name: 'Bedroom 1',
//         img: livingroom,
//         temp: 40,
//         humid: 0.3
//     },
//     {
//         id: 5,
//         name: 'Bedroom 2',
//         img: livingroom,
//         temp: 222,
//         humid: 0.6
//     }
// ]
function genARoom(roomItem) {
    const temp = roomItem.sstemp?.value || '';
    const humid = roomItem.sshumid?.value || '';
  
    return (
      <tr>
        <td>{roomItem.id}</td>
        <td>{roomItem.name}</td>
        <td>{temp}<sup>o</sup>C</td>
        <td>{humid}%</td>
        <td>{roomItem.time}</td>
        <td>{roomItem.device}</td>
      </tr>
    );
  }
  
  function Temp_Humid() {
    const [data, setData] = useState({
      ctlight: null,
      ssmoist: null,
      sstemp: null,
    });
  
    useEffect(() => {
      const fetchData = () => {
        fetch('http://localhost:7000/data')
          .then(response => response.json())
          .then(result => setData(result))
          .catch(error => console.log(error));
      };
  
      // Fetch data initially
      fetchData();
  
      // Fetch data every 100ms
      const interval = setInterval(fetchData, 100);
  
      // Clean up interval on component unmount
      return () => clearInterval(interval);
    }, []);
  
    const rooms = [
      {
        id: 1,
        name: 'Room 1',
        time: data.sstemp?.timestamp || '',
        device: '',
        sstemp: data.sstemp,
        ssmoist: data.ssmoist,
      },
    ];
  
    const genARoom = room => {
      // Implement the logic to generate a row for each room
      return (
        <tr key={room.id}>
          <td>{room.id}</td>
          <td>{room.name}</td>
          <td>{room.sstemp?.value || ''}</td>
          <td>{room.ssmoist?.value || ''}%</td>
          <td>{room.time}</td>
          <td>{room.device}</td>
        </tr>
      );
    };
  
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Room</th>
              <th>Temp</th>
              <th>Humid</th>
              <th>Last access</th>
              <th>Device</th>
            </tr>
          </thead>
          <tbody>
            {rooms.map(room => {
              return genARoom(room);
            })}
          </tbody>
        </table>
      </div>
    );
  }
  
  export default Temp_Humid;
  