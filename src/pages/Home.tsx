import styles from './Home.module.css';
import logo from '../images/logo.jpeg';
export default function Home(){
    return (
        <div className={styles.container}>
          <div className={styles.Div1}>
                <h1>HI THERE ...</h1>
                <p>Welcome to my website</p>
            </div> 
            <div className={styles.Div2}>
                <img src={logo} width={300} height={300}/>
            </div>
        </div>
    )
}