import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyTv } from '../store/actions/tv.actions'
import tv from '../images/tv.png'

const Tv = () => {
   const tvs = useSelector(state => state.tvReducer.tv)
   const dispatch = useDispatch()

   const [input, setInput] = useState(1)

   return (
      <div className="container">
         <img src={tv} alt="tv" />
         <p>Disponibilité: <span id="count"> {tvs} </span></p>
         <div className="btnContainer">
            <button onClick={() => dispatch(buyTv(input))}>Acheter</button>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
         </div>
      </div>
   )
}

export default Tv