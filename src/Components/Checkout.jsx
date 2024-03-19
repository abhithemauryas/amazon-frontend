// Checkout.js
import React from "react";
import { useStateValue } from "./StateProvider";
import Navbar from "./Navbar";
import "../CSS/Card.css";
import "../CSS/Checkout.css";
// import CurrencyFormat from "react-currency-format";
import CheckCard from "./CheckCard";
import { getBasketTotal } from "./Reducer";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Footer from "./Footer"

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  console.log("basket", basket);

  const navigate = useNavigate();
  return (
    <div className="Checkout-Container">
      <Navbar />
      <div className="Checkout-Main">
        <div className="Checkout-Shopping">
          <h2>Shopping Cart</h2>
          {
          basket?.length ?(basket.map((item) => <CheckCard item={item} />)):(<div>
            <img style={{width:"500px"}} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-5521508-4610092.png" alt="" />
          </div>) 
          }
        </div>
        <div className="Subtotal">
   

              <>
                <p>
                  Subtotal ({basket.length} item) :<strong> {getBasketTotal(basket)}</strong>
                </p>
                <div className="small">
                  <input type="checkbox" />
                  <span>This order contains a gift.</span>
                </div>
              </>
      
          <button
            className="Proceed-Button"
            onClick={() => navigate("/address")}
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Checkout;
