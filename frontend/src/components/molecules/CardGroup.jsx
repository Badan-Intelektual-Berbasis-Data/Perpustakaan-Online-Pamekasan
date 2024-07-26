import React from "react";
import Card from "../atoms/Card";

export default function CardGroup({ title, data = [], type = "horizontal" }) {
    
    const horizontalDisplay = "grid grid-cols-2 md:grid-cols-7 gap-4"
  
    return (
    <>
      <h3 className="text-3xl font-bold text-left mb-4">{title}</h3>
      <div className="flex gap-x-8">
        {data && data.map((item, index) => <Card {...item} key={index} />)}
      </div>
    </>
  );
}
