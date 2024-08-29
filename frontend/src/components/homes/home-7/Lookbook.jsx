import { products12 } from "@/data/products/fashion";
import { Link } from "react-router-dom";
import React from "react";

import { Tooltip } from "react-tooltip";

export default function Lookbook() {
  return (
    <section className="lookbook-products position-relative container">
      <img
        loading="lazy"
        className="h-auto"
        src="/assets/images/home/demo7/lookbook-bg.jpg"
        width="1903"
        height="694"
        alt="image"
      />
      <h2 className="h1 text-uppercase position-absolute font-courgette position-center text-center">
        Man
        <br />
        <span className="third-color">Lookbook</span>
      </h2>
      {products12.map(({ id, style, imgSrc, price, title }) => (
        <React.Fragment key={id}>
          <button
            className="popover-point position-absolute"
            style={style}
            data-tooltip-id={id.toString()}
          >
            <span></span>
          </button>
          <Tooltip
            place="right-start"
            className="example"
            render={() => (
              <div className="popover-product">
                <Link to={`/product1_simple/${id}`}>
                  <img
                    loading="lazy"
                    className="mb-3"
                    width={330}
                    height={400}
                    src={imgSrc}
                    alt="image"
                  />
                </Link>
                <p className="fw-medium mb-0">
                  <Link to={`/product1_simple/${id}`}>{title}</Link>
                </p>
                <p className="mb-0">${price}</p>
              </div>
            )}
            openOnClick
            id={id.toString()}
          />
        </React.Fragment>
      ))}

      <h2 className="h1 text-uppercase position-absolute font-courgette position-center text-center">
        Man
        <br />
        <span className="third-color">Lookbook</span>
      </h2>
    </section>
  );
}
