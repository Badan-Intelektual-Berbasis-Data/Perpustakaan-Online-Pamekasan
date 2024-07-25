import React from "react";
import Card from "../atoms/Card";

export default function CardGroup({ title, data = [], type = "horizontal" }) {
    
    const horizontalDisplay = "grid grid-cols-2 md:grid-cols-7 gap-4"
  
    return (
    <div className="overflow-x-auto">
      <h3 className="text-2xl font-bold text-left mb-6 ml-6 mr-6">{title}</h3>
      <div className="flex">
        {data && data.map((item, index) => <Card {...item} key={index} />)}
      </div>
    </div>
  );
}
