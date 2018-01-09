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
          type: "LOAD_COCTAIL_REQUESTED"
      });
      axios.get(url + "/" + id)
      .then(result => {
          dispatch({
              type: "LOAD_COCTAIL_OK",
              coctail: result.data
          })
      })
      .catch(result => {
          dispatch({
              type: "LOAD_COCTAIL_FAIL",
              errors: result.statusText
          })
      })
  }
}

export function getCoctailByName(name) {
  if(name !==""){
  return dispatch =>{
    dispatch({
        type: 'GET_COCTAILS_REQUESTED'
    });

    axios.get(url + "/find/" + name)
    .then(result => {
        dispatch({
            type: 'GET_COCTAILS_OK',
            coctails: result.data
        })
    })
    .catch(result => {
        dispatch({
            type: 'GET_COCTAILS_FAIL',
            errors: result.statusText
        })
    })
  }
}else{
  return dispatch =>{
    dispatch({
        type: 'GET_COCTAILS_OK',
        coctails : []
    });
  }
}
}
