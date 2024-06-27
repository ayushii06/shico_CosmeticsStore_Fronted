import React, { useState } from 'react'
import './sellerstyle.css'

function AddProduct() {
  const host = "http://localhost:5050"
  const [credentials , setCredentials] = useState({"name":"","selling_price":"","market_price":"","description":"","image":null,"hoverimage":null,"stock":""})

  const [category, setCategory] = useState('');

  const onChange = (event) => {
    setCategory(event.target.value);
  };

  const handleChange = (e) =>{
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setCredentials({ ...credentials, [name]: files[0] });
    } else {
      setCredentials({ ...credentials, [name]: value });
    }
  }
  async function handleClick(){
    console.log(credentials.description)
    const formData = new FormData();
    formData.append('product_name', credentials.name);
    formData.append('selling_price', credentials.selling_price);
    formData.append('market_price', credentials.market_price);
    formData.append('desc', credentials.description);
    formData.append('imgsrc', credentials.image);
    formData.append('imghoversrc', credentials.hoverimage);
    formData.append('stock', credentials.stock);
    formData.append('category', category);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const response = await fetch(`${host}/api/shico/product/add`,{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2N2QzMjRiMTBlMmM2MGVkNjkxMzgyMyIsImVtYWlsIjoia2FnZ2xlODZAZ21haWwuY29tIiwicm9sZSI6InNlbGxlciIsImlhdCI6MTcxOTQ4MTUzNiwiZXhwIjoxNzE5NTY3OTM2fQ.jPB0T-MshrQdV22IL3fIBQU51N14UvjvhnqJ6GhBN6k"
        },
       
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        body: formData
      })
    
   

    
    const json = await response.json()
    console.log(json)
    
    if(json.success){
      alert('Product Added Successfully')
    }
    else{
      alert('Product Not Added')
    }
  } catch (error) {
    console.log(error) 
   }
  }
  
  return (
    <div>
     

      <form>
      <h1 className='Heading-form'>Add Product</h1>
        <div className="form-group">
        <div className='input-form'>
          <label className="labels" htmlFor="name">Name</label>
          <input onChange={handleChange} type="text" id="" name="name" />
        </div>

      <div className='input-form'>
          <label className="labels"htmlFor="selling_price">Selling Price (Rs.)</label>
          <input onChange={handleChange} type="text" id="price" name="selling_price" />
          </div>


        <div className='input-form'>
          <label className="labels"htmlFor="market_price">Market Price (Rs.)</label>
          <input onChange={handleChange} type="text" id="price" name="market_price" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="description">Description</label>
          <textarea onChange={handleChange} id="description" name="description" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="image">Image</label>
          <input onChange={handleChange} type="file" id="image" name="image" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="hoverimage">Hover Image</label>
          <input onChange={handleChange} type="file" id="hoverimage" name="hoverimage" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="stock">Stock</label>
          <input onChange={handleChange} type="text" id="stock" name="stock" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="category">Category</label>
          <select value={category} onChange={onChange}>
             <option value="">Select Category</option>
             <option value="lips">Lips</option>
             <option value="eyes">Eyes</option>
             <option value="face">Face</option>
             <option value="nails">Nails</option>
             <option value="hair">Hair</option>
             <option value="skin">Skin</option>
             <option value="fragrance">Fragrance</option>
      </select>
        </div>

       

        <div type='submit' className="text-center btns" onClick={handleClick}>Add Product </div>
        </div>
        </form>
    </div>
  )
}

export default AddProduct