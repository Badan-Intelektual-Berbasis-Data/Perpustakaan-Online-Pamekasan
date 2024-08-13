import React, { useEffect, useState } from "react";
import Card from "../atoms/Card";

export default function BookmarksSection() {
  const [data, setData] = useState({
    id: 0,
    books: [{
      title: '',
      author_name: '',
      book_image_url: '',
      desc: ''
    }],
  });

  useEffect(() => {
    return async () => {
      await fetch("http://127.0.0.1:8000/api/users/bookmark/1/")
        .then((res) => res.json())
        .then((data) => setData(data));
    };
  }, []);

  return (
    <div className="flex-1 px-24">
      <h1 className="text-2xl text-medium">Bookmark</h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-12 mt-12">
        {data.books.map((item, index) => (
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
