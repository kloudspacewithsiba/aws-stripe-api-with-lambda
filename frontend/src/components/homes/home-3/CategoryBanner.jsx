import { categoryBanners } from "@/data/categories";

import { Link } from "react-router-dom";

export default function CategoryBanner() {
  return (
    <section className="category-banner container">
      <div className="row">
        {categoryBanners.map((elm, i) => (
          <div key={i} className="col-md-6">
            <div className="category-banner__item border-radius-10 mb-5">
              <img
                loading="lazy"
                className="h-auto"
                src={elm.imageUrl}
                width="690"
                height="665"
                alt="image"
              />
              <div className="category-banner__item-mark">
                Starting at ${elm.price}
              </div>
              <div className="category-banner__item-content">
                <h3 className="mb-0">{elm.category}</h3>
                <Link
                  to="/shop-1"
                  className="btn-link default-underline text-uppercase fw-medium"
                >
                  Shop Now
                </Link>
              </div>
            </div>
            <div className="pb-2"></div>
          </div>
        ))}
      </div>
    </section>
  );
}
