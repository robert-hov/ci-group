import React from "react";
import styles from "./style.module.scss";
import Language from "../Language";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Nav = ({content, direction, active, setActive}) => {
    const {t} = useTranslation('common');

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
                    <Language direction={direction}/>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
