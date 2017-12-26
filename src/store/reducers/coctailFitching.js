const defaultState = { loading: false, coctail: [], errors: null };

export default function coctailFitching(state = defaultState, action) {
  action.type

    if (action.type==="LOAD_COCTAIL_REQUESTED"){
      return { loading: true };
    }
    else if(action.type==="LOAD_COCTAIL_OK"){
      return { loading: false, coctail: action.coctail, errors: null };
    }
    else if(action.type==="LOAD_COCTAIL_FAIL"){
      return { loading: false, coctails: null, errors: action.errors };
    }
      return state

  }
