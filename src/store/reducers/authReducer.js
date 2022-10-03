const initState = {
    authError: null,
    user: null,
    token: null,
    signout_error : null,
  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "SIGNIN":
        return {
          ...state,
          user : action.payload.user,
          token : action.payload.token
        };
        case "SIGNIN_ERROR":
        return {
            ...state,
            authError : action.payload
        };
        case "SIGNOUT_ERROR":
        return {
            ...state,
            signout_error : action.payload
        };
      
  
      default:
        return state;
    }
  };
  
  export default authReducer;
  