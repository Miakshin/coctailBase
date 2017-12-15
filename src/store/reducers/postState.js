const defaultState = { passing: false, errors: null };

export default function postState(state = defaultState, action) {
  action.type

    if (action.type==="ADD_COCTAIL_REQUESTED"){
      return { passing: true };
    }
    else if(action.type==="ADD_COCTAIL_OK"){
      return { passing: false,  errors: null };
    }
    else if(action.type==="ADD_COCTAIL_FAIL"){
      return { passing: false, errors: action.errors };
    }
      return state
    }
