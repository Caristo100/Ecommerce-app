import React from "react";
import "./payment.css";
import { useStateValue } from "./StateProvider";
import Checkout_Product from "./Checkout_Product";
import { Link } from "react-router-dom";

function payment() {
  const [{ cart, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment_container">
        <h1>Checkout({<Link to="/checkout">{cart?.length} items</Link>})</h1>
        <div className="pay_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
          </div>
        </div>
        <div className="pay_section">
          <div className="payment_title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment_items">
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
        <div className="pay_section">
          <div className="payment_title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default payment;
