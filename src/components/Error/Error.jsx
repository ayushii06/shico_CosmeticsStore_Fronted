import React from 'react'
import errorimg from '../assets/Error/error.jpg'

function Error() {
  const error = window.location.pathname.split('/')[2]
  const error_message = error.split('%20').join(' ')
  console.log(error_message)
  return (
    <div style={{"textAlign":"center"}}>
        <h1>Oops!</h1>
        <img src={errorimg} alt="error" style={{"height":"61vh"}} />
        <h1 style={{"fontWeight":"700","padding" :"33px","color":"#de648a","fontSize":"35px"}}>{error_message}</h1>
    </div>
  )
}

export default Error