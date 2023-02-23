import React from "react";
import styles from './style.module.scss';
import Link from "next/link";
import Button from "@/uiKit/Button";
import {useRouter} from "next/router";
import useTranslation from "next-translate/useTranslation";

const ProjectsCard = ({content}) => {
    const router = useRouter()
    const {t} = useTranslation('common')

    return (
        <div className={styles.projectCard}>
            <h3 className={styles.projectCardTitle}>
                <span>{t(content.title)}</span>
                <div/>
            </h3>
            <Link href={{pathname: 'projects/[project]', query: {project: content.id}}} locale={router.locale}
                  className={styles.projectCardLink}>
                <div
                    className={styles.projectCardImg}
                    style={{backgroundImage: `url(${content.img.src})`}}
                />
                <div className={styles.projectCardContent}>
                    <Button text="view"/>
                </div>
            </Link>
        </div>
    );
};

export default ProjectsCard;
