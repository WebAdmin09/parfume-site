import CategoryType from "@/types/category";
import Image from "next/image";
import Link from "next/link";
import './cards.css'


const CategoryCard = ({ name, image, _id }: CategoryType) => {
  return (
    <div className="category-card">
      <div className="category-card-item" style={{ height: "200px" }}>
        <div className="hover08">
          <figure className="hover08">
            <Image
              className="categorycard"
              src={image?.url}
              width={250}
              height={250}
              alt={name}
              placeholder="blur"
              blurDataURL="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
            // fill
            />
          </figure>

        </div>
        <Link href={`/categories/${_id}`}>
          <h3 className="h3">{name}</h3>
        </Link>
      </div>
    </div>
  );
};

export default CategoryCard;
