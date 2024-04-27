import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Blog from "./components/Blog"
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      {/*  <Categories /> */}
      <Deals />
      <Products />
     {/*  <About /> */}
     <Blog />
      <Contact />
    </div>
  );
}

export default App;
