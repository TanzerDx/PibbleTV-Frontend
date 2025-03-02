import { useEffect, useState } from "react";
import getAllCategories from "../services/CategoryService.tsx";

interface Category {
  id: number;
  name: string;
  image: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching the categories:", error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold pt-3% pl-2%">Categories</h1>
      <div className="flex flex-wrap p-2%">
        {categories.map((category) => (
          <div
            key={category.id}
            className="flex flex-col items-center m-4 w-12% h-1/5 mb-3% ml-4% mr-4%"
          >
            <img
              src="/sample.png"
              alt={category.name}
              className="h-100% w-100%"
            />
            <h2 className="text-center text-xl font-bold uppercase break-words w-full mt-2">
              {category.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
