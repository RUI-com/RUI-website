import React from "react";
import "./about.css";
import Image from "../../assets/proshor.png";
import AboutBox from "./AboutBox";
const About = () => {
    return(
        <section className="about container section" id="about">
            <h2 className="section__title">About Us</h2>
            <div className="about__container grid">
                <img src={Image} alt="" className="about__img"/>
                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        RUI is one of the leading companies in the field of developing software, web applications and websites. We produce technology solutions for different business sectors that feature a professional, flexible and easy-to-use interface

                        </p>
                        <a href="https://drive.google.com/file/d/1p2vND15kJgH9XIgVSn8QcJWTHuEsDeLM/view?usp=drivesdk" download="https://drive.google.com/file/d/1p2vND15kJgH9XIgVSn8QcJWTHuEsDeLM/view?usp=drivesdk" className="btn" >Download Proshore </a>
                    </div>
                    <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number ">90%</span>
                            </div>
                            <div className="skills__bar">
                            <span className="skills__percentage developement"></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX design</h3>
                                <span className="skills__number">80%</span>
                            </div>
                            <div className="skills__bar">
                            <span className="skills__percentage ui__design"></span>

                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>
                            <div className="skills__bar">
                            <span className="skills__percentage photography"></span>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <AboutBox/>

        </section>
    )
}

export default About