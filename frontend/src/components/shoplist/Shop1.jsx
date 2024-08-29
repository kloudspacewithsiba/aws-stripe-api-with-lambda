import { products51 } from "@/data/products/fashion";
import { Swiper, SwiperSlide } from "swiper/react";
import Star from "../common/Star";
import ColorSelection from "../common/ColorSelection";
import { Navigation } from "swiper/modules";
import Pagination1 from "../common/Pagination1";
import { useEffect, useState } from "react";
import BreadCumb from "./BreadCumb";
import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
const itemPerRow = [2, 3, 4];

import { openModalShopFilter } from "@/utlis/aside";
import {
  menuCategories,
  sortingOptions,
} from "@/data/products/productCategories";


export default function Shop1() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const [selectedColView, setSelectedColView] = useState(4);
  const { addProductToCart, isAddedToCartProducts, productsList } = useContextElement();
  const [currentCategory, setCurrentCategory] = useState(menuCategories[0]);


  return (
    <>
      <section className="full-width_padding">
        <div
          className="full-width_border border-2"
          style={{ borderColor: "#eeeeee" }}
        >
          <div className="shop-banner position-relative">
            <div
              className="background-img"
              style={{ backgroundColor: "#eeeeee" }}
            >
              <img
                loading="lazy"
                src="https://aws-serverless-ecoommerce-platform-media-bucket.s3.eu-west-2.amazonaws.com/images/shop_banner_character1.png"
                width="1759"
                height="420"
                alt="Pattern"
                className="slideshow-bg__img object-fit-cover"
              />
            </div>

            <div className="shop-banner__content container position-absolute start-50 top-50 translate-middle">
              <h2 className="stroke-text h1 smooth-16 text-uppercase fw-bold mb-3 mb-xl-4 mb-xl-5">
                Jackets & Coats
              </h2>
              <ul className="d-flex flex-wrap list-unstyled text-uppercase h6">
                {menuCategories.map((elm, i) => (
                  <li key={i} className="me-3 me-xl-4 pe-1">
                    <a
                      onClick={() => setCurrentCategory(elm)}
                      className={`menu-link menu-link_us-s ${
                        currentCategory == elm ? "menu-link_active" : ""
                      }`}
                    >
                      {elm}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {/* <!-- /.shop-banner__content --> */}
          </div>
          {/* <!-- /.shop-banner position-relative --> */}
        </div>
        {/* <!-- /.full-width_border --> */}
      </section>
      <div className="mb-4 pb-lg-3"></div>
      <section className="shop-main container">
        <div className="d-flex justify-content-between mb-4 pb-md-2">
          <div className="breadcrumb mb-0 d-none d-md-block flex-grow-1">
            <BreadCumb />
          </div>

          <div className="shop-acs d-flex align-items-center justify-content-between justify-content-md-end flex-grow-1">
            <select
              className="shop-acs__select form-select w-auto border-0 py-0 order-1 order-md-0"
              aria-label="Sort Items"
              name="total-number"
            >
              {sortingOptions.map((option, index) => (
                <option key={index} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <div className="shop-asc__seprator mx-3 bg-light d-none d-md-block order-md-0"></div>

            <div className="col-size align-items-center order-1 d-none d-lg-flex">
              <span className="text-uppercase fw-medium me-2">View</span>
              {itemPerRow.map((elm, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedColView(elm)}
                  className={`btn-link fw-medium me-2 js-cols-size ${
                    selectedColView == elm ? "btn-link_active" : ""
                  } `}
                >
                  {elm}
                </button>
              ))}
            </div>
            {/* <!-- /.col-size --> */}

            <div className="shop-asc__seprator mx-3 bg-light d-none d-lg-block order-md-1"></div>

            <div className="shop-filter d-flex align-items-center order-0 order-md-3">
              <button
                className="btn-link btn-link_f d-flex align-items-center ps-0 js-open-aside"
                onClick={openModalShopFilter}
              >
                <svg
                  className="d-inline-block align-middle me-2"
                  width="14"
                  height="10"
                  viewBox="0 0 14 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <use href="#icon_filter" />
                </svg>
                {/* <span className="text-uppercase fw-medium d-inline-block align-middle">
                  Filter
                </span> */}
              </button>
            </div>
            {/* <!-- /.col-size d-flex align-items-center ms-auto ms-md-3 --> */}
          </div>
          {/* <!-- /.shop-acs --> */}
        </div>
        {/* <!-- /.d-flex justify-content-between --> */}

        <div
          className={`products-grid row row-cols-2 row-cols-md-3 row-cols-lg-${selectedColView}`}
          id="products-grid"
        >
          {productsList && productsList.map((elm, i) => (
            <div key={i} className="product-card-wrapper">
              <div className="product-card mb-3 mb-md-4 mb-xxl-5">
                <div className="pc__img-wrapper">
                  <Swiper
                    className="shop-list-swiper   swiper-container swiper-initialized swiper-horizontal swiper-backface-hidden background-img js-swiper-slider"
                    slidesPerView={1}
                    modules={[Navigation]}
                    navigation={{
                      prevEl: ".prev" + i,
                      nextEl: ".next" + i,
                    }}
                  >
                    {elm.PutRequest.Item.product_images.L.map((elm2, i) => (
                      <SwiperSlide key={i} className="swiper-slide">
                        <Link to={`/shop/product/${elm.PutRequest.Item.pk.S.replace("pro#", "")}`}>
                          <img
                            loading="lazy"
                            src={`https://aws-serverless-ecoommerce-platform-media-bucket.s3.eu-west-2.amazonaws.com/images/shop/${elm2.S}`}
                            width="330"
                            height="400"
                            alt="Cropped Faux leather Jacket"
                            className="pc__img"
                          />
                        </Link>
                      </SwiperSlide>
                    ))}

                    <span
                      className={`cursor-pointer pc__img-prev ${"prev" + i} `}
                    >
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_prev_sm" />
                      </svg>
                    </span>
                    <span
                      className={`cursor-pointer pc__img-next ${"next" + i} `}
                    >
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_next_sm" />
                      </svg>
                    </span>
                  </Swiper>
                  <button
                    className="pc__atc btn anim_appear-bottom btn position-absolute border-0 text-uppercase fw-medium js-add-cart js-open-aside"
                    onClick={() => addProductToCart(elm.PutRequest.Item.pk.S.replace("pro#", ""))}
                    title={
                      isAddedToCartProducts(elm.PutRequest.Item.pk.S.replace("pro#", ""))
                        ? "Already Added"
                        : "Add to Cart"
                    }
                  >
                    {isAddedToCartProducts(elm.PutRequest.Item.pk.S.replace("pro#", ""))
                      ? "Already Added"
                      : "Add To Cart"}
                  </button>
                </div>

                <div className="pc__info position-relative">
                  <p className="pc__category">{elm.category}</p>
                  <h6 className="pc__title">
                    <Link to={`/shop/product/${elm.PutRequest.Item.pk.S.replace("pro#", "")}`}>{elm.PutRequest.Item.product_name.S}</Link>
                  </h6>
                  <div className="product-card__price d-flex">
                    {elm.priceOld ? (
                      <>
                        {" "}
                        <span className="money price price-old">
                          ${elm.priceOld}
                        </span>
                        <span className="money price price-sale">
                          ${elm.price}
                        </span>
                      </>
                    ) : (
                      <span className="money price">${elm.PutRequest.Item.product_price.N}</span>
                    )}
                  </div>
                  {elm.colors && (
                    <div className="d-flex align-items-center mt-1">
                      {" "}
                      <ColorSelection />{" "}
                    </div>
                  )}
                  {elm.reviews && (
                    <div className="product-card__review d-flex align-items-center">
                      <div className="reviews-group d-flex">
                        <Star stars={elm.rating} />
                      </div>
                      <span className="reviews-note text-lowercase text-secondary ms-1">
                        {elm.reviews}
                      </span>
                    </div>
                  )}

                  <button
                    className={`pc__btn-wl position-absolute top-0 end-0 bg-transparent border-0 js-add-wishlist ${
                      isAddedtoWishlist(elm.PutRequest.Item.pk.S.replace("pro#", "")) ? "active" : ""
                    }`}
                    onClick={() => toggleWishlist(elm.PutRequest.Item.pk.S.replace("pro#", ""))}
                    title="Add To Wishlist"
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <use href="#icon_heart" />
                    </svg>
                  </button>
                </div>
                {elm.discont && (
                  <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                    <div className="pc-labels__right ms-auto">
                      <span className="pc-label pc-label_sale d-block text-white">
                        -{elm.discont}%
                      </span>
                    </div>
                  </div>
                )}
                {elm.isNew && (
                  <div className="pc-labels position-absolute top-0 start-0 w-100 d-flex justify-content-between">
                    <div className="pc-labels__left">
                      <span className="pc-label pc-label_new d-block bg-white">
                        NEW
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {/* <!-- /.products-grid row --> */}

        {/* <p className="mb-5 text-center fw-medium">SHOWING 36 of 497 items</p>
        <Pagination1 /> */}

        <div className="text-center">
          <a className="btn-link btn-link_lg text-uppercase fw-medium" href="#">
            Scroll Up
          </a>
        </div>
      </section>
    </>
  );
}
