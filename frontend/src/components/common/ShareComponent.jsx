/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ShareComponent({ title = "title" }) {
  const { pathname } = useLocation();

  const [fullUrl, setFullUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = `${window.location.protocol}//${window.location.host}${pathname}`;
      setFullUrl(currentUrl);
      // console.log("currentUrl : ");
      // console.log(currentUrl);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const shareContent = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: title,
          url: fullUrl,
        });
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that do not support the Web Share API
      alert("Web Share API not supported in this browser.");
    }
  };
  return (
    <a href="#" onClick={shareContent} className="menu-link menu-link_us-s ">
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <use href="#icon_sharing" />
      </svg>
      <span>Share</span>
    </a>
  );
}
