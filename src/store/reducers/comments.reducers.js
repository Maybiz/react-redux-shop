import { LOAD_COMMENTS, LOAD_COMMENTS_SUCCESS, LOAD_COMMENTS_ERROR } from '../actions/comments.actions'

const initialState = {
   loading : false,
   comments: [],
   error: null
}

const commentsReducer = (state = initialState, action) => {
   switch (action.type) {
      case LOAD_COMMENTS:
         return {
            ...state,
            loading: true
         }
      case LOAD_COMMENTS_SUCCESS: 
         return {
            ...state,
            loaded: false,
            comments: action.payload
         }   
      case LOAD_COMMENTS_ERROR:
         return {
            ...state,
            loaded: false,
            comments: [],
            error: action.payload
         }
      default: return state
   }
}

export default commentsReducer