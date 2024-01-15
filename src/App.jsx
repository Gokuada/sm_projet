import "./App.css";
import MyFooter from "./components/Footer"; 
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Product from "./components/Product";
import Services from "./components/Services";
import Avantage from "./components/Avantage";
import About from "./components/About"


function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Avantage />
      <Services />
      <About />
      <Product />
      <Newsletter />
      <MyFooter />
    </>
  );
}

export default App;
