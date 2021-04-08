import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { apiCall } from '../store/actions/comments.actions'

const Comments = () => {

   const state = useSelector(state => state.commentsReducer)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(apiCall())
   }, [])

   const displayApiData = state.loaded ? (
      <p>Loading ...</p>
   ) : state.error ? (
      <p>{ state.error }</p>
   ) : (
      state.comments.map(item => {
         return (
            <div key={item.id} className="comments">
               <p>{item.body}</p>
            </div>
         )
      })
   )

   return (
      <>
         <h2>Commentaires:</h2>
         <hr />
         { displayApiData }
      </>
   )
}

export default Comments
