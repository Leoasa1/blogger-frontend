import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "../footer/footer";
import Navbar from "../navbar/Navbar";

export default function Layout({ title, description, keywords, children }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <div className="container">
        <Navbar />

        {children}
      </div>
      {router.pathname === "/" && <Footer />}
    </div>
  );
}

Layout.defaultProps = {
  title: "Blogs | Learn About Life",
  description: "Find new Blogs and other musical events",
  keywords: "music, coding, blogs",
};
