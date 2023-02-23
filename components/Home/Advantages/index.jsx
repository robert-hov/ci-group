import React from "react";
import tsaghkadzor from "../../../public/img/advantages/tsaghkadzor.png";
import styles from "./style.module.scss";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const Advantages = () => {
    const {t} = useTranslation('common')
    return (
        <section className={styles.advantages}>
            <div className="page-container">
                <div className={styles.advantagesContainer}>
                    <h2 className={styles.advantagesTitle}>
                        <span>{t('advantage.title')}</span>
                        <div/>
                    </h2>
                    <div className={styles.advantagesContent}>
                        <ol className={styles.advantagesTextContainer}>
                            <li className={styles.advantagesText}>{t('advantage.texts.text1')}</li>
                            <li className={styles.advantagesText}>{t('advantage.texts.text2')}</li>
                            <li className={styles.advantagesText}>{t('advantage.texts.text3')}</li>
                        </ol>
                        <div className={styles.advantagesImg}>
                            <div className="img-container">
                                <Image src={tsaghkadzor} alt="advantage"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Advantages;
