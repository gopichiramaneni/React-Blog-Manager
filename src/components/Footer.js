import React from 'react';
import './Footer.css';
function Footer() {
    return (
        <footer>
            <p>
                <a href="https://github.com/gopichiramaneni">Git Hub</a>
            </p>
            <p>
            <a href="info@myblog.com">Contact</a>
            </p>
            <p>"Fun Fact: Taang soo do karate is traditional chinese martial arts!"</p>
            <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
    );
}
export default Footer;