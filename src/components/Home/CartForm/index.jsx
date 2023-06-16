import { useState } from 'react'
import styles from './CartForm.module.scss'

function CartForm() {

    const [valueName, setValueName] = useState('');
    const [valuePrice, setValuePrice] = useState('');
    const [valueImage, setValueImage] = useState('');


    const createCard = (e) => {

    }

    // console.log(value)

    return (
        <form action="">
            <input type="text" placeholder='Name' onChange={e => setValueName(e.target.value)} value={valueName} />
            <input type="text" placeholder='Price' onChange={e => setValuePrice(e.target.value)} value={valuePrice} />
            <input type="text" placeholder='Image' onChange={e => setValueImage(e.target.value)} value={valueImage} />
            <button onClick={createCard}>
                Create
            </button>
        </form>
    )

}

export default CartForm