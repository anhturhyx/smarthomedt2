import './index.css';
import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import livingroom from './livingroom.jpg';
import {BrowserRouter as Router, Switch, Route, Routes, Link, Redirect} from 'react-router-dom';
import { roomAction } from '../../actions/roomsActions';

function genRoom(roomItem) {
    return(
        <div className="room">
            <Link path= "./room">
                <img src= {livingroom} alt="room" />
                <h4>{roomItem.name}</h4>
            </Link>     
        </div>
    );
}


function Rooms() {
    const roomState= useSelector(state => state.rooms)
    const {loading, rooms, error} = roomState
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(roomAction());
        return () => {      
        }
    },[]);

    return (
        loading ? <div>Loading........</div>:
        error ? <div>{error.message}</div>:
        <div className="roomContainer">
              {rooms.map( room => {
                  return genRoom(room);
              })}

        </div>
    )
}


export default Rooms;