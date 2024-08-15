import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


async function checkToken() {
  
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token")

  if (!access_token && !refresh_token) return false
  

  return await fetch("http://127.0.0.1:8000/api/token/verify/", {
    method: 'post',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      token: access_token,
    })
  })
    .then(res => {
      // Access token is expired
      if (res.status == 401) {
        if (!getToken(refresh_token)) return false

        return true
      }
    })
}


async function getToken(credentials) {
  return await fetch("http://127.0.0.1:8000/api/token/auth/", {
    method: 'post',
    body: JSON.stringify({
      refresh_token: credentials,
    })
  })
    .then(res => {
      if (res.status == 401) return null

      return res.json()
    })
    .then(data => data ? data.token : false)
}



export default function UserAuthentication({ children }) {
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/login" && location.pathname == "/register") {
      if (checkToken()) {
        navigate("/profile")
      }
    } else if (location.pathname == "/profile") {
      if (!checkToken()) {
        navigate("/login")
      }
    }
  }, []);

  return <>{children}</>;
}
