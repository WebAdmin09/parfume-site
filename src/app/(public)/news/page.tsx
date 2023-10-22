'use client'
import request from "@/api"
import NewsCard from "@/components/cards/NewsCard"
import NewsType from "@/types/news"
import { Fragment, useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './news.css'

const NewsPage = () => {

    const [products, setProducts] = useState([] as NewsType[]);

    async function getLatestProducts() {
        try {
            const { data } = await request.get<NewsType[]>("last-products");
            setProducts(data);
        } catch (error) {
            console.error("Error fetching latest products: ", error);
        } finally {
        }
    }

    useEffect(() => {
        getLatestProducts();
    }, []);
    return (

        <Fragment>
            <div className="container">
                <div className="newspage__main">
                    <div className="newspage__wrapper">
                        <h1 className="newspage__heading">News Products</h1>
                        <div className="newspage__card">
                            <Swiper
                                spaceBetween={20}
                                slidesPerView={4}
                                autoplay={{ delay: 2000 }}
                                onSlideChange={() => console.log('slide change')}
                            // onSwiper={(swiper) => console.log(swiper)}
                            >
                                {products.map((product) => (
                                    <SwiperSlide key={product?._id}>
                                        <NewsCard {...product} />
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default NewsPage