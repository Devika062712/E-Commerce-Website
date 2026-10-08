import { useState } from "react";
import products from "../data/products";
import OutfitCard from "../components/OutfitCard";
import { useCart } from "../context/CartContext";

function BuildOutfit() {
  const tops = products.filter(
    (product) => product.type === "top"
  );

  const bottoms = products.filter(
    (product) => product.type === "bottom"
  );

  const shoes = products.filter(
    (product) => product.type === "shoes"
  );

  const accessories = products.filter(
    (product) => product.type === "accessory"
  );

  const [top, setTop] = useState(tops[0]);
  const [bottom, setBottom] = useState(bottoms[0]);
  const [shoe, setShoe] = useState(shoes[0]);
  const [accessory, setAccessory] = useState(accessories[0]);

  const { addToCart } = useCart();

  const total =
    top.price +
    bottom.price +
    shoe.price +
    accessory.price;

  const addCompleteOutfit = () => {
    addToCart(top);
    addToCart(bottom);
    addToCart(shoe);
    addToCart(accessory);

    alert("Complete outfit added to cart!");
  };

  return (
    <div className="page">
      <h1>Build Your Outfit ⭐</h1>

      <p>
        Choose one item from each category and create
        your complete look.
      </p>

      <div className="outfit-options">

        <div>
          <h2>Top</h2>

          {tops.map((product) => (
            <button
              key={product.id}
              className={
                top.id === product.id
                  ? "selected-option"
                  : ""
              }
              onClick={() => setTop(product)}
            >
              {product.name}
            </button>
          ))}
        </div>

        <div>
          <h2>Bottom</h2>

          {bottoms.map((product) => (
            <button
              key={product.id}
              className={
                bottom.id === product.id
                  ? "selected-option"
                  : ""
              }
              onClick={() => setBottom(product)}
            >
              {product.name}
            </button>
          ))}
        </div>

        <div>
          <h2>Shoes</h2>

          {shoes.map((product) => (
            <button
              key={product.id}
              className={
                shoe.id === product.id
                  ? "selected-option"
                  : ""
              }
              onClick={() => setShoe(product)}
            >
              {product.name}
            </button>
          ))}
        </div>

        <div>
          <h2>Accessory</h2>

          {accessories.map((product) => (
            <button
              key={product.id}
              className={
                accessory.id === product.id
                  ? "selected-option"
                  : ""
              }
              onClick={() => setAccessory(product)}
            >
              {product.name}
            </button>
          ))}
        </div>
      </div>

      <h2>Your Outfit</h2>

      <div className="outfit-preview">

        <OutfitCard
          title="Top"
          product={top}
          onSelect={setTop}
        />

        <OutfitCard
          title="Bottom"
          product={bottom}
          onSelect={setBottom}
        />

        <OutfitCard
          title="Shoes"
          product={shoe}
          onSelect={setShoe}
        />

        <OutfitCard
          title="Accessory"
          product={accessory}
          onSelect={setAccessory}
        />

      </div>

      <div className="outfit-total">
        <h2>Complete Outfit</h2>

        <h2>₹{total}</h2>

        <button
          className="main-btn"
          onClick={addCompleteOutfit}
        >
          Add Complete Outfit to Cart
        </button>
      </div>
    </div>
  );
}

export default BuildOutfit;