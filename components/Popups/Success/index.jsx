import React from 'react';
import styles from './style.module.scss'
import Button from "@/uiKit/Button";

const SuccessPopup = ({setOpen}) => {
    return (
        <>
            <div
                className='popup'
                onClick={(e) => {
                    e.stopPropagation()
                    setOpen(false)
                }}>
                <div className={styles.success}>
                    <div className={styles.successContent}>
                        <h3 className={`${styles.successTitle} ${styles.successTextTheme}`}>
                            THANK YOU
                        </h3>
                        <p className={`${styles.successDesc} ${styles.successTextTheme}`}>
                            Your request completed successfully.
                        </p>
                        <div className={styles.successIcon}>
                            <div className="img-container">
                                <svg className="icon">
                                    <use xlinkHref={`#check`}/>
                                </svg>
                            </div>
                        </div>
                        <Button color="black" text="back" click={() => setOpen(false)}/>
                    </div>
                </div>
            </div>
            </>
    )
};

export default SuccessPopup;