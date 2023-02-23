import React from 'react';
import {useRouter} from "next/router";
import {projectsData} from "@/dev-data";
import Hero from "@/components/Hero";
import styles from "../../styles/ProjectInner.module.scss"
import Button from "@/uiKit/Button";
import useTranslation from "next-translate/useTranslation";

const ProjectSingle = () => {
    const {t} = useTranslation('common')
    const {query} = useRouter();
    const {title, content} = projectsData[query.project - 1];

    return (
        <>
 <Hero inner={true} bgImg={content && content.cover} text={t(title)}/>
                       <section className={styles.project}>
                <div className="page-container">
                    <div className={styles.projectContainer}>
                        <h2 className={styles.projectTitle}>
                            <span>{t(title)}</span>
                            <div/>
                        </h2>
                        <p className={`${styles.projectDesc} ${styles.projectText}`}>
                            {t(content.description)}
                        </p>
                        <div className={styles.projectGallery}>
                            {content.imagesTop.map((el, i) => {
                                return (
                                    <div key={i} className={styles.projectGalleryImg}>
                                        <div className="img-container">
                                            <img src={el.src} alt=""/>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.projectAbout}>
                            <div className={styles.projectAboutContent}>
                                <div className={styles.projectAboutLogo}>
                                    <div className="img-container">
                                        <img src={content.logo.src} alt="logo"/>
                                    </div>
                                </div>
                                <ul className={`${styles.projectAboutList} ${styles.projectText}`}>
                                    {content.about.map((item, i) => {
                                        return (
                                            <li key={i} className={styles.projectAboutItem}>
                                                {t(item)}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className={styles.projectAboutImg}>
                                <div className="img-container">
                                    <img src={content.cover.src} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className={styles.projectGallery}>
                            {content.imagesBottom.map((el, i) => {
                                return (
                                    <div key={i} className={styles.projectGalleryImg}>
                                        <div className="img-container">
                                            <img src={el.src} alt=""/>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className={styles.projectFooter}>
                            <p className={`${styles.projectAddress} ${styles.projectText}`}>
                                {t(content.address)}
                            </p>
                            <Button link={content.mapLink} newPage={true} text={t('buttons.maps')} color="black"/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectSingle;