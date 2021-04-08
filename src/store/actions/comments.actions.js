import axios from 'axios'

export const LOAD_COMMENTS_SUCCESS = 'load comments succes'
export const LOAD_COMMENTS_ERROR = 'load comments error'

export const loadCommentsSuccess = comments => {
   return {
      type: LOAD_COMMENTS_SUCCESS,
      payload: comments
   }
}

export const loadCommentsError = errormsg => {
   return {
      type: LOAD_COMMENTS_ERROR,
      payload: errormsg
   }
}

export const apiCall = () => {
   return dispatch => {
      axios.get('https://jsonplaceholder.typicode.com/comments')
      .then(resp => dispatch(loadCommentsSuccess(resp.data)))
      .catch(err => loadCommentsError(err.message))
   }
}