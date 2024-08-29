import { Link, useLocation, useNavigate } from "react-router-dom";

import { useContextElement } from "@/context/Context";
import React, { useEffect } from "react";

export default function CartDrawer() {
  const { cartProducts, setCartProducts, totalPrice, authenticated } = useContextElement();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeCart = () => {
    document
      .getElementById("cartDrawerOverlay")
      .classList.remove("page-overlay_visible");
    document.getElementById("cartDrawer").classList.remove("aside_visible");
  };
  const setQuantity = (id, quantity) => {
    if (quantity >= 1) {
      const item = cartProducts.filter((elm) => elm.PutRequest.Item.pk.S == id)[0];
      const items = [...cartProducts];
      const itemIndex = items.indexOf(item);
      item.quantity = quantity;
      items[itemIndex] = item;
      setCartProducts(items);
    }
  };
  const removeItem = (id) => {
    setCartProducts((pre) => [...pre.filter((elm) => elm.PutRequest.Item.pk.S != id)]);
  };
  useEffect(() => {
    closeCart();
  }, [pathname]);


  const navigateUserToAuthenticationOrCheckout = (e) => {
    e.preventDefault();

    const { isAuthenticated } = authenticated;

    if(!isAuthenticated) {
      // Navigate to login page
      navigate("/accounts/login");
    } else {
      // Navigate to checkout
      navigate("/shop_cart");
    }
  }

  return (
    <>
      <div
        className="aside aside_right overflow-hidden cart-drawer "
        id="cartDrawer"
      >
        <div className="aside-header d-flex align-items-center">
          <h3 className="text-uppercase fs-6 mb-0">
            SHOPPING BAG (
            <span className="cart-amount js-cart-items-count">
              {cartProducts.length}
            </span>
            )
          </h3>
          <button
            onClick={closeCart}
            className="btn-close-lg js-close-aside btn-close-aside ms-auto"
          ></button>
        </div>
        {cartProducts.length ? (
          <div className="aside-content cart-drawer-items-list">
            {cartProducts && cartProducts.map((elm, i) => (
              <React.Fragment key={i}>
                <div className="cart-drawer-item d-flex position-relative">
                  <div className="position-relative">
                    <img
                      loading="lazy"
                      className="cart-drawer-item__img"
                      width={330}
                      height={400}
                      style={{ height: "fit-content" }}
                      src={`https://aws-serverless-ecoommerce-platform-media-bucket.s3.eu-west-2.amazonaws.com/images/shop/${elm.PutRequest.Item.product_images.L[0].S}`}
                      alt="image"
                    />
                  </div>
                  <div className="cart-drawer-item__info flex-grow-1">
                    <h6 className="cart-drawer-item__title fw-normal">
                      {elm.PutRequest.Item.product_name.S}
                    </h6>
                    <p className="cart-drawer-item__option text-secondary">
                      Color: Yellow
                    </p>
                    <p className="cart-drawer-item__option text-secondary">
                      Size: L
                    </p>
                    <div className="d-flex align-items-center justify-content-between mt-1">
                      <div className="qty-control position-relative">
                        <input
                          type="number"
                          name="quantity"
                          onChange={(e) =>
                            setQuantity(elm.PutRequest.Item.pk.S, e.target.value / 1)
                          }
                          value={elm.quantity}
                          min="1"
                          className="qty-control__number border-0 text-center"
                        />
                        <div
                          onClick={() => {
                            setQuantity(elm.PutRequest.Item.pk.S, elm.quantity - 1);
                          }}
                          className="qty-control__reduce text-start"
                        >
                          -
                        </div>
                        <div
                          onClick={() => setQuantity(elm.PutRequest.Item.pk.S, elm.quantity + 1)}
                          className="qty-control__increase text-end"
                        >
                          +
                        </div>
                      </div>

                      <span className="cart-drawer-item__price money price">
                        ${elm.PutRequest.Item.product_price.N * elm.quantity}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => removeItem(elm.PutRequest.Item.pk.S)}
                    className="btn-close-xs position-absolute top-0 end-0 js-cart-item-remove"
                  ></button>
                </div>
                {/* <!-- /.cart-drawer-item d-flex --> */}

                <hr className="cart-drawer-divider" />
              </React.Fragment>
            ))}

            {/* <!-- /.cart-drawer-item d-flex --> */}
          </div>
        ) : (
          <div className="fs-18 mt-5 px-5">
            Your cart is empty. Start shopping!
          </div>
        )}
        {/* <!-- /.aside-content --> */}

        <div className="cart-drawer-actions position-absolute start-0 bottom-0 w-100">
          <hr className="cart-drawer-divider" />
          <div className="d-flex justify-content-between">
            <h6 className="fs-base fw-medium">SUBTOTAL:</h6>
            <span className="cart-subtotal fw-medium">${totalPrice}</span>
          </div>
          {/* <!-- /.d-flex justify-content-between --> */}
          {cartProducts.length ? (
            <>
              {/* <Link to="/shop_cart" className="btn btn-light mt-3 d-block">
                View Cart
              </Link> */}
              <a
                to="/shop_checkout"
                className="btn btn-primary mt-3 d-block"
                onClick={(e) => navigateUserToAuthenticationOrCheckout(e) }
              >
                Checkout
              </a>
            </>
          ) : (
            <Link to="/shop" className="btn btn-light mt-3 d-block">
              Explore shop
            </Link>
          )}
        </div>
        {/* <!-- /.aside-content --> */}
      </div>
      <div
        id="cartDrawerOverlay"
        onClick={closeCart}
        className="page-overlay"
      ></div>
    </>
  );
}
