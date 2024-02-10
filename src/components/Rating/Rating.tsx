import { useRef, useState } from "react";
import { CiStar } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

type RatingProps = {
  numberOfStars?: number;
};

const Rating = ({ numberOfStars = 5 }: RatingProps) => {
  const [rating, setRating] = useState<number>(0);
  const ratingRef = useRef<null | HTMLSpanElement>(null);

  const rate = (index: number) => {
    setRating(index + 1);
  };

  const handleMouseEnter = (index: number) => {
    
  }
  
  return (
    <div className="flex">
      {[...Array(numberOfStars)].map((_, index) => (
        <span
          key={index}
          className="cursor-pointer hover:scale-125 transition-all duration-100 ease-in-out"
          onMouseEnter={() => handleMouseEnter(index)}
          onClick={() => rate(index)}>
          {rating > index ? <FaStar size={50} color="yellow" /> : <CiStar size={50} />}
        </span>
      ))}
    </div>
  );
};
export default Rating;
