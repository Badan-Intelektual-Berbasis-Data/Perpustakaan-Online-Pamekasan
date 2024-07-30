import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function UserAuthentication({ children }) {
  const token = localStorage.getItem("token");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname == "/login") {
      navigate('/login')
    } else if (location.pathname == "/register") {
      navigate('/register')
    }
  }, []);

  return <>{children}</>;
}
