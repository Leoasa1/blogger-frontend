import Layout from '../components/Layout'
import { API_URL } from '@/config/index'
import BlogItem from '@/components/blogItem/Blogitem'

export default function Home({ blogs }) {

    return (
        <Layout>
            <div className="container">
                {blogs.length === 0 && <h3>No blogs to show</h3>}
                <div className="row">
                    {blogs.map((blg) => (
                        <BlogItem key={blg.id} blg={blg}/>
                    ))}
                </div>
            </div>
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
