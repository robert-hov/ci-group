import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";

const Button = ({type = "button", color, text, click, link, newPage = false, disabled = false}) => {
    return (
        <>
      {link ? (
          <Link target={newPage ? '_blank' : '_self'} rel={newPage ? 'noopener noreferrer' : ''}
                className={`${styles.btn}${color ? ` ${styles.btn_black}` : ''}`} href={link} onClick={click}>
              <span className={styles.btnText}>
                  <span>{text}</span>
              </span>
          </Link>
      ) : (
          <button disabled={disabled} type={type} className={`${styles.btn}${color ? ` ${styles.btn_black}` : ''}`}
                  onClick={click}>
              <span className={styles.btnText}>
                  <span>{text}</span>
              </span>
          </button>
      )}
    </>
    );
};

export default Button;
