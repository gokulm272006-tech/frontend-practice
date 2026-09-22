import "./ProductCard.css";


const ProductCard = () => {
  return (
    <div className="product-container">


      {/* Image from public folder */}
      <img
        src="/product.jpg"
        alt="Public Product"
        className="product-image"
      />

      <h2>Smart Watch</h2>

      <p className="price">₹2,999</p>

      <button className="buy-button">
        Buy Now
      </button>

    </div>
  );
};

export default ProductCard;