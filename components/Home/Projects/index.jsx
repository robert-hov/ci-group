import React from "react";
import styles from "./style.module.scss";
import tsaghkadzor from "../../../public/img/porjects/tsaghkadzor.png";
import dilijan from "../../../public/img/porjects/dilijan.png"
import ProjectsItem from "./ProjectsItem";
import ButtonSecondary from "@/uiKit/ButtonSecondary";
import useTranslation from "next-translate/useTranslation";

const Projects = () => {
    const {t} = useTranslation('common')

    return (
        <div className={styles.projects}>
            <div className={styles.projectsContent}>
                <ProjectsItem link="/projects/1" title="tsaghkadzor hills" img={tsaghkadzor}/>
                <ProjectsItem link="/projects/2" title="Dilijan hills" img={dilijan}/>
            </div>
            <ButtonSecondary mobileBlack link="/projects" text={t('buttons.secondary')}/>
        </div>
    );
};

export default Projects;
