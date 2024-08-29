import { useContextElement } from "@/context/Context";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function OrderCompleted() {
  const { cartProducts, totalPrice, setCartProducts } = useContextElement();
  const [showDate, setShowDate] = useState(false);
  useEffect(() => {
    setShowDate(true);
    setCartProducts([])
  }, []);

  return (
    <div className="order-complete">
      <div className="order-complete__message">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="40" cy="40" r="40" fill="#B9A16B" />
          <path
            d="M52.9743 35.7612C52.9743 35.3426 52.8069 34.9241 52.5056 34.6228L50.2288 32.346C49.9275 32.0446 49.5089 31.8772 49.0904 31.8772C48.6719 31.8772 48.2533 32.0446 47.952 32.346L36.9699 43.3449L32.048 38.4062C31.7467 38.1049 31.3281 37.9375 30.9096 37.9375C30.4911 37.9375 30.0725 38.1049 29.7712 38.4062L27.4944 40.683C27.1931 40.9844 27.0257 41.4029 27.0257 41.8214C27.0257 42.24 27.1931 42.6585 27.4944 42.9598L33.5547 49.0201L35.8315 51.2969C36.1328 51.5982 36.5513 51.7656 36.9699 51.7656C37.3884 51.7656 37.8069 51.5982 38.1083 51.2969L40.385 49.0201L52.5056 36.8996C52.8069 36.5982 52.9743 36.1797 52.9743 35.7612Z"
            fill="white"
          />
        </svg>
        <h3>Your order is completed!</h3>
        <p>Thank you. Your order has been received. Go to your <Link to="/account_orders">orders</Link></p>
      </div>
      {/* <div className="order-info">
        <div className="order-info__item">
          <label>Order Number</label>
          <span>13119</span>
        </div>
        <div className="order-info__item">
          <label>Date</label>
          {showDate && <span>{new Date().toLocaleDateString()}</span>}
        </div>
        <div className="order-info__item">
          <label>Total</label>

          <span>${totalPrice && totalPrice + 19}</span>
        </div>
        <div className="order-info__item">
          <label>Paymetn Method</label>
          <span>Direct Bank Transfer</span>
        </div>
      </div> */}
      {/* <div className="checkout__totals-wrapper">
        <div className="checkout__totals">
          <h3>Order Details</h3>
          <table className="checkout-cart-items">
            <thead>
              <tr>
                <th>PRODUCT</th>
                <th>SUBTOTAL</th>
              </tr>
            </thead>
            <tbody>
              {cartProducts.map((elm, i) => (
                <tr key={i}>
                  <td>
                    {elm.title} x {elm.quantity}
                  </td>
                  <td>${elm.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <table className="checkout-totals">
            <tbody>
              <tr>
                <th>SUBTOTAL</th>
                <td>${totalPrice}</td>
              </tr>
              <tr>
                <th>SHIPPING</th>
                <td>Free shipping</td>
              </tr>
              <tr>
                <th>VAT</th>
                <td>${totalPrice && 19}</td>
              </tr>
              <tr>
                <th>TOTAL</th>
                <td>${totalPrice && totalPrice + 19}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  );
}