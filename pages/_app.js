import '@/styles/globals.scss'
import Layout from "@/components/Layout";
import Svg from "@/components/Svg";
import Router, {router} from "next/router";
import {useEffect, useState} from "react";

function App({Component, pageProps}) {
    useEffect(() => {
        let locale = localStorage.getItem("i18nextLng")
        if (locale === 'en-US' || locale === 'en-GB') {
            localStorage.setItem("i18nextLng", "en")
            locale = localStorage.getItem("i18nextLng")
        }
        Router.push({pathname: router.pathname, query: router.query}, router.asPath, {locale});
    }, [])

    const [theme, setTheme] = useState('');
    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if (localTheme) {
            setTheme(localTheme)
        } else {
            if (window.matchMedia("(prefers-color-scheme:dark)").matches) {
                setTheme('dark')
                localStorage.setItem('theme', theme)
            } else {
                setTheme('light')
                localStorage.setItem('theme', theme)
            }
        }


        document.body.setAttribute('theme', theme)
    }, [theme])
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