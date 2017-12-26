import axios from 'axios';

const url = "http://localhost:3001/coctails"

export function loadCoctails() {
    return dispatch => {

        dispatch({
            type: 'LOAD_COCTAILS_REQUESTED'
        });

        axios.get(url)
        .then(result => {
            dispatch({
                type: 'LOAD_COCTAILS_OK',
                coctails: result.data
            })
        })
        .catch(result => {
            dispatch({
                type: 'LOAD_COCTAILS_FAIL',
                errors: result.statusText
            })
        })
    }
}

export function onFindCoctail(value){
    return dispatch =>{
        dispatch({
          type: 'FIND_COCTAIL', payload: value
        })
    };
}

export function addCoctails(coctail) {
    return dispatch => {

        dispatch({
            type: 'ADD_COCTAIL_REQUESTED'
        });

        axios({
          method: 'post',
          url: url,
          data: coctail
        })
        .then(result => {
            dispatch({
                type: 'ADD_COCTAIL_OK'
            })
        })
        .catch(result => {
            dispatch({
                type: 'ADD_COCTAIL_FAIL',
                errors: result.statusText
            })
        })
        .catch(result => {
            dispatch({
                type: 'LOAD_COCTAIL_FAIL',
                errors: result.statusText
            })
        })
    }
}

export function loadCoctail(id){
  return dispatch => {
    
      dispatch({
          type: 'LOAD_COCTAIL_REQUESTED'
      });

      axios.get(url + "/" + id)
      .then(result => {

          dispatch({
              type: 'LOAD_COCTAIL_OK',
              coctail: result.data
          })
      })
      .catch(result => {
          dispatch({
              type: 'LOAD_COCTAIL_FAIL',
              errors: result.statusText
          })
      })
  }
}
