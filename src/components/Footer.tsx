import style from './Footer.module.css';
import { Link } from 'react-router-dom';
export default function Footer(){
    return (
        <div className={style.Footer}>
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