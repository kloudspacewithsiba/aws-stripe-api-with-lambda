import { useContextElement } from "@/context/Context";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'

// Countries
const countries = [
  "Australia",
  "Canada",
  "United Kingdom",
  "United States",
  "Turkey",
];


export default function Checkout() {

  const [errorMessage, setErrorMessage] = useState('');
  const [emailInput, setEmailInput] = useState('');

  const backendUrl = import.meta.env.VITE_STRIPE_PK_AIRCODE_URL;
  const { cartProducts, totalPrice, authenticated, orderBillingDetails, setOrderBillingDetails  } = useContextElement();
  const [selectedRegion, setSelectedRegion] = useState("");
  const [idDDActive, setIdDDActive] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [formField, setFormField] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    streetAddress: "",
    town: "",
    postalCode: "",
    province: "",
    phone: "",
    email: ""
  })
  
  const onChangeHandler = (e) => {
    const { name, value} = e.target;

    setFormField((prev) => ({
      ...prev,
      [name]: value
    }));

    // Set billing information in state
    setOrderBillingDetails({
      ...orderBillingDetails,
      formField
    })
    
  }


  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="checkout-form">
        <div className="billing-info__wrapper">
          <h4>BILLING DETAILS</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_first_name"
                  placeholder="First Name"
                  name="firstName"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.firstName}
                />
                <label htmlFor="checkout_first_name">First Name</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-floating my-3">
                <input
                  type="text"
                  name="lastName"
                  className="form-control"
                  id="checkout_last_name"
                  placeholder="Last Name"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.lastName}
                />
                <label htmlFor="checkout_last_name">Last Name</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_company_name"
                  placeholder="Company Name (optional)"
                  name="companyName"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.companyName}
                />
                <label htmlFor="checkout_company_name">
                  Company Name (optional)
                </label>
              </div>
            </div>
            {/* <div className="col-md-12">
              <div className="search-field my-3">
                <div
                  className={`form-label-fixed hover-container ${
                    idDDActive ? "js-content_visible" : ""
                  }`}
                >
                  <label htmlFor="search-dropdown" className="form-label">
                    Country / Region*
                  </label>
                  <div className="js-hover__open">
                    <input
                      type="text"
                      className="form-control form-control-lg search-field__actor search-field__arrow-down"
                      id="search-dropdown"
                      name="search-keyword"
                      value={selectedRegion}
                      readOnly
                      placeholder="Choose a location..."
                      onClick={() => setIdDDActive((pre) => !pre)}
                    />
                  </div>
                  <div className="filters-container js-hidden-content mt-2">
                    <div className="search-field__input-wrapper">
                      <input
                        type="text"
                        className="search-field__input form-control form-control-sm bg-lighter border-lighter"
                        placeholder="Search"
                        onChange={(e) => {
                          setSearchQuery(e.target.value);
                        }}
                      />
                    </div>
                    <ul className="search-suggestion list-unstyled">
                      {countries
                        .filter((elm) =>
                          elm.toLowerCase().includes(searchQuery.toLowerCase())
                        )
                        .map((elm, i) => (
                          <li
                            onClick={() => {
                              setSelectedRegion(elm);
                              setIdDDActive(false);
                            }}
                            key={i}
                            className="search-suggestion__item js-search-select"
                          >
                            {elm}
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div> */}
            <div className="col-md-12">
              <div className="form-floating mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_street_address"
                  placeholder="Street Address *"
                  name="streetAddress"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.streetAddress}
                />
                <label htmlFor="checkout_company_name">Street Address *</label>
              </div>
              {/* <div className="form-floating mt-3 mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_street_address_2"
                />
              </div> */}
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_city"
                  placeholder="Town / City *"
                  name="town"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.town}
                />
                <label htmlFor="checkout_city">Town / City *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_zipcode"
                  placeholder="Postcode / ZIP *"
                  name="postalCode"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.postalCode}
                />
                <label htmlFor="checkout_zipcode">Postcode / ZIP *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_province"
                  placeholder="Province *"
                  name="province"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.province}
                />
                <label htmlFor="checkout_province">Province *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="text"
                  className="form-control"
                  id="checkout_phone"
                  placeholder="Phone *"
                  name="phone"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.phone}
                />
                <label htmlFor="checkout_phone">Phone *</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-floating my-3">
                <input
                  type="email"
                  className="form-control"
                  id="checkout_email"
                  placeholder="Your Mail *"
                  onChange={(e) => onChangeHandler(e)}
                  value={formField.email}
                  name="email"
                />
                <label htmlFor="checkout_email">Your Mail *</label>
              </div>
            </div>
            <div className="col-md-12">
              {/* <div className="form-check mt-3">
                <input
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  defaultValue=""
                  id="create_account"
                />
                <label className="form-check-label" htmlFor="create_account">
                  CREATE AN ACCOUNT?
                </label>
              </div> */}
              {/* <div className="form-check mb-3">
                <input
                  className="form-check-input form-check-input_fill"
                  type="checkbox"
                  defaultValue=""
                  id="ship_different_address"
                />
                <label
                  className="form-check-label"
                  htmlFor="ship_different_address"
                >
                  SHIP TO A DIFFERENT ADDRESS?
                </label>
              </div> */}
            </div>
          </div>
          <div className="col-md-12">
            <div className="mt-3">
              <textarea
                className="form-control form-control_gray"
                placeholder="Order Notes (optional)"
                cols="30"
                rows="8"
              ></textarea>
            </div>
          </div>
        </div>
        <div className="checkout__totals-wrapper">
          <div className="sticky-content">
            <div className="checkout__totals">
              <h3>Your Order</h3>
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
                        {elm.PutRequest.Item.product_name.S} x {elm.quantity}
                      </td>
                      <td>${elm.PutRequest.Item.product_price.N * elm.quantity}</td>
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
            <div className="checkout__payment-methods">
              <div className="form-check" style={{ paddingLeft: 0}}>
              Stripe goes here
              </div>

              <div className="policy-text">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our
                <Link to="/terms" target="_blank">
                  privacy policy
                </Link>
                .
              </div>
            </div>
            {/* <button className="btn btn-primary btn-checkout" onClick={() => onPlaceOrderHandler()}>
              PLACE ORDER
            </button> */}
          </div>
        </div>
      </div>
    </form>
  );
}
