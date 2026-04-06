
function CartItem({ item, onIncrease, onDecrease,}) {
  return (
    <div className="cart-item">
      <img src={item.image} alt={item.textHead} style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 8 }} />
      <div className="cart-item-details">
        <h4>{item.name || "No name found"}</h4>
        <p>{item.textFoot}</p>
        <div className="cart-item-controls">
          <button onClick={onDecrease} disabled={item.quantity <= 1}>-</button>
          <span>{item.quantity}</span>
          <button onClick={onIncrease}>+</button>
        </div>
        <div className="cart-item-price">₦{item.price * item.quantity}</div>
      </div>
    </div>
  );
}

export default CartItem;
