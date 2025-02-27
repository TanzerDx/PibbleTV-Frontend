import { useEffect, useState } from "react";
import getAllCategories from "./services/CategoryService.tsx";

interface Category {
  id: number;
  name: string;
  image: string;
}

const App: React.FC = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    getAllCategories()
      .then((data) => setCategories(data))
      .catch((error) => console.error("Error fetching the categories:", error));
  }, []);

  return (
    <div>
      <h1 className="text-5xl font-bold">Categories</h1>
      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            <h2>{category.name}</h2>
            <img src={category.image} alt={category.name} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
