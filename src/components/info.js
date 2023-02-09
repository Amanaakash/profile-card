import React from "react"
import ProfilePicture from "../assets/profile-pic.jpg"
import emailLogo from "../assets/Email-logo.png"
import linkedinLogo from "../assets/LinkedIn-logo.png"

export default function Info(){
    return(
        <div className="container">
            <header className="header">
                <img className="avatar" src={ProfilePicture} alt="profile-pic" />
            </header>
            <div className="bio">
                <h1 className="name">Aman Aakash</h1>
                <p className="title">Frontend Developer</p>
                <p className="website">trendytickle.com</p>
                <div className="contacts">
                    <a className="links email" href="mailto:amanakashofficial@gmail.com">
                        <img className="icons" src={emailLogo} alt=""/>Email
                    </a>

                    <a className="links linkedin" href="https://www.linkedin.com/in/aman-akash-740899242/">
                        <img className="icons" src={linkedinLogo} alt=""/>LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}