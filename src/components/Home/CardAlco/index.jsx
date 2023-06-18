import styles from './CardAlco.module.scss'

function Card({ alcohol }) {
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
                <span className={styles.type}>
                    {alcohol.type}
                </span>
                <span className={styles.price}>{alcohol.price}$</span>
                <div className={styles.btn_group}>
                    <button className={styles.btn_add}>
                        Edit
                    </button>
                    <button className={styles.btn_del}>
                        Delete
                    </button>
                </div>
            </div>
        </li>
    )
}

export default Card
