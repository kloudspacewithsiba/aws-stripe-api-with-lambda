import { useContextElement } from "@/context/Context";
import { Link } from "react-router-dom";

export default function User() {
  const { authenticated } = useContextElement();
  return (
    <>
      {authenticated.isAuthenticated ? (<>
        <Link to={`/account_dashboard`} style={{ display: "flex"}}>
      My account
    <svg
      style={{ marginLeft: "10px" }}
      className="d-block"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <use href="#icon_user" />
    </svg>
    </Link></>) : null}
    </>
  );
}
