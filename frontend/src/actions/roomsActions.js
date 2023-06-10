import axios from "axios";

const roomAction = () => async (dispatch) => {
    try{
        dispatch({type: 'ROOM_REQUEST'});
        const {data} = await axios.get("/api/rooms");
        dispatch({type: 'ROOM_SUCCESS', payload: data});
    }
    catch(error){
        dispatch({type: 'ROOM_FAIL', payload: error.message});
    }
}

export {roomAction};