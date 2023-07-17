import React from "react";
import "./home.css";
import Me from "../../assets/Logo-brand.svg";
import HeaderSocials from "./HeaderSocials";
import ScrollDown from "./ScrollDown";
import Shapes from "./Shapes";
const Home = () => {
    return(
        <section className="home container" id="home">
            <div className="intro">
                <img src={Me} alt="" className="home__img"/>
                <h1 className="home__name">UI UX Design | Website Developer | Manager</h1>
                <span className="home__education">creating soluttions for a better tomrrow</span>

                <HeaderSocials/>

                <a href="#contact" className="btn">Hire Me</a>
                <ScrollDown/>
                


            </div>
            <Shapes/>
        </section>
    )
}

export default Home