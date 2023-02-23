import React from "react";
import ServicesSwiper from "./ServicesSwiper";
import styles from "./style.module.scss";
import ButtonSecondary from "@/uiKit/ButtonSecondary";
import {serviceSlides} from "@/dev-data";
import useTranslation from "next-translate/useTranslation";

const Services = () => {
    const {t} = useTranslation('common')

    return (
        <>
      <section className={styles.services}>
        <div className="page-container">
          <h2 className={styles.servicesTitle}>
            <span>{t('services.title')}</span>
            <div/>
          </h2>
          <ServicesSwiper content={serviceSlides}/>
        </div>
      </section>
      <ButtonSecondary text={t('buttons.secondary')} link="/services"/>
    </>
    );
};

export default Services;
