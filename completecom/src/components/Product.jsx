import React from "react";
import { items } from "./Data";

export default function Product() {
  return (
    <>
      <div className="container my-5">
        <div className="row">
          {items.map((product) => {
            return (
              <>
                <div className="col-lg-4 my-3 text-center">
                  <div className="card" style={{ width: "18rem" }}>
                    <div class="card" style="width: 18rem;">
                      <img src="..." class="card-img-top" alt="..." />
                      <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">
                          Some quick example text to build on the card title and
                          make up the bulk of the card's content.
                        </p>
                        <a href="#" class="btn btn-primary">
                          Go somewhere
                        </a>
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
