import phoneReducer from './reducers/phone.reducers'
import tvReducer from './reducers/tv.reducers'
import commentsReducer from './reducers/comments.reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const appReducers = combineReducers({phoneReducer, tvReducer, commentsReducer})

const store = createStore(appReducers, applyMiddleware(thunk))

export default store