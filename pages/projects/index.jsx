import React from 'react';
import Hero from "@/components/Hero";
import bgImg from '../../public/img/hero/hero.png'
import ProjectsCard from "@/components/Projects/ProjectsCard";
import {projectsData} from "@/dev-data";
import styles from "../../styles/Projects.module.scss";
import {useRouter} from "next/router";

const Index = () => {
    const router = useRouter()
    return (
        <>
            <Hero
                other={true}
                bgImg={bgImg}
                text="hero.projects"
            />
            <div className={styles.project}>
            <div className="page-container">
              <div className={styles.projectContainer}>
                {projectsData.map((el, i) => {
                    return (
                        <ProjectsCard key={i} content={el}/>
                    )
                })}
              </div>
            </div>
            </div>
        </>
    );
};

export default Index;