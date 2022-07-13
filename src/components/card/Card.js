import React from "react";
import "./Card.css";

function Card({ item }) {
  return (
    <div className="card-wrapper ">
      <img className="object-contain  h-48 w-96" src={item.image} alt="Country" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.category}</p>
        <p className="text-gray-700 text-base">{item.description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="span-style">{item.price} TL</span>
      </div>
    </div>
  );
}

export default Card;
