"use client";

import ProductsRow from "@/components/shares/ProductsRow";
import request from "@/api";
import CategoryType from "@/types/category";
import ProductType from "@/types/product";
import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent, useEffect, useState } from "react";
import './product.css'
import Search from 'antd/es/input/Search'
const Products = () => {
  const router = useRouter();
  const search = useSearchParams();
  const [products, setProducts] = useState([] as ProductType[]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([] as CategoryType[]);
  const [category, setCategory] = useState(search.get("category") || "");
  const [data, setData] = useState([])
  useEffect(() => {
    const getProducts = async () => {
      try {
        setLoading(true);
        const {
          data: { total, products },
        } = await request.get<{ total: number; products: ProductType[] }>(
          "product",
          { params: { category: category || undefined } }
        );
        const { data } = await request.get("category");
        setCategories(data);
        setData(data.data)
        setProducts(products);
        setTotal(total);
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };
    getProducts();
  }, [category]);

  const handleCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setCategory(value);
    if (value === "") {
      router.push(`products`);
    } else {
      router.push(`products?category=${value}`);
    }
  };
  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const response = await request.get(`product?search=${e.target.value}`);
      setData(response.data)
      // console.log(response.data.products.title);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <section className="mian__product-section">
      <div className="container">
        <div className="header__search">
          <Search
            onChange={handleSearch}
            className='header__input'
            size="large"
            placeholder="Searching...." />
        </div>
        <div className="item__product">
          <span className="allproduct">All Products: {total}</span>
          <h1 className="heading__product">Products</h1>
          <div className="select">
            <select className="select__input" value={category} onChange={handleCategory}>
              <option value="">All</option>
              {categories.map((category) => (
                <option key={category._id} value={category._id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

        </div>
        <ProductsRow loading={loading} products={products} />
      </div>
    </section>
  );
};

export default Products;
