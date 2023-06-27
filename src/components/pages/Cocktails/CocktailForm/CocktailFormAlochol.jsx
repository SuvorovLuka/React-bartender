import { useState, useEffect } from 'react'

export const CocktailFormAlochol = ({ alcohol, setAlcoholItemCard, alcoholItemCard }) => {

    // [alcoholItem,setAlcoholItem] =useState({

    // })

    return (
        <li>

            <select name="ingridients"
                onChange={(e) => {
                    setAlcoholItemCard(prev => ({ ...prev, name: e.target.value }))
                    console.log(e.target.value)
                }}
            >
                {alcohol.map(alcohol =>
                    <option
                        value={alcohol.name}
                    >{alcohol.name}</option>
                )}
            </select>
            колличество в мл
            <input type="number" value={alcoholItemCard.ingridientVolume} onChange={(e) => {
                setAlcoholItemCard(prev => ({ ...prev, ingridientVolume: e.target.value }))
                console.log(e.target.value)
            }
            }
            />
            <button>Удалить</button>

        </li>
    )
}
