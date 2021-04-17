import Image from 'next/image'
import Head from 'next/head'
import Layout from '../components/layout';

export default function pricing_page() {
    return (
        <Layout>
            <div className="container">
                <Head>
                    <title>Pricing</title>
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <h1>Pricing</h1>
                <Image
                src="/images/profile.jpg"
                height={144}
                width={144}
                alt="Example"
                />
                <style jsx>{`
                    h1 {
                        background-color: red;
                    }
                    `}
                </style>
            </div>
        </Layout>
    )
}   