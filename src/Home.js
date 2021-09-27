import React from "react";
import "./Home.css";
import Product from "./Product";
import Product_DAta from "./product_list";

function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_banner"
          src="https://m.media-amazon.com/images/I/71nsesB0UNL._SX3000_.jpg"
          alt=""
        />
        <div className="home_row">
          <Product
            id={Product_DAta[0].id}
            title={Product_DAta[0].title}
            price={Product_DAta[0].price}
            rating={Product_DAta[0].rating}
            image={Product_DAta[0].image}
          />
          <Product
            id={Product_DAta[1].id}
            title={Product_DAta[1].title}
            price={Product_DAta[1].price}
            rating={Product_DAta[1].rating}
            image={Product_DAta[1].image}
          />
        </div>
        <div className="home_row">
          <Product
            id={Product_DAta[2].id}
            title={Product_DAta[2].title}
            price={Product_DAta[2].price}
            rating={Product_DAta[2].rating}
            image={Product_DAta[2].image}
          />
          <Product
            id={Product_DAta[3].id}
            title={Product_DAta[3].title}
            price={Product_DAta[3].price}
            rating={Product_DAta[3].rating}
            image={Product_DAta[3].image}
          />
          <Product
            id={Product_DAta[4].id}
            title={Product_DAta[4].title}
            price={Product_DAta[4].price}
            rating={Product_DAta[4].rating}
            image={Product_DAta[4].image}
          />
        </div>
        <div className="home_row">
          <Product
            id={Product_DAta[5].id}
            title={Product_DAta[5].title}
            price={Product_DAta[5].price}
            rating={Product_DAta[5].rating}
            image={Product_DAta[5].image}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
