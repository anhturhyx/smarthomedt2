
function roomsReducer(state = {rooms:[]}, action){
    switch (action.type) {
        case 'ROOM_REQUEST':
            return {loading: true};
        case 'ROOM_SUCCESS':
            return {loading: false, rooms: action.payload};
        case 'ROOM_FAIL':
            return {loading: false, error: action.payload};
        default:
            return state;            
    }
}

export {roomsReducer}