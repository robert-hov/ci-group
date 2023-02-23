import React from "react";
import styles from './style.module.scss';
import Link from "next/link";

const ButtonSecondary = ({link, text, mobileBlack}) => {
    return (
        <Link className={`${styles.buttonSecondary}${mobileBlack ? ` ${styles.mobileBlack}` : ''}`} href={link}>
            <span className={styles.buttonSecondaryText}>
                <span>{text}</span>
            </span>
        </Link>
    );
};

export default ButtonSecondary;
