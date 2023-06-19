import styles from './Header.module.scss'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className={styles.header}>
            <Link className={styles.logo_header} to="/">
              <div className={styles.logo}>
                <h1>
                    React-Bartender
                </h1>
                <div className={styles.logoSvg}>
                    <img width="50" src="./logo.svg" alt="Logo" />
                </div>
                </div>
            </Link>

            <div className={styles.nav}>
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}><Link to="/">Main </Link></li>
                    <li className={styles.nav_item}><Link to="/alcohol">Alcohol</Link></li>
                    <li className={styles.nav_item}><Link to="/ingridients">Ingridients</Link></li>
                    <li className={styles.nav_item}><Link to="/cocktails">Cocktails </Link></li>
                </ul>
            </div>
            
            <button className={styles.lk_btn}>Login</button>
        </div>
    )
}

export default Header