import React, {useEffect, useState} from "react";
import Nav from "./Nav";
import styles from "./style.module.scss";
import {nav} from "@/dev-data";
import useScrollBlock from "../../../hooks/useScrollDisable";
import {useScrollDirection} from "@/hooks/useScrollDirection";
import Link from "next/link";

const Header = ({location}) => {
    const scrollDirection = useScrollDirection();
    const [menuOpened, setMenuOpened] = useState(false);
    const [blockScroll, allowScroll] = useScrollBlock();
    useEffect(() => {
        if (menuOpened) blockScroll();
        else allowScroll();
    }, [menuOpened, allowScroll, blockScroll]);
    return (
        <>
      <header
          className={`${styles.header}${
              scrollDirection === "down"
                  ? ` ${styles.down}`
                  : scrollDirection === "up"
                      ? ` ${styles.up}`
                      : ""
          }${scrollDirection === "top" ? ` ${styles.top}` : ""}${
              menuOpened ? ` ${styles.header_active}` : ""
          }`}
      >
        <div className="page-container">
          <div className={styles.headerContainer}>
            <Link href="/" className={styles.headerLogo}>
              <div className="img-container">
                <svg className="icon">
                  <use xlinkHref="#logo"/>
                </svg>
              </div>
            </Link>
            <Nav
                location={location}
                direction={scrollDirection}
                content={nav}
                active={menuOpened}
                setActive={setMenuOpened}
            />
            <button
                onClick={() => setMenuOpened(!menuOpened)}
                className={`${styles.hamburgerIcon}${menuOpened ? ` ${styles.active}` : ""}`}
            >
              <span className={styles.line}></span>
            </button>
          </div>
        </div>
      </header>
    </>
    );
};

export default Header;
