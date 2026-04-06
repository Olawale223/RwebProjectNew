import React from 'react'
import Layoutone from '../Layout/Layoutone';
import productContent from './ProductConstant';
import ProductCard from './Minor Components/ProductCard';
import pd1 from '../Assets/FoodCourt/pd1.jpg'
import pd2 from '../Assets/FoodCourt/pd2.jpg'
import pd3 from '../Assets/FoodCourt/pd3.png'
import pd4 from '../Assets/FoodCourt/pd4.png'
import pd5 from '../Assets/FoodCourt/pd5.png'
import pd6 from '../Assets/FoodCourt/pd6.png'
import pd7 from '../Assets/FoodCourt/pd7.jpeg'
import { useCart } from './CartContext';






 function Product({}) {
  const images = [pd1,pd2,pd3,pd4,pd5,pd6,pd7];

  const { addToCart } = useCart();
    

    return (
      <Layoutone>
        {productContent.map((content, index) => (
          <ProductCard
            key={index}
            image={images[index]}
            textHead={content.textHead}
            textBody={content.textBody}
            textFoot={content.textFoot}
             onAddToCart={() =>
            addToCart({
              id: index + 1,
              image: images[index],
              textHead: content.textHead,
              textFoot: content.textFoot,
              price: 2000, // Example price
            })}
          />
        ))}
      </Layoutone>
    );
  
}
export default Product;