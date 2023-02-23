import React from "react";
import {footerNav} from "@/dev-data";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";


const FooterNav = () => {
    const {t} = useTranslation();
    return (
        <ul className={styles.nav}>
            {footerNav.map((el, i) => {
                return (
                    <li key={i} className={styles.navItem}>
                        <a href={el.link} className={styles.navLink}>
                            {t(`common:${el.text}`)}
                        </a>
                    </li>
                );
            })}
        </ul>
    );
}


export default FooterNav;
