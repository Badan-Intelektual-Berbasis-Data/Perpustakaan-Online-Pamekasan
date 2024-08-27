import React, { useEffect, useState } from "react";
import Card from "../atoms/Card";
import CardGroupGridSkeleton from '../skeletons/CardGroupGridSkeleton'

export default function CardGroupGrid({ title, className="" }) {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async() => {
      await fetch(`${import.meta.env.VITE_BASE_API_URL}/books/book/`)
        .then(res => res.json())
        .then(data => setData(data))
    
    }

    getData()
  }, [])

  return (
    data.length >= 1 ? 
    <div className={className}>
        <h2 className="text-3xl font-semibold mb-8 px-20">{title}</h2>
        <div className="grid grid-cols-6 px-20 box-border gap-x-12 gap-y-10">
          {data &&
            data.map((item, index) => (
              <Card
              key={index}
              className="translate-x-[-614px]"
              title={item.title}
              author={item.author_name}
              image={item.book_image_url}
              desc={item.desc}
              id={item.id}
            />
            ))}
        </div>
    </div>
    :
    <CardGroupGridSkeleton />
  );
}
