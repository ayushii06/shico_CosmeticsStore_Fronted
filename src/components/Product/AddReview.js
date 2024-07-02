import React  from 'react'
import './Review.css'
import star from '../assets/svg/star.svg'
import starFilled from '../assets/svg/starfill.svg'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddReview() {
    const navigate = useNavigate()
    const prodId = window.location.pathname.split('/')[2]
   
    const host = "http://localhost:5050"

    const [review,setReview]=useState('')
    const [rating,setRating]=useState(0)

   const onChange = (e) =>{
        setReview(e.target.value)
   }

   const onStarClick = (index) => {
    setRating(index + 1);
}
    const addReview = async(e) =>{
        e.preventDefault()
        const response = await fetch(`${host}/api/shico/rating/createRatingAndReview`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + sessionStorage.getItem('token')
            },
            body:JSON.stringify({
                productId:prodId,
                rating:rating,
                review:review
            })
        })

        const json = await response.json()
       

        if(json.success){
            alert(json.message)
            navigate(`/productdesc/${prodId}`)
        }
        else{
            alert(json.message)
        }
        
    }

  return (
    <>
    <form className="center" onSubmit={addReview}>
    <div className='heading-new'>AddReview</div>
    <hr/>
        <div className="flex-column"  style={{"gap":"16px","margin":"23px 12px 36px","alignItems":"center"}}>
            <label for="exampleFormControlInput1" className='review-label'>Rate this product</label>
            <div className="star-label">
            {[...Array(5)].map((_, index) => (
                            <img
                                key={index}
                                src={index < rating ? starFilled : star}
                                alt={`${index + 1} stars`}
                                onClick={() => onStarClick(index)}
                                className="star"
                                style={{ cursor: 'pointer' }}
                            />
                        ))}
        
            </div>
        </div>
        <hr/>
        <div className="flex-column" style={{"gap":"16px","margin":"22px 12px 36px","alignItems":"center"}}>
            <label for="exampleFormControlInput1" className='review-label'>Review this product</label>
            <textarea onChange={onChange}  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Description" />
        </div>
        <button type="submit" className="btn addcart">Submit</button>
    </form>
    </>
  )
}

export default AddReview