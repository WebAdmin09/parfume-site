import { useAppDispatch, useAppSelector } from '@/redux/hooks'
import { getProductCard } from '@/redux/slices/NewSlice';
import Image from 'next/image';
import { useEffect, useState } from 'react'
import './news.css'
const News = () => {

    const { ProductCard, loading } = useAppSelector((state) => state.News);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getProductCard());
    }, [dispatch]);

    return (
        <div className="new__wrapper">
            <div className="container">
                <div className="new__cards">

                    <div className="new__cards-item">
                        {
                            // ProductCard.map((news) => (
                            //     <Image key={news.id} src={news.image} alt={news.name} />
                            //     // <h3 className="new__card-h3">{name}</h3>
                            // ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News