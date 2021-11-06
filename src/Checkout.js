import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import Sub_total from "./Sub_total";
import Checkout_Product from "./Checkout_Product";

function Checkout() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/D23947948_IN_CEPC_Clearance-store_May21_rush_1500x300.jpg"
          alt=""
        />
        <div>
          <h3>hello! {user?.email}</h3>
          <h2 className="checkout_title">your Shopping Cart</h2>
          {cart.map((item) => (
            <Checkout_Product
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
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
