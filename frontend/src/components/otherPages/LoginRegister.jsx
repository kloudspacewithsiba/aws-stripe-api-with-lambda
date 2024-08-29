import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useContextElement } from "@/context/Context";
// import { l } from "vite/dist/node/types.d-aGj9QkWt";

export default function LoginRegister() {
  const navigate = useNavigate();
  const location = useLocation();
  const { authenticated } = useContextElement();
  const { error, setError } = useState("");
  const { showLoginTab, setShowLoginTab } = useState(true)


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const url = location.pathname;

  useEffect(() => {
    console.log("PATH::", url)
    if(authenticated.isAuthenticated) {
      navigate("/")
    }

    
  }, []);

  const onLoginHandler = async (e) => {
    e.preventDefault();

    // try {
    //   const result = await fetch(`https://api.kloudspacewithsiba.co.za/authentication/signin`, {
    //     method: "POST",
    //     body: JSON.stringify({
    //       email,
    //       password
    //     }),
    //     headers: {
    //       "Content-Type": "application/json"
    //     }
    //   });
  
    //   if(result.ok) {
    //     const data = await result.json();
    //     localStorage.setItem("token", data.token);
    //     localStorage.setItem("userId", data.email);
    //     navigate(0);
    //     navigate('/');

    //   } 
    // } catch (error) {
    //   setError(error.message)
    // }


  }

  if(url.includes("login")) {
    // Activate login tab
    console.log("login tab");

    //setShowLoginTab(true)
  }

  if(url.includes("register")) {
    // Activate login tab
    console.log("register tab");

    //setShowLoginTab(false)
  }
  console.log("TAB_SELECTED::", showLoginTab);

  return (
    <section className="login-register container">
      <h2 className="d-none">Login & Register</h2>
      <ul className="nav nav-tabs mb-5" id="login_register" role="tablist">
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link nav-link_underscore active`}
            id="login-tab"
            data-bs-toggle="tab"
            href="#tab-item-login"
            role="tab"
            aria-controls="tab-item-login"
            aria-selected="false"
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link nav-link_underscore"
            id="register-tab"
            data-bs-toggle="tab"
            href="#tab-item-register"
            role="tab"
            aria-controls="tab-item-register"
            aria-selected="true"
          >
            Register
          </a>
        </li>
      </ul>
      <div className="tab-content pt-2" id="login_register_tab_content">
        <div
          className="tab-pane fade show active"
          id="tab-item-login"
          role="tabpanel"
          aria-labelledby="login-tab"
        >
          <div className="login-form">
            <form
              onSubmit={(e) => onLoginHandler(e)}
              className="needs-validation"
            >
              <div className="form-floating mb-3">
                <input
                  name="login_email"
                  type="email"
                  className="form-control form-control_gray"
                  placeholder="Email address *"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label>Email address *</label>
              </div>

              <div className="pb-3"></div>

              <div className="form-floating mb-3">
                <input
                  name="login_password"
                  type="password"
                  className="form-control form-control_gray"
                  id="customerPasswodInput"
                  placeholder="Password *"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label htmlFor="customerPasswodInput">Password *</label>
              </div>

              <div className="d-flex align-items-center mb-3 pb-2">
                {/* <div className="form-check mb-0">
                  <input
                    name="remember"
                    className="form-check-input form-check-input_fill"
                    type="checkbox"
                    defaultValue=""
                  />
                  <label className="form-check-label text-secondary">
                    Remember me
                  </label>
                </div>
                <Link to="/reset_password" className="btn-text ms-auto">
                  Lost password?
                </Link> */}
              </div>
              {error && error}
              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Log In
              </button>

              <div className="customer-option mt-4 text-center">
                <span className="text-secondary">No account yet?</span>{" "}
                <a href="#register-tab" className="btn-text js-show-register">
                  Create Account
                </a>
              </div>
            </form>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="tab-item-register"
          role="tabpanel"
          aria-labelledby="register-tab"
        >
          <div className="register-form">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="needs-validation"
            >
              <div className="form-floating mb-3">
                <input
                  name="register_username"
                  type="text"
                  className="form-control form-control_gray"
                  id="customerNameRegisterInput"
                  placeholder="Username"
                  required
                />
                <label htmlFor="customerNameRegisterInput">Username</label>
              </div>

              <div className="pb-3"></div>

              <div className="form-floating mb-3">
                <input
                  name="register_email"
                  type="email"
                  className="form-control form-control_gray"
                  id="customerEmailRegisterInput"
                  placeholder="Email address *"
                  required
                />
                <label htmlFor="customerEmailRegisterInput">
                  Email address *
                </label>
              </div>

              <div className="pb-3"></div>

              <div className="form-floating mb-3">
                <input
                  name="register_password"
                  type="password"
                  className="form-control form-control_gray"
                  id="customerPasswodRegisterInput"
                  placeholder="Password *"
                  required
                />
                <label htmlFor="customerPasswodRegisterInput">Password *</label>
              </div>

              <div className="d-flex align-items-center mb-3 pb-2">
                <p className="m-0">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our privacy policy.
                </p>
              </div>

              <button
                className="btn btn-primary w-100 text-uppercase"
                type="submit"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
