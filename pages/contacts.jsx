import React from 'react';
import Hero from "@/components/Hero";
import bgImg from "../public/img/hero/contact.jpg";
import Mail from "@/components/Mail";
import styles from "../styles/Contacts.module.scss";

const Contacts = ({lang}) => {
    return (
        <>
      <Hero other={true} bgImg={bgImg} text="hero.contacts"/>
        <div className={styles.contacts}>
            <div className="page-container">
                <div className={styles.contactContainer}>
                    <div className={styles.contactContent}>
                        <div className={styles.contactCards}>
                            <div className={`${styles.contactCard} ${styles.contactCard_address}`}>
                                <h3 className={styles.contactCardTitle}>
                                    <span>address</span>
                                    <div/>
                                </h3>
                                <p className={styles.contactCardText}>
                                    ra Nairi zaryan street 17/1
                                </p>
                                <p className={styles.contactCardText}>+374 95 119811</p>
                                <p className={styles.contactCardText}>+374 95 119811</p>
                            </div>
                            <div className={`${styles.contactCard} ${styles.contactCard_smm}`}>
                                <h3 className={styles.contactCardTitle}>
                                    <span>Social media</span>
                                    <div/>
                                </h3>
                                <div className={styles.contactCardSmm}>
                                    <ul className={styles.contactSmm}>
                                        <li className={styles.contactSmmItem}>
                                            <a href="https://facebook.com" className={styles.contactSmmLink}>
                                                <div className="img-container">
                                                    <svg className="icon">
                                                        <use xlinkHref="#facebook"/>
                                                    </svg>
                                                </div>
                                            </a>
                                        </li>
                                        <li className={styles.contactSmmItem}>
                                            <a href="https://facebook.com" className={styles.contactSmmLink}>
                                              <span className="img-container">
                                                <svg className="icon">
                                                  <use xlinkHref="#insta"/>
                                                </svg>
                                              </span>
                                            </a>
                                        </li>
                                        <li className={styles.contactSmmItem}>
                                            <a href="https://facebook.com" className={styles.contactSmmLink}>
                                              <span className="img-container">
                                                <svg className="icon">
                                                  <use xlinkHref="#whatsapp"/>
                                                </svg>
                                              </span>
                                            </a>
                                        </li>
                                    </ul>
                                    {/*<Smm/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.contactMap}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d953.2405060637061!2d44.51172123574169!3d40.2047149188518!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd37a315aed3%3A0x905244d00f05ebdd!2s17%20Nairi%20Zaryan%20St%2C%20Yerevan%200014%2C%20Armenia!5e1!3m2!1sen!2sus!4v1676746446990!5m2!1sen!2sus"
                            width="600" height="450" style={{border: 0}} allowFullScreen="" loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" title="capital invest on map"/>
                    </div>
                </div>
            </div>
        </div>
        <Mail lang={lang}/>
        </>
    );
};

export default Contacts;