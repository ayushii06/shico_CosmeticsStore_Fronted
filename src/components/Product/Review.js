import React from 'react'
import './Review.css'
import star from '../assets/svg/star.svg'

function Review() {
  return (
    <div className='rating-box'>
        <div className="flex-start" style={{"gap":"23px"}}>
            <div className="flex rate" style={{"gap":"0px"}}>
            <div className="">4.6</div>
            <img className="" src={`data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMyIgaGVpZ2h0PSIxMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTYuNSA5LjQzOWwtMy42NzQgMi4yMy45NC00LjI2LTMuMjEtMi44ODMgNC4yNTQtLjQwNEw2LjUuMTEybDEuNjkgNC4wMSA0LjI1NC40MDQtMy4yMSAyLjg4Mi45NCA0LjI2eiIvPjwvc3ZnPg==`} />
            </div>
            <div className="">Fabulous quality very soft Material , worth it, buy one size small</div>
        </div>
        <p className="bold" style={{"color":"#989898"}}>Ayushi Pal</p>
    </div>
  )
}

export default Review