import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Product from "./pages/products/Product";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products" element={<Product />} />
          <Route path="/login" element={<h1>Login</h1>} />
          <Route path="/wishlist" element={<h1>Wishlist</h1>} />
          <Route path="/cart" element={<h1>cart</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
