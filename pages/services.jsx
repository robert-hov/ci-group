import React from 'react';
import Hero from "@/components/Hero";
import bgImg from "../public/img/hero/service.jpg";
import {serviceSlides} from "@/dev-data";
import Mail from "@/components/Mail";
import styles from "../styles/Services.module.scss"
import useTranslation from "next-translate/useTranslation";

const Services = () => {
    const {t} = useTranslation('common')

    return (
        <>
   <Hero other={true} text="hero.services" bgImg={bgImg}/>
      <div className={styles.service}>
        <div className="page-container">
          <div className={styles.serviceContainer}>
            <div>
              <ul className={styles.serviceCard}>
                {serviceSlides.map((el, i) => {
                    return (
                        <li key={i} className={styles.serviceCardItem}>
                            <div className={styles.serviceCardItemContainer}>
                                <div className={styles.serviceCardIcon}>
                                    <div className="img-container">
                                        <svg className="icon">
                                            <use xlinkHref={`#${el.icon.hrefLink}`}></use>
                                        </svg>
                                    </div>
                                </div>
                                <h3 className={styles.serviceCardTitle}>{t(el.content)}</h3>
                            </div>
                        </li>
                    );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Mail/>
        </>
    );
};

export default Services;