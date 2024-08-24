import React, { useEffect, useState } from 'react'
import LoanCard from '../atoms/LoanCard'

export default function LoansSection() {
  
    const [data, setData] = useState([])

    const getLoanData = async () => {
        const user_id = sessionStorage.getItem("user_id")

        if (!user_id) return

        await fetch(`${import.meta.env.VITE_BASE_API_URL}/loans/loan/?user=${user_id}`)
            .then(res => res.json())
            .then(data => setData(data))
    }

    useEffect(() => {
        getLoanData()
    }, [])
  
    return (
    <div className='px-28 flex-1'>
        <h1 className="text-2xl text-medium">Peminjaman</h1>
        <div className='flex flex-col mt-12'>
            {data && data.map((loanItem, index) => (
                <LoanCard data={loanItem} key={index}/>
                
            ))

            }
            
        </div>
    </div>
  )
}
