import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Sub_total from "./Sub_total";
import Checkout_Product from "./Checkout_Product";
import Product_DAta from "./product_list";

function Checkout() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
          alt=""
        />
        <div>
          <h2 className="checkout_title">your Shopping Cart</h2>
          {cart.map((item) => (
            <Checkout_Product
              id={Product_DAta[0].id}
              title={Product_DAta[0].title}
              price={Product_DAta[0].price}
              rating={Product_DAta[0].rating}
              image={Product_DAta[0].image}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Sub_total />
      </div>
    </div>
  );
}

export default Checkout;
