import React from "react";
import { Link } from "react-router-dom";

export default function Product({items}) {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div key={product.id} className="col-lg-4 col-md-6 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <div className="card" style={{ width: "18rem" }}>
                      <Link to={`/product/${product.id}`}>
                        <img
                          src={product.imgSrc}
                          className="card-img-top"
                          alt="..."
                        />
                      </Link>
                      <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">{product.description}</p>
                        <a className="btn btn-primary mx-2">
                          {"Rs."} {product.price}
                        </a>
                        <a className="btn btn-primary">Add To Cart</a>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
