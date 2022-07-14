import { useQuery } from "react-query";
// import axios from "axios";

import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  const { isLoading, error, data } = useQuery("repoData", () =>
    fetch("https://fakestoreapi.com/products").then((res) => res.json())
  );

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div className="bg-slate-100">
      <Header />
      <div className="md:container md:mx-auto p-8 page-content ">
        <div className="grid grid-cols-3 gap-4">
          {data.map((item, key) => (
            <Card key={key} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
