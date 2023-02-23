import React from "react";
import styles from "./style.module.scss";

const Smm = (props) => {
    return (
        <ul className={styles.smm}>
            <li className={styles.smmItem}>
                <a href="https://facebook.com" className={styles.smmLink}>
                    <div className="img-container">
                        <svg className="icon">
                            <use xlinkHref="#facebook"/>
                        </svg>
                    </div>
                </a>
            </li>
            <li className={styles.smmItem}>
                <a href="https://instagram.com" className={styles.smmLink}>
                    <span className="img-container">
                        <svg className="icon">
                            <use xlinkHref="#insta"/>
                        </svg>
                    </span>
                </a>
            </li>
            <li className={styles.smmItem}>
                <a href="https://whatsapp.com" className={styles.smmLink}>
                    <span className="img-container">
                        <svg className="icon">
                            <use xlinkHref="#whatsapp"/>
                        </svg>
                    </span>
                </a>
            </li>
        </ul>
    );
};

export default Smm;
