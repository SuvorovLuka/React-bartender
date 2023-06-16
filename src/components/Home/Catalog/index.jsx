import styles from './Home.module.scss'

function Catalog({ alcohol }) {
    return (
        <li className={styles.card}>
            <div
                className={styles.card_img}
                style={{
                    backgroundImage: `url(${alcohol.image})`
                }}
            />
            <div className={styles.card_info}>
                <h2 className={styles.card_title}>
                    {alcohol.name}
                </h2>
                <p className={styles.card_descr}>
                    {alcohol.descr}
                </p>
                <div className={styles.store}>
                    <span className={styles.price}>{alcohol.price}$</span>
                    <button className={styles.btn_card}>
                        More...
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Catalog
