import { LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from '../actions/comments.actions'

const initialState = {
   loaded : false,
   comments: [],
   error: ''
}

const commentsReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_COMMENTS_SUCCESS: 
         return {
            ...state,
            loaded: true,
            comments: action.payload
         }   
      case LOAD_COMMENTS_ERROR:
         return {
            ...state,
            loaded: true,
            error: action.payload
         }
      default: return state
   }
}

export default commentsReducer