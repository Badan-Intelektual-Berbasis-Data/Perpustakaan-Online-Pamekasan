import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";


async function checkToken() {
  
  const access_token = localStorage.getItem("access_token");
  // const refresh_token = localStorage.getItem("refresh_token")

  if (!access_token && !refresh_token) return
  

  await fetch("http://127.0.0.1:8000/api/token/verify/", {
    method: 'post',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      token: access_token,
    })
  })
    .then(res => console.log(res))
}


async function getToken(password) {
  await fetch("http://127.0.0.1:8000/api/verify/", {
    method: 'post',
    body: {
      token: access_token,
    }
  })
    .then(res => console.log(res))
}



export default function UserAuthentication({ children }) {
  
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == "/login") {
      if (localStorage.getItem("access_token")) {
        navigate("/profile")
      }
    } else if (location.pathname == "/register") {
      navigate('/register')
    } else if (location.pathname == "/profile") {
      checkToken()
    }
  }, []);

  return <>{children}</>;
}
