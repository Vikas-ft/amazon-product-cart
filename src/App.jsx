
import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <section className="controls">
          <h2>Customize Your Order</h2>

          <label htmlFor="color">Choose Colour</label>
          <select
            id="color"
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option>Black</option>
            <option>Blue</option>
            <option>White</option>
          </select>

          <label htmlFor="city">Delivery Location</label>
          <input
            id="city"
            type="text"
            value={deliveryCity}
            onChange={(e) => setDeliveryCity(e.target.value)}
            placeholder="Enter your city"
          />

          <button onClick={() => setQuantity((q) => q + 1)}>
            Add to Cart
          </button>

          <button
            onClick={() => setQuantity((q) => Math.max(0, q - 1))}
            disabled={quantity === 0}
          >
            Remove One
          </button>

          <button onClick={() => setQuantity(0)}>
            Reset Cart
          </button>

          <button onClick={() => setShowProduct((show) => !show)}>
            {showProduct ? "Hide Product" : "Show Product"}
          </button>
        </section>

        {showProduct && (
          <ProductCard
            productName={productName}
            price={price}
            quantity={quantity}
            selectedColor={selectedColor}
            deliveryCity={deliveryCity}
          />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
