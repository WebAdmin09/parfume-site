import Image from "next/image";

import request from "@/api";
import CategoryType from "@/types/category";
import MetadataParams from "@/types/dynamic-metadata";
import Params from "@/types/dynamic-params";
import ProductsRow from "@/components/shares/ProductsRow";
import ProductType from "@/types/product";
import '../categories.css'
export async function generateMetadata({
  params: { categoryId },
}: MetadataParams) {
  const { data } = await request.get<CategoryType>(`category/${categoryId}`);

  return {
    title: data.name,
    description: data.name,
  };
}

const CategoryPage = async ({ params: { categoryId } }: Params) => {
  const { data } = await request.get<CategoryType>(`category/${categoryId}`);
  const {
    data: { total, products },
  } = await request.get<{ total: number; products: ProductType[] }>(`product`, {
    params: { category: categoryId },
  });

  return (
    <div className="container">
      <div className="categorypage">
        <Image
          className="categoryimg"
          src={data.image.url}
          width={250}
          height={200}
          alt={data.name}
          objectFit="contain" />
        <div className="item__text">
          <h2 className="h2__category">PRODUCT NAME</h2>
          <hr className="hr" />
          <span className="span__category">{data.name.split('lar')}</span>
        </div>
      </div>
      <div className="heading__item">
        <h1 className="heading__category">
          {data.name}
        </h1>
        <span className="total__category">All Products: ({total})</span>
      </div>
      <ProductsRow products={products} />
    </div>
  );
};

export default CategoryPage;
