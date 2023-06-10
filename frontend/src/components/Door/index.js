import livingroom from './livingroom.jpg';
import './index.css';
import {roomAction} from '../../actions/roomsActions';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

function genARoom(roomItem) {
    const door = roomItem.door === 1? 'ON': 'OFF'
    return(
        <tr>
            <td>{roomItem.id}</td>
            <td>{roomItem.name}</td>
            <td>{door}</td>
            <td>{roomItem.time}</td>
            <td>{roomItem.device}</td>
        </tr>
    );
}


function Door() {
    const roomState= useSelector(state => state.rooms)
    const {loading, rooms, error} = roomState
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(roomAction());
        return () => {      
        }
    },[]);

    return (
        loading ? <div>Loading......</div>:
        error ? <div>{error.message}</div>:
        <div>
            <table>
                <tr>
                    <th>ID</th>
                    <th>Room</th>
                    <th>Door</th>
                    <th>Last access</th>
                    <th>Device</th>
                </tr>
                {rooms.map(room => {
                    return genARoom(room);
                })}
            </table>
        </div>
    )
}
export default Door;