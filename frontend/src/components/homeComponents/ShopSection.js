import React,  { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ShopSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async() => {
      const { data } = await axios.get("/products");
      setProducts(data);
    };
    fetchProducts();
    }, []);

  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            <div className="col-lg-12 col-md-12 article">
              <div className="shopcontainer row">
                {products.map((product) => (
                  <div
                    className="shop col-lg-4 col-md-6 col-sm-6"
                    key={product.id}
                  >
                    <div className="border-product">
                      <Link to={`/products/${product.id}`}>
                        <div className="shopBack">
                          <img src={product.image_url} alt={product.name} />
                        </div>
                      </Link>

                      <div className="shoptext">
                        <p>
                          <Link to={`/products/${product.id}`}>
                            {product.name}
                          </Link>
                        </p>

                        <h3>${product.price}</h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
