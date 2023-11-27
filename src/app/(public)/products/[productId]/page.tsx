import request from "@/api"
import MetadataParams from "@/types/dynamic-metadata"
import Params from "@/types/dynamic-params"
import ImageType from "@/types/image"
import ProductType from "@/types/product"
import Image from "next/image"
import '../product.css'

async function getProductwithid({
  params: { productId },
}: MetadataParams) {
  const { data } = await request.get<ProductType>(`product/${productId}`)
  return {
    title: data.title,
    price: data.price
  }
}
const Product = async ({ params: { productId } }: Params) => {
  const { data } = await request.get<ProductType>(`product/${productId}`);
  const {
    data: { price, products, image },
  } = await request.get<{ price: number; image: ImageType; products: ProductType[] }>(`product`, {
    params: { category: productId },
  });
  console.log(price);

  return (
    <div className="container">
      <div className="product__item">
        <Image
          className="product__img"
          src={data.image.url}
          alt={data.title}
          width={200}
          height={200} />
        <span className="product__price">{price}</span>
      </div>
    </div>
  )
}

export default getProductwithid;