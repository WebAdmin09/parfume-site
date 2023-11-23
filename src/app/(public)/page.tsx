// 'use client'
import request from '@/api'
import HomePage from './home/page'
import axios from 'axios'
import { Fragment } from 'react'
import CategoryCard from '@/components/cards/CategoryCard'
import CategoryType from '@/types/category'
import NewsPage from './news/page'

const Home = async () => {
  try {
    const {data} = await request.get<CategoryType[]>("category");
    return (
      <Fragment>
        <main className='container'>
          <section className='home__section'>
            <HomePage />
          </section>
          <section className='news__section'>
            <NewsPage />
          </section>
          <section>
            <h1 className="category__card-heading"><i>Products Categories</i></h1>
            <div className="category__cards-wrapper">
              {data.map((category) => (
                <CategoryCard key={category._id} {...category} />
              ))}
            </div>
          </section>
        </main>
      </Fragment>
    )
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data);
    } else {
      // throw new Error((error as Error).message);
    }
  }

}

export default Home;