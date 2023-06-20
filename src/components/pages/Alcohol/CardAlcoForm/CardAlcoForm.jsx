import React from 'react'
import styles from './CardAlcoForm.module.scss'
import { useForm } from 'react-hook-form';

function CartForm({ setAlcohol }) {

    const { register, reset, handleSubmit } = useForm({
        mode: 'onChange'
    })

    const [data, setData] = React.useState({
        name: '',
        price: '',
        type: '',
        image: '',
    });


    const createCard = data => {
        console.log('data',data)

        setAlcohol(prev => [{ id: prev.length + 1, ...data }, ...prev])
        setData({
            name: '',
            price: '',
            type: '',
            image: '',
        })
        reset()
    }


    return (
        <form onSubmit={handleSubmit(createCard)}>
            <input type="text" placeholder='Name'
                {...register('name', { required: true })}
            />

            <input type="number" placeholder='Price'
                {...register('price', { required: true })}

            />

            <input type="text" placeholder='Type'
                {...register('type', { required: true })}

            />

            <input type="text" placeholder='Volume'
                {...register('volume', { required: true })}

            />

            <input type="text" placeholder='Image'
                {...register('image', { required: true })}

            />

            <button >
                Create
            </button>
        </form>
    )

}

export default CartForm