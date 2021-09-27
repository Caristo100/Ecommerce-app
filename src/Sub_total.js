import React from "react";
import "./Sub_total.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getCartTotal } from "./reducer";

function Sub_total() {
  const [{ cart }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({cart.length} items): <strong>{value}</strong>
            </p>
            <small className="Subtotal_gift">
              <input type="checkbox" />
              This order contain a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)}
        displayType="text"
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button>proceed to checkout</button>
    </div>
  );
}

export default Sub_total;
