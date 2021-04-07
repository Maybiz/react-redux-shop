import phoneReducer from './reducers/phone.reducers'
import tvReducer from './reducers/tv.reducers'
import { createStore, combineReducers } from 'redux'

const appReducers = combineReducers({phoneReducer, tvReducer})

const store = createStore(appReducers)

export default store