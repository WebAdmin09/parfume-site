import NewsType from "@/types/news"
import Image from "next/image"
import Link from "next/link"
import './cards.css'

const NewsCard = ({ title, image, _id, }: NewsType) => {
    return (
        <div className="new__cards">
            <div className="new__cards-item">
                <Image
                    className="newscard"
                    src={image?.url}
                    width={250}
                    height={250}
                    alt={title}
                    placeholder="blur"
                    blurDataURL="https://images.unsplash.com/photo-1541963463532-d68292c34b19?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D"
                // fill
                />

                <Link href={`/last-products/${_id}`}>
                    <h3 className="new__card-h3">{title}</h3>
                </Link>
            </div>
        </div>
    )
}

export default NewsCard