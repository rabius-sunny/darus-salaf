import Layout from "../components/Home/Layout";
import Head from "next/head";

export default function about() {
    return (
        <Layout>
            <Head>
                <title>About | Darus Salaf Foundation</title>
                <meta property="og:title" content="About | Darus Salaf Foundation" />
                <meta property="og:description" content="About page of Darus Salaf. Darus salaf is intended to spread the truth and light of Islam. This is the about page of this website" />
                <meta property="og:image" content="/images/meta1.jpg" />
                <meta property="og:url" content="https://darussalaf.foundation/about" />
                <meta name="keywords" content="darussalaf darus salaf salaf-salehin darus-salaf foundation preaching quran sahih sunnah preceders" />
            </Head>
            <h2>This is about page</h2>
        </Layout>
    )
}
