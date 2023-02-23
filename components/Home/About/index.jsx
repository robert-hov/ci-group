import React from "react";
import styles from "./style.module.scss";
import useTranslation from "next-translate/useTranslation";

const About = () => {
    const {t} = useTranslation('common');

    return (
        <section className={styles.about}>
            <div className={styles.aboutContent}>
                <h2 className={styles.aboutTitle}>
                    <span>{t('about.title')}</span>
                    <div/>
                </h2>
                <span className={styles.aboutDesc}>
                    {t('about.description')}
                </span>
            </div>
        </section>
    );
};

export default About;
