import { BrowserRouter, Routes, Route, Link } from "react-router-dom"

// pages
import Home from "./pages/Home"
import AddProduct from "./pages/AddProduct"
import Update from "./pages/Update"


function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>Inventory Tracker</h1>
      </nav>

      <div id="navigation">
        <Link to="/">Home</Link>
        <Link to="/add">Add Product</Link>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
