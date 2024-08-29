import { useContextElement } from "@/context/Context";
import { dashboardMenuItems } from "@/data/menu";
import { Link, useLocation, useNavigate,Navigate } from "react-router-dom";

export default function DashboardSidebar() {
  const { pathname } = useLocation();
  const { setAuthenticated } = useContextElement();
  const navigate = useNavigate();

  const onClickHandler = (e, link) => {
    console.log("EVENT::", e);
    console.log("LINK::", link)

    if(link == "/login_register") {
      e.preventDefault();
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      navigate('/');
      navigate(0);
    }
    // console.log("LINK::", link);
    // if(!link.includes("login_register")) {
    //   return <Navigate to={link} replace />
    // } else {
    //   console.log("Logging out")
    //   localStorage.removeItem("token");
    //   localStorage.removeItem("userId");
    //   navigate(0);
    //   navigate('/');
    // }
  }

  return (
    <div className="col-lg-3">
      <ul className="account-nav">
        {dashboardMenuItems.map((elm, i) => (
          <li key={i}>
            <Link
              onClick={(e) => onClickHandler(e, elm.href)}
              to={elm.href}
              className={`menu-link menu-link_us-s ${
                pathname == elm.href ? "menu-link_active" : ""
              } `}
            >
              {elm.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
