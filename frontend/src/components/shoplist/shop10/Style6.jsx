import ColorSelection from "@/components/common/ColorSelection";
import { products56 } from "@/data/products/fashion";

import { Link } from "react-router-dom";
import { useContextElement } from "@/context/Context";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Style6() {
  const { toggleWishlist, isAddedtoWishlist } = useContextElement();
  const { setQuickViewItem } = useContextElement();
  const { addProductToCart, isAddedToCartProducts } = useContextElement();
  return (
    <div
      className="row row-cols-2 row-cols-md-3 row-cols-lg-4"
      id="products-grid-6"
    >
      {products56.map((elm, i) => (
        <div key={i} className="product-card-wrapper overflow-hidden">
          <div className="product-card product-card_style6 hover-container mb-3 mb-md-4 mb-xxl-5">
            <div className="pc__img-wrapper">
              <Swiper
                slidesPerView={1}
                className="swiper-container background-img js-swiper-slider"
                modules={[Navigation]}
                id={`style-6${elm.id.toString()}`}
                navigation={{
                  prevEl: `#style-6${elm.id.toString()} .pc__img-prev`,
                  nextEl: `#style-6${elm.id.toString()} .pc__img-next`,
                }}
              >
                <SwiperSlide className="swiper-slide">
                  <Link to={`/product1_simple/${elm.id}`}>
                    <img
                      loading="lazy"
                      src={elm.imgSrc}
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </Link>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                  <Link to={`/product1_simple/${elm.id}`}>
                    <img
                      loading="lazy"
                      src={elm.imgSrc2}
                      width="330"
                      height="400"
                      alt="Cropped Faux leather Jacket"
                      className="pc__img"
                    />
                  </Link>
                </SwiperSlide>

                <span className="cursor-pointer pc__img-prev">
                  <svg
                    width="7"
                    height="11"
                    viewBox="0 0 7 11"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <use href="#icon_prev_sm" />
                  </svg>
                </span>
                <span className="cursor-pointer pc__img-next">
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
            </div>

            <div className="pc__info position-relative bg-body">
              <div className="position-relative">
                <p className="pc__category">{elm.category}</p>
                <h6 className="pc__title">
                  <Link to={`/product1_simple/${elm.id}`}>{elm.title}</Link>
                </h6>
                <div className="product-card__price d-flex">
                  <span className="money price">${elm.price}</span>
                </div>

                <div className="hover__content d-flex align-items-center top-0 end-0 bg-body w-auto">
                  <ColorSelection />
                </div>

                <div className="d-none d-flex align-items-center hover__content position-relative mt-3 mt-sm-0">
                  <button
                    className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase fw-medium js-add-cart js-open-aside"
                    onClick={() => addProductToCart(elm.id)}
                    title={
                      isAddedToCartProducts(elm.id)
                        ? "Already Added"
                        : "Add to Cart"
                    }
                  >
                    {isAddedToCartProducts(elm.id)
                      ? "Already Added"
                      : "Add To Cart"}
                  </button>
                  <button
                    className="btn-link btn-link_lg me-auto me-xxl-4 text-uppercase fw-medium js-quick-view"
                    data-bs-toggle="modal"
                    data-bs-target="#quickView"
                    title="Quick view"
                    onClick={() => setQuickViewItem(elm)}
                  >
                    <span className="d-none d-xxl-block">Quick View</span>
                    <span className="d-block d-xxl-none">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <use href="#icon_view" />
                      </svg>
                    </span>
                  </button>
                  <button
                    className={`pc__btn-wl bg-transparent border-0 js-add-wishlist ${
                      isAddedtoWishlist(elm.id) ? "active" : ""
                    }`}
                    title="Add To Wishlist"
                    onClick={() => toggleWishlist(elm.id)}
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
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
