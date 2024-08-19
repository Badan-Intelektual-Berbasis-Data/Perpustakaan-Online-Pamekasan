import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";


async function checkToken() {
  
  const access_token = localStorage.getItem("access_token");
  const refresh_token = localStorage.getItem("refresh_token")

  if (!access_token && !refresh_token) return false
  

  return await fetch(`${import.meta.env.BASE_API_URL}/token/verify/`, {
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

      return false
    })
}


async function getToken(credentials) {
  return await fetch(`${import.meta.env.VITE_BASE_API_URL}/token/refresh/`, {
    method: 'post',
    headers: {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify({
      refresh: credentials,
    })
  })
    .then(res => {
      if (res.status == 200) return res.json

      return 
    })
    .then(data => data ? data.token : false)
}



export default function useAuth(onFailed="/login") {
  
  const navigate = useNavigate();
  

  useEffect(() => {
    checkToken() 
      .then(status => {
      
        if (!status) return navigate(onFailed)
    })
  }, []);


}
