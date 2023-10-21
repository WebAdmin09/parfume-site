import NewsType from "@/types/news"
import Image from "next/image"
import Link from "next/link"


const NewsCard = ({ title, image, _id, }: NewsType) => {
    return (
        <div className="new__cards-item">
            <Image
                className='imgcards'
                src={image?.url}
                alt={title}
                width={500}
                height={300}
                objectFit="cover"
            />

            <Link href={`/last-products/${_id}`}>
                <h3 className="new__card-h3">{title}</h3>
            </Link>
        </div>
    )
}

export default NewsCard