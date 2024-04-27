import React from "react";
import { LiaShippingFastSolid } from "react-icons/lia";
import { TbTruckReturn } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { Tb24Hours } from "react-icons/tb";
const Deals = () => {
  return (
    <div>
      <div className="deals">

        <div className="deal">
          <LiaShippingFastSolid size={80} />
          <div className="bottom">
            <h2>Free Shipping</h2>
            <p>On all orders overs $75.00</p>
          </div>
        </div>

        <div className="deal">
          <RiSecurePaymentLine size={80} />
          <div className="bottom">
            <h2>Payment Secure</h2>
            <p>Your payments are safe with us</p>
          </div>
        </div>

        <div className="deal">
          <TbTruckReturn size={80} />
          <div className="bottom">
            <h2>Free Returns</h2>
            <p>Returns are free within 9 days</p>
          </div>
        </div>

        <div className="deal">
          <Tb24Hours size={80} />
          <div className="bottom">
            <h2>Support 24/7</h2>
            <p>Contact us 24 hours a day</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Deals;
