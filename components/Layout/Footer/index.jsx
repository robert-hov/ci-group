import React from "react";
import FooterNav from "./Nav";
import Smm from "./Smm";
import styles from "./style.module.scss";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";

const Footer = () => {
    const {t} = useTranslation('common')
    return (
        <footer className={styles.footer}>
            <div className="page-container">
                <div className={styles.container}>
                    <div className={styles.left}>
                        <FooterNav/>
                        <Smm/>
                    </div>
                    <div className={styles.logoContainer}>
                        <Link href="/" className={styles.logo}>
                            <span className="img-container">
                                <svg className="icon">
                                    <use xlinkHref="#footer-logo"/>
                                </svg>
                            </span>
                        </Link>
                    </div>
                    <div className={styles.right}>
                        <span className={styles.rightText}>
                            {t('contacts.address.address')}
                        </span>
                        <a href="tel: 374-95-11-98-11" className={styles.rightText}>
                            +374 95 119811
                        </a>
                        <a href="tel: 374-43-88-00-33" className={styles.rightText}>
                            +374 95 119811
                        </a>
                    </div>
                </div>
                <div>
                    <span className={styles.copyright}>
                        © Copyright Capital Invest Group LLC 2023
                    </span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
