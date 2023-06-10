function userSigninReducer(state = {}, action) {
    switch (action.type) {
      case 'USER_SIGNIN_REQUEST':
        return { loading: true };
      case 'USER_SIGNIN_SUCCESS':
        return { loading: false, userInfo: action.payload };
      case 'USER_SIGNIN_FAIL':
        return { loading: false, error: action.payload };
      case 'USER_LOGOUT':
        return {};
      default: return state;
    }
  }
  
  function userUpdateReducer(state = {}, action) {
    switch (action.type) {
      case 'USER_UPDATE_REQUEST':
        return { loading: true };
      case 'USER_UPDATE_SUCCESS':
        return { loading: false, userInfo: action.payload };
      case 'USER_UPDATE_FAIL':
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  
  export {
    userSigninReducer, userUpdateReducer
  }