import Layout from "../components/layout/Layout";
import { API_URL } from "@/config/index";
import BlogItem from "@/components/blogItem/Blogitem";
import { Container } from "react-bootstrap";
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

export default function Home({ blogs }) {
  return (
    <Layout>
      <Container>
        {blogs.length === 0 && <h3>No blogs to show</h3>}
        <div className="row justify-content-center">
          {blogs.map((blg) => (
            <BlogItem key={blg.id} blg={blg} />
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/blogs?_sort=date:ASC&_limit=3`);
  const blogs = await res.json();

  return {
    props: { blogs },
    revalidate: 1,
  };
}
