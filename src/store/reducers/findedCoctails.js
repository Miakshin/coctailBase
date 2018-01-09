const defaultState = { loading: false, findedCoctails: [], errors: null };

export default function findedCoctails(state = defaultState, action) {
  action.type

    if (action.type==="GET_COCTAILS_REQUESTED"){
      return { loading: true, findedCoctails : state.findedCoctails };
    }
    else if(action.type==="GET_COCTAILS_OK"){
      return { loading: false, findedCotails: action.coctails, errors: null };
    }
    else if(action.type==="GET_COCTAILS_FAIL"){
      return { loading: false, findedCotails: null, errors: action.errors };
    }
      return state

  }
