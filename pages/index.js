import Link from 'next/link'
import Layout from '../components/Layout'
import { API_URL } from '@/config/index'
// import BlogItem from '@/components/BlogItem'

export default function Home({ blogs }) {

    return (
        <Layout>
            {blogs.length === 0 && <h3>No blogs to show</h3>}

            {blogs.map((blg) => (
                <h3 key={blg.id}>{blg.name}</h3>
            ))}
        </Layout>
    )
}

export async function getStaticProps() {
    const res = await fetch(`${API_URL}/api/blogs`)
    const blogs = await res.json()

    return {
        props: {blogs},
        revalidate: 1,
    }
}
