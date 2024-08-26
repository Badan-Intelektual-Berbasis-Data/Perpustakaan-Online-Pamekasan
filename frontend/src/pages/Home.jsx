import React, { Suspense, useEffect, useState } from "react";
import CardGroupSlide from "../components/molecules/CardGroupSlide";
import Banner from "../components/atoms/Banner";
import CardGroupSlideSkeleton from "../components/skeletons/CardGroupSlideSkeleton";
import CardGroupGrid from "../components/molecules/CardGroupGrid";
import useDebounce from "../hooks/useDebounce"

export default function Home() {
  const [categories, setCategories] = useState([])


  useDebounce(() => {
    return async () => {
      
      await fetch(`${import.meta.env.VITE_BASE_API_URL}/books/category?mixed=true`)
        .then((res) => res.json())
        .then((data) => setCategories(data))
    }
  }, [])


  return (
    <div>
      <Banner />
      <div className="space-y-20 py-12">
        {!categories && (
          <>
            <CardGroupSlideSkeleton />
            <CardGroupSlideSkeleton />
          </>
        )}
        { categories && categories.map((category, index) => (
          <Suspense fallback={<CardGroupSlideSkeleton />}>
            <CardGroupSlide id={category.id} title={category.name} key={index} />
          </Suspense>
        ))
        }
        
        <CardGroupGrid title="Lainnya"/>
       
      </div>
    </div>
  );
}
