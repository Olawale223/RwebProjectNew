import { useRef } from 'react';
import Layouttwo from '../Layout/Layouttwo';
import SlotComponent from './Minor Components/SlotComponent';
import roleContent from './Roles';
import i0005 from '../Assets/FoodCourt/i0005.jpg';
import i0006 from '../Assets/FoodCourt/i0006.jpg';
import i0007 from '../Assets/FoodCourt/i0007.jpg';
import i0008 from '../Assets/FoodCourt/i0008.jpg';
import i0029 from '../Assets/FoodCourt/i0029.jpg';
import i0023 from '../Assets/FoodCourt/i0023.jpg';
import i0024 from '../Assets/FoodCourt/i0024.jpg';
import i0025 from '../Assets/FoodCourt/i0025.jpg';
import i0021 from '../Assets/FoodCourt/i0021.jpg';
import i0038 from '../Assets/FoodCourt/i0038.jpg';
import i0031 from '../Assets/FoodCourt/i0031.jpg';
import i0032 from '../Assets/FoodCourt/i0032.jpg';
import i0033 from '../Assets/FoodCourt/i0033.jpg';
import i0034 from '../Assets/FoodCourt/i0034.jpg';
import i0035 from '../Assets/FoodCourt/i0035.jpg';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RoleCard() {
    const images = [i0005, i0006, i0007, i0008, i0021, i0029, i0023, i0024, i0025, i0038, i0031, i0032, i0033, i0034, i0035];

    const settings = {
        dots: false,
        infinite: true,
        speed: 1500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 700,
        swipe: true,
        draggable: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2 }
            },
            {
                breakpoint: 600,
                settings: { slidesToShow: 1 }
            }
        ]
    };

    const sliderRef = useRef(null);

    return (
        <Layouttwo>
            <div className="draggable-container">
                <Slider {...settings} ref={sliderRef}>
                    {roleContent.map((content, index) => (
                        <SlotComponent
                            key={index}
                            image={images[index]}
                            name={content.name}
                            role={content.role}
                        />
                    ))}
                </Slider>
            </div>
        </Layouttwo>
    );
}

export default RoleCard;