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


    // case ADD_COCTAILS_RESPONSED:
    //     return { loading: false, coctails: null, errors: action.errors };
    //
    // case ADD_COCTAILS_OK:
    //       return { loading: false, coctails: action.coctails, errors: null };
    //
    // case ADD_COCTAILS_FAIL:
    //       return { loading: false, coctails: null, errors: action.errors };

  }


// old ver

// export default function coctailBase(state = initialState, action){
//    if(action.type === "ADD_COCTAIL"){
//      return[ ...state, action.payload];
//
//
//    }else if(action.type === "DELETE_COCTAIL"){
//      return
//        [...state,
//        action.payload
//      ];
//    }else if(action.type === "SERCH_COCTAIL"){
//      return
//        [...state,
//        action.payload
//      ];
//    }
//
//    return state;
//  }
