const initState = {
    equipments: null,
    issued: null,
    
  };
  
  const equipmentReducer = (state = initState, action) => {
    switch (action.type) {
        case "GET_EQUIPMENTS":
        return {
          ...state,
          equipments : action.payload,
        };
        case "ISSUED_EQUIPMENTS":
        return {
            ...state,
            issued : action.payload,
        };
        
        default:
            return state;
    }
  };
  
  export default equipmentReducer;
  