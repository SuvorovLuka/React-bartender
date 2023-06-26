import React from 'react'

export const CocktailFormAlochol = () => {
  return (
    <li>
    {/* <img src="" alt="" /> */}
        <select name="alcohol"  >
            <option value="Jameson" >Jameson</option>
            <option value="Ballantines" >Ballantines</option>
        </select>
        колличество в мл
        <input type="number" />
        <button>
            добавить
        </button>
</li>  )
}
