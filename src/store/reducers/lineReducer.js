const initialState = 2;

export default function lineReducer(state = initialState, action){
   if(action.type === "ADD_LINE"){
     return state += 1;
   }else if(action.type === "REMOVE_LINE"){
     return state-= 1;
   }else if(action.type === "RESET_LINE_STATE"){
     return state = 2;
   }
    return state;
  }
