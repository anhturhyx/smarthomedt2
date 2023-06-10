import Axios from "axios";
import  Cookie  from "js-cookie"; 

const update = ({ userId, name, email, password }) => async (dispatch, getState) => {
  const { userSignin: { userInfo } } = getState();
  dispatch({ type: 'USER_UPDATE_REQUEST', payload: { userId, name, email, password } });
  try {
    const { data } = await Axios.put("/api/users/" + userId,
      { name, email, password }, {
      headers: {
        Authorization: 'Bearer ' + userInfo.token
      }
    });
    dispatch({ type: 'USER_UPDATE_SUCCESS', payload: data });
    Cookie.set('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({ type: 'USER_UPDATE_FAIL', payload: error.message });
  }
}

const signin = (email, password) => async (dispatch) => {
  
  try {
    dispatch({ type: 'USER_SIGNIN_REQUEST', payload: { email, password } });
    const { data } = await Axios.post("/api/users/signin", {email,password});
    dispatch({ type: 'USER_SIGNIN_SUCCESS', payload: data });
    Cookie.set('userInfo',JSON.stringify(data));
  } catch (error) {
    dispatch({ type: 'USER_SIGNIN_FAIL', payload: error.message });
  }
}

const logout = () => (dispatch) => {
    Cookie.remove("userInfo");
    dispatch({ type: 'USER_LOGOUT' })
  }
export { signin, logout, update };