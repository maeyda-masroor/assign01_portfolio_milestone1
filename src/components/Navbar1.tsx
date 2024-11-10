import style from './Navbar.module.css';
import { Link } from 'react-router-dom';
export default function Navbar1(){
    return (
        <div className={style.Navbar}>
            <div className={style.logo}>
                MY PROFILE
            </div>
            <div className={style.links}>
                <ul>
                    <li><Link to ="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    )
}