import Loading from "@/app/loading";
import ProductType from "@/types/product";
import { Fragment } from "react";
import ProductCard from "../cards/ProductCard";
import './share.css'
interface ProductsRowProps {
  loading?: boolean;
  products: ProductType[];
}

const ProductsRow = ({ loading, products }: ProductsRowProps) => {
  return (
    <Fragment>
      <div className="product__row">
        {loading ? (
          <div><Loading /></div>
        ) : (
          products.map((product) => (
            <ProductCard key={product?._id} {...product} />
          ))
        )}
      </div>

    </Fragment>
  );
};

export default ProductsRow;
