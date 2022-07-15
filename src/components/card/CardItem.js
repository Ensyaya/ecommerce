import React, { useState } from "react";
import "./CardItem.css";

function CardItem({ item }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="card-wrapper mb-5 bg-white "
      onClick={() => setIsOpen(!isOpen)}
    >
      <img
        className="object-contain  h-48 w-96"
        src={item.image}
        alt="Country"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.title}</div>
        <p className="text-gray-700 text-base">{item.category}</p>
        {isOpen && (
          <p className="text-gray-700 text-base">{item.description}</p>
        )}
      </div>
      <div className="px-6 pt-4 animate-pulse">
        <span className="card-span-style">{item.price} TL</span>
      </div>
    </div>
  );
}

export default CardItem;
