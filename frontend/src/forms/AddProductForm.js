import React, {useState} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const AddProduct = () => {
  window.scrollTo(0, 0);
  const [product, setProduct] = useState({
      name: "",
      description: "",
      image_url: "",
      price: "",
      logo: ""
    });
    
    let history = useHistory(); 
    
    const handleSubmit = async (e) => {
    e.preventDefault();
    const addProduct = async() => {
        await axios.post("/products", product);
      };
      addProduct();
      history.push('/')
    };

  const handleChange = (e) => {
    setProduct({
        ...product,
        [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <div className="container d-flex flex-column justify-content-center align-items-center login-center">
        <form className="Form col-md-8 col-lg-4 col-11" onSubmit={handleSubmit}>
          <input type="name" placeholder="Name" name="name" onChange={handleChange} />
          <textarea type="description" placeholder="Description" name="description" onChange={handleChange} />
          <input type="image_url" placeholder="Image URL" name="image_url" onChange={handleChange} />
          <input type="price" placeholder="Price" name="price" onChange={handleChange} />
          <input type="logo" placeholder="Logo URL" name="logo" onChange={handleChange} />
          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
