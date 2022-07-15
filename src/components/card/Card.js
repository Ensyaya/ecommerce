import React from "react";
import { useQuery } from "react-query";
import AnimationCard from "./AnimationCard";

function Card() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );

  if (isLoading) return <div className="h-screen">Loading...</div>;

  if (error) return "An error has occurred: " + error.message;

  return (
    <main>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {data.map((item, key) => (
          <AnimationCard key={key} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Card;
