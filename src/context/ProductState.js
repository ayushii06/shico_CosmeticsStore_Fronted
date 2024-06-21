import React from "react";
import ProductContext from "./ProductContext";
import { useState } from "react";

const ProductState = (props) => {
  const host = "http://localhost:5000"
  const productInitial = []
  const [product, setProduct] = useState(productInitial)

  //GET ALL NOTES
  const getProduct = async () => {
    //API CALL
    const response = await fetch(`${host}/api/shico/product/getproduct`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json()
    console.log(json)
    setProduct(json)
  }



  //ADD A NOTE

//   const addNote = async (title, description, tag) => {
//     //API CALL
//     const response = await fetch(`${host}/api/notes/addnote`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         'auth-token': localStorage.getItem('token')

//       },

//       body: JSON.stringify({title, description, tag}),
//     });

//     const note = await response.json()
//     setNotes(notes.concat(note))
//   }

//   //UPDATE A NOTE
//   const editNote = async (id, title, description, tag) => {
//     //fetch api

//    await fetch(`${host}/api/notes/updatenote/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//         'auth-token': localStorage.getItem('token')

//       },

//       body: JSON.stringify({title, description, tag}),
//     });



//     let newNotes= JSON.parse(JSON.stringify(notes))
//     //logic to edit in client
//     for (let i = 0; i < newNotes.length; i++) {
//       const element = newNotes[i];
//       if (element._id === id) {
//         newNotes[i].title = title;
//         newNotes[i].description = description;
//         newNotes[i].tag = tag;
//         break;
//       }
      
      
//     }
//     setNotes(newNotes);
//   }

//   //DELETE A NOTE
//   const deleteNote = async(id) => {
//     const response = await fetch(`${host}/api/notes/deletenode/${id}`, {
//       method: 'DELETE',
//       headers: {
//         "Content-Type": "application/json",
//         "auth-token": localStorage.getItem('token')

//       },
//     });
//     response.json();
   
//     const newNotes = notes.filter((note) => {
//       return note._id !== id
//     })
//     setNotes(newNotes)
//   }



  return (

    <ProductContext.Provider value={{product,getProduct}}>
      {props.children}
    </ProductContext.Provider>

  )
}


export default ProductState;