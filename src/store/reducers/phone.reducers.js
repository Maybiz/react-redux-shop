import { BUY_PHONE } from '../actions/phone.actions'

const initialStatePhone = {
   phones: 5
}

const phoneReducer = (state = initialStatePhone, action) => {
   switch (action.type) {
      case BUY_PHONE:
         return {
            ...state,
            phones: state.phones - action.payload
         }
   
      default: return state
   }
}

export default phoneReducer