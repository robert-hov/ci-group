import React, {useRef, useState} from 'react';
import Hero from "@/components/Hero";
import bgImg from "../public/img/hero/career.jpg";
import styles from "../styles/Career.module.scss"
import Button from "@/uiKit/Button";
import useTranslation from "next-translate/useTranslation";
import SuccessPopup from "@/components/Popups/Success";

const Career = () => {
    const formRef = useRef(null);
    const fileInp = useRef(null)
    const {t} = useTranslation('common')

    const [success, setSuccess] = useState(false);
    const [file, setFile] = useState('');

    const handleChange = (e) => {
        const fileUploaded = e.target.files[0];
        setFile(fileUploaded)
        console.log(fileUploaded)
    }

    const handleClick = event => {
        fileInp.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setSuccess(true)
    }


    return (
        <>
            {success && <SuccessPopup setOpen={setSuccess}/>}
            <Hero other={true} bgImg={bgImg} text="hero.career"/>
      <div className={styles.career}>
        <div className="page-container">
          <div className={styles.careerContainer}>
            <h2 className={styles.careerTitle}>
              <span>join to your dream team</span>
              <div/>
            </h2>
            <form onSubmit={handleSubmit} ref={formRef} className={styles.careerForm}>
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
                    ref={fileInp}
                    id="cv"
                    className={`${styles.careerInput} ${styles.careerFileInput}${file ? ` ${styles.careerFileInput_ready}` : ''}`}
                    onChange={handleChange}
                />
                  <button type={'button'}
                          className={`${styles.careerInput} ${styles.fileButton}${file ? ` ${styles.fileButtonActive}` : ''}`}
                          onClick={handleClick}>
                    {file ? file.name : 'choose your cv'}
                  </button>
              </div>

              <Button type={'submit'} color="black" text={t('buttons.primary')} click={() => console.log(formRef)}/>
            </form>
          </div>
        </div>
      </div>
        </>
    );
};

export default Career;