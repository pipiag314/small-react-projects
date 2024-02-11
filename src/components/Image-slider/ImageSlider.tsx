import { useEffect, useState } from "react";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

type PhotoType = {
  alt_description: string;
  blur_hash: string;
  color: string;
  createdAt: string;
  description: string;
  likes: number;
  urls: {
    full: string;
    raw: string;
    small: string;
    thumb: string;
  };
};
type PhotosType = PhotoType[];

const ImageSlider = () => {
  const [photos, setPhotos] = useState<null | PhotosType>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(2);

  const photoOnSlide = photos?.filter((_, index) => index === currentSlide)[0];

  useEffect(() => {
    fetch(
      `https://api.unsplash.com/photos/?client_id=${
        import.meta.env.VITE_UNSPLASH_ACCESS_KEY
      }`
    )
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);

  const handleSliding = (where: "left" | "right") => {
    if (where === "left") {
      if (currentSlide === 0) return;
      setCurrentSlide(currentSlide - 1);
    }
    if (where === "right") {
      setCurrentSlide(currentSlide + 1);
    }
  };


  const changePhoto = (index: number) => {
    setCurrentSlide(index);
  }

  return (
    <div>
      <div>Images:</div>
      <div className="flex justify-center items-center relative">
        <button
          disabled={currentSlide === 0}
          onClick={() => handleSliding("left")}
          className={`absolute left-5 hover:bg-[rgba(0,0,0,0.3)] cursor-pointer w-[50px] h-[50px] flex justify-center items-center rounded-full ${
            currentSlide === 0 && "opacity-20 cursor-not-allowed"
          }`}>
          <BiLeftArrow />
        </button>
        <img
          key={photoOnSlide?.urls.raw}
          className="w-[400px] h-[400px] object-cover"
          src={photoOnSlide?.urls.full}
          alt={photoOnSlide?.alt_description}
        />
        <button
          disabled={currentSlide + 1 === photos?.length}
          onClick={() => handleSliding("right")}
          className={`absolute right-5 hover:bg-[rgba(0,0,0,0.3)] cursor-pointer w-[50px] h-[50px] flex justify-center items-center rounded-full ${
            currentSlide + 1 === photos?.length &&
            "opacity-20 cursor-not-allowed"
          }`}>
          <BiRightArrow />
        </button>
        <div className="absolute bottom-2 flex gap-2">
          {photos?.map((_, index) => (
            <button onClick={() => changePhoto(index)} className={`w-5 h-5 rounded-full bg-white ${index === currentSlide && "bg-[black]"}`}></button>
          ))}
        </div>
      </div>
    </div>
  );
};
export default ImageSlider;
