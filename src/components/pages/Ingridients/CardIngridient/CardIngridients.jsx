import styles from './CardIngridient.module.scss'

import React from 'react'

function CardIngridient({ingridient}){
  return (
    <li className={styles.card}>
    <div
        className={styles.card_img}
        style={{
            backgroundImage: `url(${ingridient.image})`
        }}
    />
    <div className={styles.card_info}>
        <h2 className={styles.card_title}>
            {ingridient.name}
        </h2>
        <span className={styles.weight}>
        {ingridient.volume} г
        </span>
        <span className={styles.price}>
        {ingridient.price} Р
            </span>
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

export default CardIngridient