import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Button from "@/uiKit/Button";

const ProjectsItem = ({title, img, link}) => {

    const titleArr = title.split("");
    return (
        <Link href={link} className={styles.item}>
            <div
                className={styles.itemImg}
                style={{backgroundImage: `url(${img.src})`}}
            />
            <div className={styles.itemContent}>
                <h3 className={styles.itemTitle}>
                    {titleArr.map((el, i) => {
                        return <span key={i}>{el}</span>;
                    })}
                </h3>
                <Button text="view"/>
            </div>
        </Link>
    );
};

export default ProjectsItem;
