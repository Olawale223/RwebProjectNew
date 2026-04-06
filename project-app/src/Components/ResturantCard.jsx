import Layoutone from '../Layout/Layoutone'
import image1 from '../Assets/FoodCourt/image1.jpeg';
import image3 from '../Assets/FoodCourt/image3.jpeg';
import image7 from '../Assets/FoodCourt/image7.jpeg';
import image2 from '../Assets/FoodCourt/image2.jpeg';
import image5 from '../Assets/FoodCourt/image5.jpg';
import image6 from '../Assets/FoodCourt/image6.jpeg';
import image8 from '../Assets/FoodCourt/image8.jpeg';
import image9 from '../Assets/FoodCourt/image9.jpg';
import image11 from '../Assets/FoodCourt/image11.jpg';
import textContent from './Constants.jsx';
import CardComponent from './Minor Components/CardComponent'
import { useNavigate } from 'react-router-dom';

function ResturantCard() {
  const navigate = useNavigate();
  const images = [image1, image2, image3, image7, image5, image6, image8, image9, image11];

  return (
    <Layoutone>
      {textContent.map((content, index) => (
        <CardComponent
          key={index}
          image={images[index]}
          textHead={content.textHead}
          textFoot={content.textFoot}
          onClick={() => navigate('/product')}
          
        />
      ))}
    </Layoutone>
  );
}

export default ResturantCard
