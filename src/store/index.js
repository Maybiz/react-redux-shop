import phoneReducer from './reducers/phone.reducers'
import { createStore } from 'redux'

const store = createStore(phoneReducer)

export default store