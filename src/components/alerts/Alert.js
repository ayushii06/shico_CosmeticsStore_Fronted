import React, { useState } from 'react'
import '../alerts/alert.css'
import cross from '../alerts/cross.svg'


const Alert = ({type}) => {
  const [display,setDisplay]=useState("flex")
  function HandleClick(){
    setDisplay("none")
  }

    const [color,setColor]= useState(type==='failure'?'red':'green')
    // const type = props;
    // const input_type = type.type;
    // if(input_type==='failure'){
    //   setColor('red');
    // }
    // else{
    //   setColor('white')
    // }
    console.log(color)
    return (
      color==='green'?
      <div className='alert-bar success' style={{"display":display}}><div className="alert-text"> Successfuult logged in</div> <img className="image-svg" onClick={HandleClick} src={cross} /></div>
      : <div className='alert-bar failure' style={{"display":display}}><div className="alert-text"> Error logged in</div> <img className="image-svg" onClick={HandleClick} src={cross} /></div>
    )
  }

  export default Alert