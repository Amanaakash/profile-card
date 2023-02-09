import React from "react"
import twitterLogo from "../assets/Twitter-logo.png"
import gihubLogo from "../assets/Github-logo.png"

export default function Footer(){
    return(
        <footer className="Fcontainer">
            <div className="socialMedia">
                <a className="links" href="https://github.com/Amanaakash">
                    <img src={gihubLogo} alt="githublogo" className="socialIcons"/>
                </a>
                <a className="links" href="https://twitter.com/AmanAka88593578">
                    <img src={twitterLogo} alt="twitterlogo" className="socialIcons"/>

                </a>
            </div>

        </footer>
    )
}
