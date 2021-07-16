import Link from 'next/link'  
import Image from 'next/image'
import { Card } from 'react-bootstrap'
// import styles from './styles.module.css'

export default function Blogitem({blg}) {
    return (
        <div className="col-md-4 mt-2 mb-2 text-center">
            <Link href={`/blogs/${blg.slug}`}>
                <a className="card text-white border border-1">
                    <Image src={blg.image ? blg.image : '/images/event-default.png'} width={250} height={250} />
                    <Card.ImgOverlay className="h-100 d-flex flex-column justify-content-end">
                        <Card.Title>{blg.title}</Card.Title>
                    </Card.ImgOverlay>
                </a>
            </Link>
        </div>
    )
}
