const defaultState = { loading: false, coctails: [], errors: null };

export default function coctailBase(state = defaultState, action) {
  action.type

    if (action.type==="LOAD_COCTAILS_REQUESTED"){
      return { loading: true };
    }
    else if(action.type==="LOAD_COCTAILS_OK"){
      return { loading: false, coctails: action.coctails, errors: null };
    }
    else if(action.type==="LOAD_COCTAILS_FAIL"){
      return { loading: false, coctails: null, errors: action.errors };
    }
      return state

  }
