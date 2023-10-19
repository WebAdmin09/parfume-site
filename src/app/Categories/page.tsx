import Image from "next/image"
import image from '../../assets/cardsimg.jpg'
import './categories.css'
const CategoriesProduct = () => {
    return (
        <div className="container">
            <div className="main__categories">
                <h1>Categories Products</h1>
                <div className="main__categories-card">
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
        </div>
    )
}

export default CategoriesProduct