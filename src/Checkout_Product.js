import React from "react";
import "./Checkout_Product.css";
import { useStateValue } from "./StateProvider";

function Checkout_Product({ id, title, image, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();
  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct_img" />
      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">
          <strong>{title}</strong>
        </p>
        <p className="checkoutProduct_Price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct_rating">
          {Array(rating)
            .fill()
            .map((rate) => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={removeFromCart}>Remove from Cart</button>
      </div>
    </div>
  );
}

export default Checkout_Product;
