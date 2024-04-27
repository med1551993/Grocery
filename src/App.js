import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Categories />
      <Products />
      <About />
      <Contact />
    </div>
  );
}

export default App;
