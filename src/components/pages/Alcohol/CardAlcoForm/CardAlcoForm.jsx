import { useState } from 'react'
import { useForm } from 'react-hook-form';
import styles from './CardAlcoForm.module.scss'

function CartForm({ setAlcohol }) {

    const {
        register,
        formState: {
            errors, isValid
        },
        handleSubmit,
        reset
    } = useForm()

    const [data, setData] = useState();

    const onSubmit = (value) => {

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
        reset()
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Название:
                    <input placeholder='Name'
                        {...register('name',
                        )}
                    />
                </label>
                <label>Цена за бутылку:
                    <input placeholder='Price' type='number'
                        {...register('price',
                        )}
                    />
                </label>
                <label>Объем:
                    <input placeholder='volume' type='number'
                        {...register('volume',
                        )}
                    />
                </label>
                <label>Тип алкоголя:
                    <select {...register("type", { required: true })}>
                        <option value="">Тип алкоголя</option>
                        <option value="whiskey">Виски</option>
                        <option value="vodka">Водка</option>
                        <option value="rum">Ром</option>
                        <option value="gin">Джин</option>
                        <option value="tequila">Текила</option>
                    </select>
                </label>
                <label>Картинка:
                    <input placeholder='image'
                        {...register('image',
                        )}
                    />
                </label>
                <button type='submit' disabled={!isValid} >
                    Create
                </button>
            </form>
        </>
    )

}

export default CartForm