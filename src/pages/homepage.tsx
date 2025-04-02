import { useEffect, useState } from "react";
import getAllCategories from "../services/CategoryService.tsx";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  image: string;
}

interface CarouselArrowProps {
  onClick: () => void;
  direction: "prev" | "next";
}

const Homepage: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  const CarouselArrow: React.FC<CarouselArrowProps> = ({
    onClick,
    direction,
  }) => (
    <button
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 z-10 p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-all duration-300 ${
        direction === "prev" ? "left-4" : "right-4"
      }`}
    >
      {direction === "prev" ? (
        <FaArrowLeft className="w-6 h-6" />
      ) : (
        <FaArrowRight className="w-6 h-6" />
      )}
    </button>
  );

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching the categories:", error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold pt-3% pl-2%">Leaderboard</h1>
      <div></div>

      <h1 className="text-5xl font-bold pt-3% pl-2%">Categories</h1>

      <Carousel
        centerMode
        centerSlidePercentage={25}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
        renderArrowPrev={(onClickHandler, hasPrev) =>
          hasPrev && <CarouselArrow onClick={onClickHandler} direction="prev" />
        }
        renderArrowNext={(onClickHandler, hasNext) =>
          hasNext && <CarouselArrow onClick={onClickHandler} direction="next" />
        }
      >
        {categories.slice(0, 5).map((category) => (
          <div
            key={category.id}
            className="flex flex-col p-20% pt-10% items-center w-full h-30%"
          >
            <img
              src="/sample.png"
              alt={category.name}
              className="object-cover"
            />
            <h2 className="text-center text-xl font-bold uppercase break-words w-full mt-2">
              {category.name}
            </h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Homepage;
