import React, {useState, useEffect} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const UpdateProduct = ({ match }) => {
  window.scrollTo(0, 0);

  const [product, setProduct] = useState({
    name: "",
    description: "",
    image_url: "",
    price: "",
    logo: ""
  });
  
  let history = useHistory(); 
  
  const loadProduct = async (id) => {
    const res = await axios.get(`/products/${id}`);
    console.log(res.data)
    setProduct({name: res.data.name, description: res.data.description, image_url: res.data.image_url, price: res.data.price, logo: res.data.logo})
  }

  useEffect(() => {
    if(match.params.id) {
      const id = match.params.id
      loadProduct(id)
    }
  }, [match.params.id])
  
    const handleSubmit = async (e) => {
    e.preventDefault();
    const updateProduct = async() => {
        await axios.put(`/products/${match.params.id}`, product);
      };
      updateProduct();
      history.push(`/products/${match.params.id}`)
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
          <input type="name" placeholder="Name" name="name" value={product.name} onChange={handleChange} />
          <textarea type="description" placeholder="Description" name="description" value={product.description} onChange={handleChange} />
          <input type="image_url" placeholder="Image URL" name="image_url" value={product.image_url} onChange={handleChange} />
          <input type="price" placeholder="Price" name="price" value={product.price} onChange={handleChange} />
          <input type="logo" placeholder="Logo URL" name="logo" value={product.logo} onChange={handleChange} />
          <button type="submit">Update</button>
        </form>
      </div>
    </>
  );
};

export default UpdateProduct;
