import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

export default function OrderCreate() {

    const location = useLocation()
    const navigate = useNavigate()

    const handleBorrow = async () => {
        const user_id = localStorage.getItem("user_id")
        const book = location.state["book"]
    
        const access_token = localStorage.getItem("access_token")

        const data = new URLSearchParams()
        data.append("book", book)
        data.append("user", user_id)
        
    
        await fetch(`${import.meta.env.VITE_BASE_API_URL}/loans/loan/`, {
          method: 'post',
          headers: {
            'Authorization' : `JWT ${access_token}`,
            'Content-Type' : 'application/x-www-form-urlencoded'
          },
          body: data.toString()
        })
          .then(res => {
            if (res.status == 201) {
                alert("Barhasil meminjam buku")
                navigate("/profile")
            }
        })
    
      } 

      useEffect(() => {
        handleBorrow()
      }, [])

  return (
    <div>Your order is being process...</div>
  )
}
