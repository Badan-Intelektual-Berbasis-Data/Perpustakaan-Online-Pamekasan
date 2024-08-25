import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

async function checkToken() {
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token");

  if (!access_token && !refresh_token) return false;

  return await fetch(`${import.meta.env.VITE_BASE_API_URL}/token/verify/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: access_token,
    }),
  }).then((res) => {
    // Access token is expired

    if (res.status == 401) {
      const newAccessToken = getToken(refresh_token);

      if (!newAccessToken) return false;

      newAccessToken.then((data) =>
        localStorage.setItem("access_token", data.access)
      );

      return true;
    }

    return true;
  });
}

async function getToken(credentials) {
  return await fetch(`${import.meta.env.VITE_BASE_API_URL}/token/refresh/`, {
    method: "post",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      refresh: credentials,
    }),
  }).then((res) => {
    if (res.status == 200) return res.json();

    return false;
  });
}

export default function useAuth(
  onSuccess = "/profile",
  onFailed = "/login",
  autoRedirect = true
) {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkToken().then((status) => {
      

      if (status) {
        setAuthenticated(true);
      } else {
        setAuthenticated(true);
      }

      if (autoRedirect) {
        if (status) {
          navigate(onSuccess)
        } else{
          navigate(onFailed)
        }
      }


    });
  }, []);

  return authenticated;
}
