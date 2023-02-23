import '@/styles/globals.scss'
import Layout from "@/components/Layout";
import Svg from "@/components/Svg";
import Router, {router} from "next/router";
import {useEffect} from "react";

function App({Component, pageProps}) {
    useEffect(() => {
        let locale = localStorage.getItem("i18nextLng")
        if (locale === 'en-US' || locale === 'en-GB') {
            localStorage.setItem("i18nextLng", "en")
            locale = localStorage.getItem("i18nextLng")
        }
        Router.push({pathname: router.pathname, query: router.query}, router.asPath, {locale});
    }, [])
    return (
        <>
                <Svg/>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
        </>
    )
}


export default App;