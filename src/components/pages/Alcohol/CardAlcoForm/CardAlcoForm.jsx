import { useState } from 'react'
import styles from './CardAlcoForm.module.scss'
import { useNavigate } from 'react-router-dom'

function CartForm({ setAlcohol }) {

    const [value, setValue] = useState({
        name: "",
        price: 0,
        volume: 0,
        type: '',
        image: '',
    });

    const [data, setData] = useState();

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:4200/alcohol', {
            method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                setData(result);

                fetch('http://localhost:4200/alcohol')
                    .then(res => res.json())
                    .then((arr) => {
                        setAlcohol(arr)
                    });
            });
        setValue({
            name: "",
            image: '',
            price: 0,
            volume: 0,
            type: '',
        })
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <span>
                    Название:
                </span>
                <input type="text" placeholder='Name'
                    onChange={(e) => setValue(prev => ({ ...prev, name: e.target.value }))} value={value.name}
                />
                <span>
                    Цена:
                </span>
                <input type="number" placeholder='Price'
                    onChange={(e) => setValue(prev => ({ ...prev, price: e.target.value }))} value={value.price}
                />
                <span>
                    Вид:
                </span>
                <input type="text" placeholder='Type'
                    onChange={(e) => setValue(prev => ({ ...prev, type: e.target.value }))} value={value.type}
                />
                <span>
                    Объем:
                </span>
                <input type="number" placeholder='Volume'
                    onChange={(e) => setValue(prev => ({ ...prev, volume: e.target.value }))} value={value.volume}
                />
                <span>
                    Картинка:
                </span>
                <input type="text" placeholder='Image'
                    onChange={(e) => setValue(prev => ({ ...prev, image: e.target.value }))} value={value.image}
                />

                <button >
                    Create
                </button>
            </form>
        </>
    )

}

export default CartForm