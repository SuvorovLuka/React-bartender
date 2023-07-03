import { useState, useEffect } from 'react'

export const CocktailFormIngridient = () => {

  const [ingridients, setIngridients] = useState([])

    useEffect(() => {
        fetch('http://localhost:4200/ingridient')
          .then(res => res.json())
          .then((arr) => {
            setIngridients(arr)
          });
      }, [])
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
