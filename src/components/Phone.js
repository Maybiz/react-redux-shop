import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPhone } from '../store/actions/phone.actions'
import phone from '../images/phone.png'

const Phone = () => {

   const phones = useSelector(state => state.phones)
   const dispatch = useDispatch()

   return (
      <div className="container">
         <img src={phone} alt="phone" />
         <p>Disponibilité: <span id="count"> { phones } </span></p>
         <div className="btnContainer">
            <button onClick={() => dispatch(buyPhone())}>Acheter</button>
         </div>
      </div>
   )
}

export default Phone