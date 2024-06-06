import React, { useEffect, useState } from "react";
import { items } from "./Data";
import { useParams } from "react-router-dom";
import Product from "./Product";

export default function ProductDetails() {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProducts = items.filter((p)=>p.category === product.category)
    setRelatedProducts(relatedProducts)
  }, [id, product.category]);
  return (
    <>
      <div className="container flex items-center justify-center">
        <img
          src={product.imgSrc}
          alt=""
          style={{ height: "250px", width: "250px" }}
        />

        <div>
          <h5 className="card-title">{product.title}</h5>
          <p className="card-text">{product.description}</p>
          <a className="btn btn-primary mx-2">
            {"Rs."} {product.price}
          </a>
          <a className="btn btn-primary">Add To Cart</a>
        </div>
      </div>

      <Product items={relatedProducts}/>
    </>
  );
}
