import React from "react";
import styles from "./style.module.scss";
import Image from 'next/image'
import useTranslation from "next-translate/useTranslation";

const Hero = ({
                  inner = false,
                  other = false,
                  logo = false,
                  logoBg = '',
                  bgImg,
                  text,
                  desc
              }) => {
    const {t} = useTranslation('common')

    const title = t(text).split('');
    return (
        <>
            <div
                className={`${styles.hero}${other ? ` ${styles.hero_other}` : ""}${
                    inner ? ` ${styles.hero_inner}` : ""
                }`}
            >
                <div className={styles.heroBg}>
                    <Image src={bgImg} alt="capital invest"/>
                </div>
                <div className={styles.heroContent}>
                    {logoBg && (
                        <div className={styles.heroBgLogo}>
                            <div className="img-container">
                                <svg className="icon">
                                    <use xlinkHref={`#${logoBg}`}/>
                                </svg>
                            </div>
                        </div>
                    )}
                    {logo ? (
                        <div className={styles.heroLogo}>
                            <div className="img-container">
                                <Image
                                    src={logo}
                                    alt="Picture of the author"
                                />
                            </div>
                        </div>
                    ) : (
                        <>
                            <h1 className={styles.heroTitle}>
                                {title.map((el, i) => {
                                    return <span key={i}>{el}</span>;
                                })}
                            </h1>
                        </>
                    )}
                    {desc && (
                        <p className={styles.heroDesc}>
                            {t(desc)}
                        </p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Hero;
