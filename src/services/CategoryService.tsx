import axios, { AxiosResponse } from "axios";
import TokenService from "./TokenService";

const hostname = "http://localhost:8078/category-service";

interface Category {
  id: number;
  name: string;
  image: string;
}

function getAllCategories(): Promise<Category[]> {
  return axios
    .get<Category[]>(`${hostname}/category/getAll`)
    .then((response: AxiosResponse<Category[]>) => response.data);
}

export default getAllCategories;
