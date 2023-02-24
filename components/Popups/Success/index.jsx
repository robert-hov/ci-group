import React from 'react';
import styles from './style.module.scss'
import Button from "@/uiKit/Button";
import useTranslation from "next-translate/useTranslation";

const SuccessPopup = ({setOpen}) => {
    const {t} = useTranslation('common');
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
                            {t('success.title')}
                        </h3>
                        <p className={`${styles.successDesc} ${styles.successTextTheme}`}>
                            {t('success.desc')}
                        </p>
                        <div className={styles.successIcon}>
                            <div className="img-container">
                                <svg className="icon">
                                    <use xlinkHref={`#check`}/>
                                </svg>
                            </div>
                        </div>
                        <Button color="black" text={t('buttons.back')} click={() => setOpen(false)}/>
                    </div>
                </div>
            </div>
            </>
    )
};

export default SuccessPopup;