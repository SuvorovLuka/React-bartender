import { Link } from 'react-router-dom'
import styles from './CardAlco.module.scss'

function CardAlco({ alcohol }) {
    return (
        <li className='card'>
            <div
                className='card_img'
                style={{
                    backgroundImage: `url(${alcohol.image})`
                }}
            />
            <div className='card_info'>
                <h2 className='card_title'>
                    {alcohol.name}
                </h2>
                <span >
                    {alcohol.type}
                </span>
                <span >
                    {alcohol.volume} мл
                </span>
                <span >{alcohol.price}р</span>
                <div className='btn_group'>
                    <Link to={`/alcohol/${alcohol.id}`}>
                        <button className='btn_add'>
                            Edit
                        </button>
                    </Link>
                    <button className='btn_del'>
                        Delete
                    </button>
                </div>
            </div>
        </li>
    )
}

export default CardAlco
