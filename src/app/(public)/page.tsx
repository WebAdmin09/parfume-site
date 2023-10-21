
import request from '@/api'
import NewsCard from '@/components/cards/newsCard'
import NewsType from '@/types/news'
import HomePage from './home/page'
import axios from 'axios'
// import '@/global.css'
import { Fragment } from 'react'
import CategoryCard from '@/components/cards/CategoryCard'
import CategoryType from '@/types/category'

const Home = async () => {
  try {
    // const { data } = await request.get<NewsType[]>('last-products')

    const { data } = await request.get<CategoryType[]>("category");

    // const { data }: AxiosResponse<NewsType[]> = await request.get("/last-products");


    return (
      <Fragment>
        <main className='container'>
          <section className='home__section'>
            <HomePage />
          </section>
          <section className='news__section'>
            <div className="new__wrapper">
              <h1 className='news__heading'><span className='news_span'>News</span> <i>Products</i></h1>
              {/* <div className="new__cards">
                {data.map((news) => (
                  <NewsCard key={news._id} {...news} />
                ))}
              </div> */}
            </div >
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