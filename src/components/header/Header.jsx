import React, { useState } from 'react';
import './header.css';
import { HiOutlineHome, HiOutlineBadgeCheck, HiOutlinePhotograph, HiOutlineAcademicCap, HiOutlineMenu, HiX } from "react-icons/hi";

const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav__logo">Portfolio</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#home" onClick={() => setActiveNav("#home")}
                                className={activeNav === "#home" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineHome className="nav__icon" />Home
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#skills" onClick={() => setActiveNav("#skills")}
                                className={activeNav === "#skills" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineBadgeCheck className="nav__icon" />Skills
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#portfolio" onClick={() => setActiveNav("#portfolio")}
                                className={activeNav === "#portfolio" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlinePhotograph className="nav__icon" />Projects
                            </a>
                        </li>
                        <li className="nav__item">
                            <a href="#qualification" onClick={() => setActiveNav("#qualification")}
                                className={activeNav === "#qualification" ? "nav__link active-link" : "nav__link"}>
                                <HiOutlineAcademicCap className="nav__icon" />Qualification
                            </a>
                        </li>
                    </ul>
                    <HiX className="nav__close" onClick={() => showMenu(!Toggle)} />
                </div>
                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <HiOutlineMenu />
                </div>
            </nav>
        </header>
    )
}

export default Header