import { useState, useEffect } from 'react'


export const CocktailFormIngridient = ({ ingridients }) => {


    return (
        <>
            <li>
                <select name="ingridients" >
                    {ingridients.map(ingrideint =>
                        <option value={ingrideint.name} >{ingrideint.name}</option>
                    )}
                </select>
                колличество в мл
                <input type="text" />
                <button>удалить</button>
            </li>
        </>
    )
}
