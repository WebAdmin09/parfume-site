import ProductType from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import './cards.css'
const ProductCard = ({ title, image, price, _id }: ProductType) => {
  return (
    <Fragment>
      <div className="product-card">
        <Image
          className="product__image"
          src={image?.url}
          alt={title}
          placeholder="blur"
          blurDataURL="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
          width={250}
          height={200}
          // fill
          objectFit="cover"
        />
        <div className="card__product-item">
          <span className="product__price ">Price: {price}</span>
          <Link href={`/products/${_id}`}>
            <h3>{title}</h3>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductCard;
