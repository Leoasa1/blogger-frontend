import Layout from '@/components/layout/Layout';
import Link from 'next/link';

export default function NotFoundPage() {
    return (
        <Layout>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-12 col-md-5 col-xl-4 my-5">
                    
                    <div class="text-center">
                    
                        <h6 class="text-uppercase text-muted mb-4">
                            404 error
                        </h6>

                        <h1 class="display-4 mb-3">
                            There’s no page here 😭
                        </h1>

                        <p class="text-muted mb-4">
                            Looks like you ended up here by accident? 
                        </p>

                        <Link href="/">
                            <a href="index.html" class="btn btn-primary rounded-pill">
                                Back
                            </a>
                        </Link>
                
                        </div>
                    </div>
                </div> 
            </div> 
            </Layout>
    )
}