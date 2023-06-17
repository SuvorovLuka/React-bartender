import React from 'react'
import styles from './CartForm.module.scss'

function CartForm({ setAlcohol }) {

    const [data, setData] = React.useState({
        name: '',
        price: '',
        type:'',
        image: '',
    });


    const createCard = e => {
        e.preventDefault()
        setAlcohol(prev => [{ id: prev.length + 1, ...data }, ...prev])
        setData({
            name: '',
            price: '',
            type: '',
            image: '',
        })
    }


    return (
        <form >
            <input type="text" placeholder='Name' onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} value={data.name} />

            <input type="text" placeholder='Price' onChange={e => setData(prev => ({ ...prev, price: e.target.value }))} value={data.price} />

            <input type="text" placeholder='Type' onChange={e => setData(prev => ({ ...prev, type: e.target.value }))} value={data.type} />

            <input type="text" placeholder='Image' onChange={e => setData(prev => ({ ...prev, image: e.target.value }))} value={data.image} />

            <button onClick={e => createCard(e)}>
                Create
            </button>
        </form>
    )

}

export default CartForm