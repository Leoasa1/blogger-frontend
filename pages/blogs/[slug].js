import Layout from '@/components/Layout'
import Image from 'next/image'
import {API_URL} from '@/config/index'

export default function slug({blg}) {
    return (
        <Layout>
            <div className="row justify-content-md-center pt-4 pb-2 text-start">
                <div className="form-group col-md-6 mt-4 mb-2">
                    <h1 className="fw-bold col pb-2">{blg.title}</h1>
                    <Image className="col align-self-center text-center" src={blg.image ? blg.image : '/images/event-default.png'} width={650} height={400} />
                    <p className="fw-light fs-5 mt-4">{blg.text}</p>
                </div>
            </div>
        </Layout>
    )
}


export async function getStaticPaths() {
    const res = await fetch(`${API_URL}/api/blogs`)
    const blogs = await res.json();

    const paths = blogs.map(blg => ({
        params: {slug: blg.slug}
    }))
    return {
        paths,
        fallback: true
    }
}

export async function getStaticProps({ params: {slug}}) {
    const res = await fetch(`${API_URL}/api/blogs/${slug}`)
    const blogs = await res.json()

    return {
        props: {
            blg: blogs[0]
        },
        revalidate: 1,
    }
}