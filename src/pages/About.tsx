import styles from './About.module.css';
import nodejs from '../images/node.png';
import js from '../images/js.png';
import ts from '../images/ts.png';
import css from '../images/css.png';
import html from '../images/html.png';
import git from '../images/git.png';

export default function About(){
    return (
        <div className={styles.about}>
        <div className={styles.container}>
            <h1 className={styles.title}>About</h1>
            <p className={styles.paragraph}>This is a paragraph about the project.</p>
        </div>
            <div className={styles.figures}>
                <div className={styles.logo}>
                    <img src={nodejs} alt="Logo"  width={150} height={150}/>
                </div>
                <div className={styles.logo}>
                    <img src={js} alt="Logo"  width={150} height={150}/>
                </div>
                <div className={styles.logo}>
                    <img src={html} alt="Logo" width={150} height={150}/>
                </div>
                <div className={styles.logo}>
                    <img src={css} alt="Logo" width={150} height={150}/>
                </div>
                <div className={styles.logo}>
                    <img src={ts} alt="Logo" width={150} height={150}/>
                </div>
                <div className={styles.logo}>
                    <img src={git} alt="Logo" width={150} height={150}/>
                </div>
            </div>
        </div>
    )
}