import Image from 'next/image';
import './news.css'
import image from '../../assets/cardsimg.jpg'
const News = () => {
    return (
        <div className="new__wrapper">
            <div className="container">
                    <h1>News Product</h1>
                <div className="new__cards">
                    <div className="new__cards-item">
                        <Image className='imgcards' src={image} alt='name' />
                        <h3 className="new__card-h3">NameImg</h3>
                    </div>
                    <div className="new__cards-item">
                        <Image className='imgcards' src={image} alt='name' />
                        <h3 className="new__card-h3">NameImg</h3>
                    </div>
                    <div className="new__cards-item">
                        <Image className='imgcards' src={image} alt='name' />
                        <h3 className="new__card-h3">NameImg</h3>
                    </div>
                    <div className="new__cards-item">
                        <Image className='imgcards' src={image} alt='name' />
                        <h3 className="new__card-h3">NameImg</h3>
                    </div>
                    <div className="new__cards-item">
                        <Image className='imgcards' src={image} alt='name' />
                        <h3 className="new__card-h3">NameImg</h3>
                    </div>
                    <div className="new__cards-item">
                        <Image className='imgcards' src={image} alt='name' />
                        <h3 className="new__card-h3">NameImg</h3>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default News