import React, {useRef, useState} from "react";
import styles from './style.module.scss';
import Button from "@/uiKit/Button";
import * as emailjs from "@emailjs/browser";
import useTranslation from "next-translate/useTranslation";
import PhoneInput from 'react-phone-input-2'
import {startsWith} from "lodash";
import SuccessPopup from "@/components/Popups/Success";


const Mail = ({bgColor = 'var(--header-cream)'}) => {
    const form = useRef();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(false)
    const [nameError, setNameError] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState('');
    const [dialCode, setDialCode] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState(false);
    const [success, setSuccess] = useState(false);
    const nameHandler = (e) => {
        setName(e.target.value)

        if (e.target.value.length > 2) {
            setNameError(false)
        } else {
            setNameError(true)
        }
    }
    const emailHandler = (e) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        setEmail(e.target.value)
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError(true)
        } else {
            setEmailError(false);
        }
    }

    const phoneHandler = (value, data) => {
        setPhoneNumber(value);
        setDialCode(data.dialCode)
    }
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_enorgg6', 'template_8mnhx4i', e.currentTarget, '0FJ5Udr_udTfHCqYZ')
            .then((result) => {
                setSuccess(true)
            }, (error) => {
                console.log(error.text);
            });
        setEmail('');
        setName('');
        setPhoneNumber(dialCode)

    }

    const {t} = useTranslation('common')

    return (
        <>
            {
                success && <SuccessPopup setOpen={setSuccess}/>
            }
            <div className={styles.mail} style={{'backgroundColor': bgColor}}>
                <div className="page-container">
                    <h2 className={styles.mailTitle}>{t('mail.title')}</h2>

                    <form ref={form} onSubmit={sendEmail} className={styles.mailForm}>
                        <div className={styles.mailInputs}>
                            <div className={styles.mailInputsTop}>
                                <input
                                    type="text"
                                    placeholder={t('mail.placeholders.name')}
                                    className={styles.mailInput}
                                    name="user_name"
                                    value={name}
                                    onChange={(e) => nameHandler(e)}
                                />
                                <div className={`${styles.phoneInput} ${styles.mailInput}`}>
                                    <PhoneInput
                                        isValid={(inputNumber, country, countries) => {
                                            return countries.some((country) => {
                                                return startsWith(inputNumber, country.dialCode) || startsWith(country.dialCode, inputNumber);
                                            });
                                        }}
                                        inputProps={{
                                            name: 'number',
                                            required: true
                                        }}
                                        country={'am'}
                                        value={phoneNumber}
                                        onChange={phoneHandler}
                                    />
                                </div>
                            </div>
                            <input
                                type="mail"
                                placeholder={t('mail.placeholders.email')}
                                className={`${styles.mailInput} ${emailError ? styles.error : ''}`}
                                name="user_email"
                                value={email}
                                onChange={(e) => emailHandler(e)}
                            />
                        </div>
                        <Button disabled={phoneNumberError || nameError || emailError} type="submit" color='black'
                                text={t('buttons.primary')}/>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Mail;
