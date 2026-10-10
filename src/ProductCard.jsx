
import { useEffect } from "react";

function ProductCard({
  productName,
  price,
  quantity,
  selectedColor,
  deliveryCity,
}) {
  useEffect(() => {
    const previousTitle = document.title;

    document.title =
      `${productName} | ${selectedColor} | Cart: ${quantity}`;

    return () => {
      document.title = previousTitle;
    };
  }, [productName, selectedColor, quantity]);

  const total = quantity * price;

  return (
    <section className="product-card">
      <div className="product-image">
        <div className={`mouse mouse-${selectedColor.toLowerCase()}`}>
          <div className="mouse-wheel" />
        </div>
        <p>{selectedColor} Wireless Mouse</p>
      </div>

      <div className="product-info">
        <h2>{productName}</h2>
        <p><strong>Price:</strong> ₹{price}</p>
        <p><strong>Colour:</strong> {selectedColor}</p>
        <p><strong>Deliver to:</strong> {deliveryCity || "Not entered"}</p>
        <p><strong>Cart Quantity:</strong> {quantity}</p>
        <p><strong>Total Amount:</strong> ₹{total}</p>
        <p className={quantity > 0 ? "success" : "empty"}>
          <strong>Status:</strong>{" "}
          {quantity > 0
            ? "Product added to cart"
            : "Cart is empty"}
        </p>
      </div>
    </section>
  );
}

export default ProductCard;
