import { Link, Outlet } from 'react-router-dom'
import styles from './Layout.module.scss'

function Layout() {
    return (
        <>
            <header className={styles.header}>
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
            </header>

            <Outlet />

        </>
    )
}

export default Layout