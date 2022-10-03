const initState = {
    issued: null,    
  };
  
  const studentReducer = (state = initState, action) => {
    switch (action.type) {
        case "STUDENT_EQUIPMENTS":
        return {
          ...state,
          issued : action.payload,
        };
        
        
        default:
            return state;
    }
  };
  
  export default studentReducer;
  