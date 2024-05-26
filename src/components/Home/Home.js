import React from 'react'
import img from '../assets/new-arrivals-img/1.webp'
import '../Home/Home.css'

import './general.css'
import left from '../assets/svg/left.svg'
import right from '../assets/svg/right.svg'
import lip from '../assets/new-arrivals-img/lips.webp'
import eyes from '../assets/new-arrivals-img/eyes.webp'
import face from '../assets/new-arrivals-img/face.webp'
import skin from '../assets/new-arrivals-img/skin.webp'
import hair from '../assets/new-arrivals-img/hair.webp'
import nails from '../assets/new-arrivals-img/nails.webp'
import Slider from './Slider'
// import bg from '../assets/image/bg.jpg'
// import aboutbg from '../assets/slide-img/pexels-ron-lach-8128694.jpg'
import ProductItem from '../Product/ProductItem'
import slide_1 from '../assets/Home-slide/slide-1.webp'
import slide_2 from '../assets/Home-slide/slide-2.avif'
import slide_3 from '../assets/Home-slide/slide-3.webp'
import slide_4 from '../assets/Home-slide/slide-4.webp'
import g1 from '../assets/gallery/g1.jpg'
import g2 from '../assets/gallery/g2.jpg'
import g3 from '../assets/gallery/g3.jpg'
import g4 from '../assets/gallery/g4.jpg'
import g5 from '../assets/gallery/g5.jpg'
import g6 from '../assets/gallery/g6.jpg'
import { Link } from 'react-router-dom'


function Home() {
  return (
   <>
   
     <div className=" position sp-even m-12 p-12">
        <Link className="category" to='/lipS'>
            <img className="categoryimg" src={lip} />
            <p className="">LIPS</p>
        </Link>
        <Link className="category" to ='/face'>
            <img className="categoryimg" src={face} />
            <p className="">FACE</p>
        </Link>
        <Link className="category" to ='/eyes'>
            <img className="categoryimg" src={eyes} />
            <p className="">EYES</p>
        </Link>
        <Link className="category" to ='/nails'>
            <img className="categoryimg" src={nails} />
            <p className="">NAILS</p>
        </Link>
        <Link className="category" to ='/hair'>
            <img className="categoryimg" src={hair} />
            <p className="">HAIR</p>
        </Link>
        <Link className="category" to ='/skin'>
            <img className="categoryimg" src={skin} />
            <p className="">SKIN</p>
        </Link>
        <Link className="category" to ='/fragrance'>
            <img className="categoryimg" src={img} />
            <p className="">FRAGRANCE</p>
        </Link>
      
     </div>
     <div className="slider flex-notwrap">
        <img className="image-svg" src={left} />
        <div className="slide flex-notwrap ">
            <img className="slide-img" src={slide_1} />
            <img className="slide-img" src={slide_2} />
            <img className="slide-img" src={slide_3} />
            <img className="slide-img" src={slide_4} />
            </div>
        <img className="image-svg" src={right} />
     </div>
     <div className="banner">
            <p className="bold">FREE SHIPPING on purchase above Rs. 499
</p>
        </div>
      <div div className="slider ">
        <Slider header='New Arrivals'/>
      </div>
      <div div className="slider ">
        <Slider header='Best Sellers'/>
      </div>
     
      <div className="banner">
            <p className="bold">ULTIMATE DEFINITION FOR EVERY YOU</p>
        </div>
        <div className="product-gallery p-26 flex sp-even">
            <div className="gallery-content">
                <img className="gallery-img" src={g1} />
                <p className="subheading">MAKEUP</p>
            </div>
            <div className="gallery-content">
                <img className="gallery-img" src={g2} />
                <p className="subheading">COMBOS</p>
            </div>
            <div className="gallery-content">
                <img className="gallery-img" src={g3} />
                <p className="subheading">SKINCARE</p>
            </div>
            <div className="gallery-content">
                <img className="gallery-img" src={g4} />
                <p className="subheading">BY SHICO</p>
            </div>
            <div className="gallery-content">
                <img className="gallery-img" src= {g5}/>
                <p className="subheading">LIPKITS</p>
            </div>
            <div className="gallery-content">
                <img className="gallery-img" src= {g6}/>
                <p className="subheading">NEW ARRIVALS</p>
            </div>
        </div>
    
     
   
   </>
  )
}

export default Home