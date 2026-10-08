function OutfitCard({ title, product, onSelect }) {
  return (
    <div className="outfit-card">
      <h3>{title}</h3>

      {product ? (
        <>
          <img src={product.image} alt={product.name} />

          <p>{product.name}</p>

          <p>₹{product.price}</p>

          <button onClick={() => onSelect(product)}>
            Change
          </button>
        </>
      ) : (
        <p>No item selected</p>
      )}
    </div>
  );
}

export default OutfitCard;