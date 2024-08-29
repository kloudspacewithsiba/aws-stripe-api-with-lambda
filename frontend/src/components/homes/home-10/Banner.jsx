import { bannersData } from "@/data/banner";

import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <section className="grid-banner container mb-3">
      <h2 className="d-none">Banner</h2>
      <div className="row">
        {bannersData.map((elm, i) => (
          <div key={i} className="col-lg-4">
            <div className="grid-banner__item position-relative mb-3">
              <img
                loading="lazy"
                className="w-100 h-auto"
                src={elm.imgSrc}
                width="450"
                height="450"
                alt="image"
              />
              <div className="content_abs bottom-0 text-center mx-3 mx-xl-4 mb-3 mb-xl-4 pb-2 px-2">
                <Link
                  to="/shop-1"
                  className="btn btn-outline-primary border-0 fs-base fw-normal btn-45 border-circle d-inline-flex align-items-center py-1"
                >
                  <span>{elm.buttonText}</span>
                </Link>
              </div>
              {/* <!-- /.content_abs .content_center --> */}
            </div>
          </div>
        ))}

        {/* <!-- /.col-lg-4 --> */}
      </div>
      {/* <!-- /.row --> */}
    </section>
  );
}
