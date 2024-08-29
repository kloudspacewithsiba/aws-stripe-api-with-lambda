import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div className="col-lg-9">
      <div className="page-content my-account__dashboard">
        <p>
          Hello <strong>alitfn58</strong> (not <strong>alitfn58?</strong>
          <Link to="/login_register">Log out</Link>)
        </p>
        <p>
          From your account dashboard you can view your {""}
          <Link className="unerline-link" to="/account_orders">
             recent orders
          </Link>
          , manage your{""}
          <Link className="unerline-link" to="/account_edit_address">
             shipping and billing addresses
          </Link>
          , and {""}
          <Link className="unerline-link" to="/account_edit">
             edit your password and account details.
          </Link>
        </p>
      </div>
    </div>
  );
}
