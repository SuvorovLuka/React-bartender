import React from 'react'
import styles from './CardAlcoForm.module.scss'

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
        <form action='http://localhost:4200/alcohol' method='POST'>
            <input name='name' type="text" placeholder='Name' onChange={e => setData(prev => ({ ...prev, name: e.target.value }))} value={data.name} />

            <input name='price' type="number" placeholder='Price' onChange={e => setData(prev => ({ ...prev, price: e.target.value }))} value={data.price} />

            <input name='type' type="text" placeholder='Type' onChange={e => setData(prev => ({ ...prev, type: e.target.value }))} value={data.type} />

            <input name='image' type="text" placeholder='Image' onChange={e => setData(prev => ({ ...prev, image: e.target.value }))} value={data.image} />

            <button onClick={e => createCard(e)}>
                Create
            </button>
        </form>
    )

}

export default CartForm