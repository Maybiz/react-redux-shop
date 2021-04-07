import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPhone } from '../store/actions/phone.actions'
import phone from '../images/phone.png'

const Phone = () => {
   const phones = useSelector(state => state.phoneReducer.phones)
   const dispatch = useDispatch()

   const [input, setInput] = useState(1)

   return (
      <div className="container">
         <img src={phone} alt="phone" />
         <p>Disponibilité: <span id="count"> { phones }</span></p>
         <div className="btnContainer">
            <button onClick={() => dispatch(buyPhone(input))}>Acheter</button>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
         </div>
      </div>
   )
}

export default Phone