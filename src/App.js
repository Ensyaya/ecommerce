// import axios from "axios";

import Card from "./components/card/Card";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="bg-slate-100">
      <Header />
      <div className="md:container md:mx-auto p-8 page-content ">
        <Card />
      </div>
      <Footer />
    </div>
  );
}

export default App;
