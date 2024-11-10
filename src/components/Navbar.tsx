import React from "react";
import styles from './Navbar.module.css';
import { Link } from "react-router-dom";
const Navbar = () => {
    return (
        <>
            <div className={styles.Nav}>
                <div className={styles.Bars}>

                <div className={styles.NavMenu}>
                    <Link className={styles.NavLinks} to="/about" >
                        About
                    </Link>
                    <Link className={styles.NavLinks} to="/Contactus">
                        Contactus
                    </Link>
                    <Link className={styles.NavLinks} to="/">
                        Home
                    </Link>
                    {/* Second Nav */}
                    {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
                </div>
                </div>
                    <Link className={styles.NavBtnLink} to="/signin">
                        Sign In
                    </Link>
                </div>
        </>
    );
};

export default Navbar;