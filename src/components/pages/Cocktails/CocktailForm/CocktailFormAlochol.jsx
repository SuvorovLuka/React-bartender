import { useState, useEffect } from 'react'

export const CocktailFormAlochol = ({ valueIng, setValueIng }) => {

    const [alcohol, setAlcohol] = useState([])

    useEffect(() => {
        fetch('http://localhost:4200/alcohol')
            .then(res => res.json())
            .then((arr) => {
                setAlcohol(arr)
            });
    }, [])


    return (
        <li>
            <select name="ingridients"
                onChange={(e) => {
                    setValueIng(prev => ({ ...prev, ingridient: e.target.value }))
                }}
            >
               
            </select>
            колличество в мл
            <input type="number" value={valueIng.ingridientVolume} onChange={(e) => {
                setValueIng(prev => ({ ...prev, ingridientVolume: e.target.value }))
            }
            }
            />
            <button>Удалить</button>

        </li>
    )
}
