import React from 'react'
import './sellerstyle.css'

function AddProduct() {
  function handleClick(){

  }
  
  return (
    <div>
     

      <form>
      <h1 className='Heading-form'>Add Product</h1>
        <div className="form-group">
        <div className='input-form'>
          <label className="labels"htmlFor="name">Name</label>
          <input type="text" id="name" name="name" />
        </div>

      <div className='input-form'>
          <label className="labels"htmlFor="price">Selling Price</label>
          <input type="text" id="price" name="price" />
          </div>


        <div className='input-form'>
          <label className="labels"htmlFor="price">Market Price</label>
          <input type="text" id="price" name="price" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="description">Description</label>
          <textarea id="description" name="description" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="image">Image</label>
          <input type="file" id="image" name="image" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="hoverimage">Hover Image</label>
          <input type="file" id="hoverimage" name="hoverimage" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="stock">Stock</label>
          <input type="text" id="stock" name="stock" />
        </div>

        <div className='input-form'>
          <label className="labels"htmlFor="category">Category</label>
          <input type="text" id="category" name="category" />
        </div>

        <div type='submit' className="text-center btns" onClick={handleClick}>Add Product </div>
        </div>
        </form>
    </div>
  )
}

export default AddProduct