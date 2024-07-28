import React from "react";
import Card from "../atoms/Card";

export default function CardGroupGrid({ title, data=[] }) {
  return (
    <div>
        <h2 className="text-3xl font-semibold mb-4 px-20">{title}</h2>
        <div className="grid grid-cols-5 px-20 box-border gap-x-20 gap-y-10">
          {data &&
            data.map((item, index) => (
              <Card
                key={index}
                className="translate-x-[-614px]"
                {...item}
              />
            ))}
        </div>
    </div>
  );
}
