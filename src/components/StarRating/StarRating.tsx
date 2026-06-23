import { useState } from 'react';
import './StraRating.css'
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="star-rating">
            {[...Array(5)].map((star, index) => {
                index +=1;

                return (
                    <FaStar
                    key={index}
                    className={index <= (hover || rating) ? 'on' : 'off'}
                    onClick={() => setRating(index)}
                    onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}
                    size={20}
                    color={index <= (hover || rating) ? '#ffd700' : '#ffffff'}
                    />
                )
            })}
        </div>
    )
}

export default StarRating