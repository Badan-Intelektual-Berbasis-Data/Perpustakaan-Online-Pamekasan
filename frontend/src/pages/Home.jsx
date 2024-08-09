import React, { useEffect, useState } from "react";
import CardGroupSlide from "../components/molecules/CardGroupSlide";
import Banner from "../components/atoms/Banner";
// import CardGroupGrid from "../components/molecules/CardGroupGrid";

export default function Home() {
  const [categories, setCategories] = useState([])


  useEffect(() => {
    return async () => {
      await fetch('http://127.0.0.1:8000/api/books/category?mixed=true')
        .then((res) => res.json())
        .then((data) => setCategories(data))
    }
  }, [])

  return (
    <div>
      <Banner />
      <div className="space-y-16 py-12">
        { categories && categories.map((category, index) => (
          <CardGroupSlide id={category.id} title={category.name} key={index} />
        ))
        }
      </div>
    </div>
  );
}
