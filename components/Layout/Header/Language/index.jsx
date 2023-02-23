import React, {useState} from "react";
import styles from "./style.module.scss";
import {useRouter} from "next/router";
import Link from "next/link";

const Language = ({direction}) => {
    const router = useRouter();

    const [activeLang, setActiveLang] = useState(router.locale)
    const [languageOpen, setLanguageOpen] = useState(false);
    const languageMenuHandler = () => {
        setLanguageOpen(!languageOpen)
    }

    const changeLanguage = (lang) => {
        if (typeof window !== "undefined") {
            localStorage.setItem("i18nextLng", lang);
        }
        setActiveLang(lang)
        console.log(activeLang, router.locale, router.locales)
    }

    return (
        <div
            className={`${styles.language}${
                direction === "down" ? " down" : direction === "up" ? ` ${styles.up}` : ""
            }`}
        >
            <button className={styles.container} onClick={languageMenuHandler}>
                <div className={styles.languageIcon}>
                    <div className="img-container">
                        <svg className="icon">
                            <use xlinkHref="#language"/>
                        </svg>
                    </div>
                </div>
                <span className={styles.text}>{router.locale}</span>
            </button>
            {languageOpen && (
                <div className={styles.dropdown} onClick={languageMenuHandler}>
                    {router.locales.map((locale) => {
                        if (locale !== activeLang) {
                            return (
                                <Link
                                    key={locale}
                                    href={router.asPath}
                                    locale={locale}
                                    className={styles.dropdownBtn}
                                    onClick={() => changeLanguage(locale)}
                                >
                                    {locale}
                                </Link>
                            )
                        }

                    })}
                </div>
            )}
        </div>
    );
};

export default Language;
