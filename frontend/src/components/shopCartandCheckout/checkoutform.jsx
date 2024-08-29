
import React, { useState } from 'react';

export const CheckoutForm = () => {

  const createCustomerOrderAndInitialisePayment = async (e) => {
    console.log("CREATE_CUSTOMER_ORDER_AND_INITIALISE_PAYMENT", e)
  }

  return (
    <>
      {/* <PaymentElement /> */}
      <h3>Stripe Payment Form</h3>
      <button className="btn btn-primary btn-checkout" style={{marginTop: "20px"}} onClick={(e) => createCustomerOrderAndInitialisePayment(e) }>PLACE ORDER</button>
    </>
  );
};

export default CheckoutForm;