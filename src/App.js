import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Deals />
      <Products />
      <Blog />
      <Contact />
    </div>
  );
}

export default App;
