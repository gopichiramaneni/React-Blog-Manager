import react from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
function Header() {
    return (
        <header>
            <h1>Karate Blog Manager</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/profile'>Profile</Link></li>
                    <li><Link to='/blog-posts'>BlogPosts</Link></li>
                    <button onClick={()=>alert("Hi!")}>Login</button>
                </ul>
            </nav>
        </header>
    );
}
export default Header; 