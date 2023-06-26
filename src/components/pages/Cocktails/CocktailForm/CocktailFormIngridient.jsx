import React from 'react'

export const CocktailFormIngridient = () => {
    return (
        <li>
            {/* <img src="" alt="" /> */}
                <select name="ingridients" >
                    <option value="limon" >limon</option>
                    <option value="lime" >lime</option>
                </select>
                колличество в мл
                <input type="number" />
                <button>
                    добавить
                </button>
        </li>
    )
}
