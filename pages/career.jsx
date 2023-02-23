import React, {useRef} from 'react';
import Hero from "@/components/Hero";
import bgImg from "../public/img/hero/career.jpg";
import styles from "../styles/Career.module.scss"
import Button from "@/uiKit/Button";
import useTranslation from "next-translate/useTranslation";

const Career = () => {
    const formRef = useRef();
    const {t} = useTranslation('common')

    return (
        <>
     <Hero other={true} bgImg={bgImg} text="hero.career"/>
      <div className={styles.career}>
        <div className="page-container">
          <div className={styles.careerContainer}>
            <h2 className={styles.careerTitle}>
              <span>join to your dream team</span>
              <div/>
            </h2>
            <form ref={formRef} className="career__form">
              <div className={styles.careerInputContainer}>
                <input
                    placeholder="Name Surname*"
                    type="text"
                    className={styles.careerInput}
                />
              </div>
              <div className={styles.careerInputContainer}>
                <input
                    placeholder="Jon position*"
                    type="text"
                    className={styles.careerInput}
                />
              </div>
              <div className={styles.careerInputContainer}>
                <input
                    placeholder="phone number*"
                    type="phone"
                    className={styles.careerInput}
                />
              </div>
              <div className={styles.careerInputContainer}>
                <input
                    placeholder="email*"
                    type="mail"
                    className={styles.careerInput}
                />
              </div>
              <div className={styles.careerInputContainer}>
                <input
                    placeholder="cV*"
                    type="file"
                    className={styles.careerInput}
                />
              </div>
              <Button color="black" text={t('buttons.primary')} click={() => console.log(formRef)}/>
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default Career;