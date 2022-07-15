import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import "./AnimationCard.css";

function AnimationCard({ item }) {
  return (
    <Popup
      trigger={
        <div
          className="card-wrapper mb-5 bg-white "
          //   onClick={() => setIsOpen(!isOpen)}
        >
          <img
            className="object-contain  h-48 w-96"
            src={item.image}
            alt="Country"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.category}</p>

            {/* <p className="text-gray-700 text-base">asd</p> */}
          </div>
          <div className="px-6 pt-4 animate-pulse">
            <span className="card-span-style">{item.price} TL</span>
          </div>
        </div>
      }
      modal
      nested
    >
      {(close) => (
        <div
          className="header min-w-full sm:grid grid-cols-2 "
          //   onClick={() => setIsOpen(!isOpen)}
        >
          {/* <button className="close" onClick={close}>
            &times;
          </button> */}
          <img
            className="object-contain h-48 w-96 sm:h-96 w-192"
            src={item.image}
            alt="Country"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.title}</div>
            <p className="text-gray-700 text-base">{item.category}</p>
            <p className="text-gray-700 text-base">{item.description}</p>

            {/* <div className="px-6 pt-4 animate-pulse"> */}
            <div className="animation-card-span-style">{item.price} TL</div>
            {/* </div> */}
          </div>
        </div>
      )}
    </Popup>
  );
}

export default AnimationCard;
