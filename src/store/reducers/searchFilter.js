const initialState = '';

export default function searchFilter(state = initialState, action){
   if(action.type === "FIND_COCTAIL"){
     return action.payload;
   }
    return state;
  }
