import React from 'react'
import error from '../assets/Error/error.jpg'

function Error() {
    const error_message = window.location.pathname.split('/')[2]
  return (
    <div>
        <h1>Oops!</h1>
        <img src={error} alt="error" />
        <h1>{error_message}</h1>
    </div>
  )
}

export default Error