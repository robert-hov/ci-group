import React from "react";
import styles from "./style.module.scss";
import abb from "../../../public/img/partners/abb.png";
import projectShin from "../../../public/img/partners/projectShin.png";
import legal from "../../../public/img/partners/legal.png";
import tsaghkadzorLogo from "../../../public/img/partners/tsaghkadzorLogo.png";
import dilijanLogo from "../../../public/img/partners/dilijanLogo.png";
import PartnersSwiper from "./PartnersSwiper";
import useTranslation from "next-translate/useTranslation";

const Partners = () => {
    const {t} = useTranslation('common')

    const slides = [
        {
            img: abb,
            link: "/",
            alt: "abb logo",
        },
        {
            img: projectShin,
            link: "/",
            alt: "project shin logo",
        },
        {
            img: legal,
            link: "/",
            alt: "legal logo",
        },
        {
            img: tsaghkadzorLogo,
            link: "/",
            alt: "Tsaghkadzor Hills logo",
        },
        {
            img: dilijanLogo,
            link: "/",
            alt: "Dilijan Hills logo",
        },
    ];
    return (
        <section className={styles.partners}>
            <div className="page-container">
                <div className={styles.partnersContainer}>
                    <h2 className={styles.partnersTitle}>
                        <span>{t('partners')}</span>
                        <div/>
                    </h2>
                    <PartnersSwiper content={slides}/>
                </div>
            </div>
        </section>
    );
};

export default Partners;
