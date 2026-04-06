import './CardComponent.css';
import { toast } from 'react-toastify';


export default function ProductCard({ image, textHead, textBody, textFoot, onClick, onAddToCart}) {
  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart();
      toast.success(`${textHead} added to cart!`, { position: 'top-right', autoClose: 2000 });
    }
  };
  return (
    <div className="product-card" onClick={onClick}>
      <div className='product-card-image'>
      <img src={image} alt={textHead} />
      </div>
      <div className="card-content">
        <h3>{textHead}</h3>
        <h3>{textBody}</h3>
        <p>{textFoot}</p>
        {onAddToCart && (
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        )}

      </div>
    </div>
  )
}
