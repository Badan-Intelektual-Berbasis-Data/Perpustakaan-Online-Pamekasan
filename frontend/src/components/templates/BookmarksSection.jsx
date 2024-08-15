import React, { useEffect, useState } from "react";
import Card from "../atoms/Card";

export default function BookmarksSection() {
  const [data, setData] = useState({
    id: null,
    books: [{
      title: '',
      author_name: '',
      book_image_url: '',
      desc: ''
    }],
  });

  useEffect(() => {
    const access_token = localStorage.getItem("access_token")
    console.log(`Bearer ${access_token}`)

    return async () => {
      await fetch("http://127.0.0.1:8000/api/users/bookmark/1/", {
        headers: {
          'Authorization' : `Bearer ${access_token}`
        }
      })
        .then((res) => res.json())
        .then((data) => console.log(data))
    };
  }, []);

  return (
    <div className="flex-1 px-24">
      <h1 className="text-2xl text-medium">Bookmark</h1>
      <div className={`grid mt-12 h-full ${data.id ? 'grid-cols-4 gap-x-8 gap-y-12' : 'place-items-center'}`}>
        {!data.id && 
          <h1 className="text-xl text-gray-400">Anda belum menambah bookmark</h1>
        }
        {data.id && data.books.map((item, index) => (
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
  );
}
