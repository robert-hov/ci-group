import React, {useEffect, useState} from "react";
import styles from "./style.module.scss";
import Language from "../Language";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Nav = ({content, direction, active, setActive}) => {
    const {t} = useTranslation('common');
    const [theme, setTheme] = useState('');
    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, [])

    const themeChangeHandler = (theme) => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark')
            document.body.setAttribute('theme', 'dark')
        } else {
            setTheme('light')
            localStorage.setItem('theme', 'light')
            document.body.setAttribute('theme', 'light')
        }
    }
    return (
        <nav
            className={`${styles.nav}${
                direction === "down" ? ` ${styles.down}` : direction === "up" ? ` ${styles.up}` : ""
            }${active ? ` ${styles.nav_active}` : ""}`}
        >
            <ul className={styles.list}>
                {content &&
                    content.map((el, i) => {
                        const {text} = el;
                        return (
                            <li key={i} className={styles.item}>
                                <Link
                                    href={el.link}
                                    className={styles.link}
                                    onClick={() => setActive(false)}
                                >
                                    {t(text)}
                                </Link>
                            </li>
                        );
                    })}
                <li className={styles.item}>
                    <button className={styles.themeButton} onClick={() => themeChangeHandler(theme)}>
                        {theme === 'light' ? (
                            <span className="img-container">
                                <svg className="icon">
                                    <use xlinkHref="#dark"></use>
                                </svg>
                            </span>
                        ) : (
                            <span className="img-container">
                                <svg className="icon">
                                    <use xlinkHref="#light"></use>
                                </svg>
                            </span>
                        )}
                    </button>
                </li>
                <li className={styles.item}>
                    <Language direction={direction}/>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
