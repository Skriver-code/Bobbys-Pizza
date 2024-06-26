import { useState } from 'react'
import styles from './navbar.module.css'
function NavBar() {
    const [isActive, setIsActive] = useState(false);
    const toggleActiveClass = () => { setIsActive(!isActive) };
    const removeActive = () => {setIsActive(false)}
    return (

        <div className="bar">
            <header className="App-header">
                <nav className={`${styles.navbar}`}>
                    {/* logo */}
                    <a href='#home' className={`${styles.logo}`}>Dev. </a>
                    <ul className={`${styles.navMenu} ${isActive ? styles.active : ''}`}>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Home</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>About Me</a>
                        </li>
                        <li onClick={removeActive}>
                            <a href='#home' className={`${styles.navLink}`}>Contact</a>
                        </li>
                    </ul>
                    <div className={`${styles.hamburger} ${isActive ? styles.active : ''}`} onClick={toggleActiveClass}>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                        <span className={`${styles.bar}`}></span>
                    </div>
                </nav>
            </header>
        </div>

    )
}

export default NavBar