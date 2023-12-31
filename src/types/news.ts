import CategoryType from "./category";
import ImageType from "./image";

interface NewsType { 
    _id: string;
    title: string;
    checked: boolean;
    sold: number;
    price: number;
    description: string;
    quantity: number;
    category: CategoryType;
    image: ImageType;
    createdAt: string;
    updatedAt: string;
}

export default NewsType;
