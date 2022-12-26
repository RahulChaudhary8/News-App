import "./FooterStyles.css"

import React from 'react'

import { FaFacebook, FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="footer-container">
                    <div className="left">
                        <div className="location">
                            <a href="https://goo.gl/maps/uuWfh48pSZV6jxq6A"><FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} /></a>
                            <div>
                                <p>Agra, Uttar Pradesh</p>
                                <p>India</p>
                            </div>
                        </div>
                        <div className="phone">
                            <h4> <FaPhone size={20} style={{ color: "#fff", marginRight: "2rem" }} />8318576674, 8874011876</h4>
                        </div>
                        <div className="email">
                            <a href="https://mail.google.com/mail/u/0/?tab=cm#inbox?compose=new" style={{textDecoration:'none'}}> <h4 style={{
                                color: "#000" }}> <FaMailBulk size={20} style={{
                                color: "#fff", 
                                marginRight: "2rem",
                            }} /> rahulchaudhary775285@gmail.com</h4></a>
                        </div>
                    </div>
                    <div className="right">
                        <h4>About Me</h4>
                        <p>Hi, I'm Rahul Chaudhary and I have logical and strong foundation in software development. Proficient in Html, Css, Python, Php, Java, React, and JavaScript. Ability to translate business requirements into innovative software solutions. Excellent teamwork, interpersonal and communication skills. Looking to start a career as an entry-level professional with a reputed IT company.</p>
                        <div className="social">
                            <a href="https://www.facebook.com/rahul.mahi.18400"><FaFacebook className="ico" size={30} style={{ color: "#fff", marginRight: "1rem" }} /> </a>
                            <a href="https://twitter.com/RahulMa37660897"><FaTwitter className="ico" size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                            <a href="https://www.linkedin.com/in/rahul-chaudhary-b5899a197/"> <FaLinkedin className="ico" size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                            <a href="https://github.com/RahulChaudhary8"><FaGithub className="ico" size={30} style={{ color: "#fff", marginRight: "1rem" }} /></a>
                            <a href=" https://whatsapp.com/dl/"> <FaWhatsapp className="ico" size={30} style={{ color: "#fff", marginRight: "1rem" }} /> </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copy">
                <h4>Copyright || Rahul Chaudhary Portfolio 2022-23 ||</h4>
            </div>
        </>
    )
}
export default Footer
