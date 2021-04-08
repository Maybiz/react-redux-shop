import phoneReducer from './reducers/phone.reducers'
import tvReducer from './reducers/tv.reducers'
import commentsReducer from './reducers/comments.reducers'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction'
import thunk from 'redux-thunk'

const appReducers = combineReducers({phoneReducer, tvReducer, commentsReducer})

const store = createStore(appReducers, composeWithDevTools(applyMiddleware(thunk)))

export default store