import Layout from "../components/Home/Layout";
import Head from "next/head";

export default function help() {
    return (
        <Layout>
            <Head>
                <title>Help | Darus Salaf Foundation</title>
                <meta property="og:title" content="Help | Darus Salaf Foundation" />
                <meta property="og:description" content="Help page of Darus Salaf. Darus salaf is intended to spread the truth and light of Islam. This is the about page of this website" />
                <meta property="og:image" content="/images/meta2.jpg" />
                <meta property="og:url" content="https://darussalaf.foundation/help" />
                <meta name="keywords" content="darussalaf darus salaf salaf-salehin darus-salaf foundation preaching quran sahih sunnah preceders" />
            </Head>
            <h2>This is help page</h2>
        </Layout>
    )
}
