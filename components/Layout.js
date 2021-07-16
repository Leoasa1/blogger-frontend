import Head from 'next/head'
import {useRouter} from 'next/router'
import Footer from './footer/footer'
import Header from './header/Header'

export default function Layout({title, description, keywords, children}) {
    const router = useRouter();


    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name='description' content={description} />
                <meta name='keywords' content={keywords} />
            </Head>
            <div className="container">
                <Header/>

                {children}

                {router.pathname === "/" && <Footer/>}
            </div>
        </div>
    )
}

Layout.defaultProps = {
    title: 'Blogs | Learn About Life',
    description: 'Find new Blogs and other musical events',
    keywords: 'music, coding, blogs',
}