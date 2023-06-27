import React, { useState, useEffect } from 'react'
import { CocktailFormIngridient } from './CocktailFormIngridient'
import { CocktailFormAlochol } from './CocktailFormAlochol'
import styles from './CocktailForm.module.scss'

function CocktailForm() {

  const [openAlcohol, setOpenAlcohol] = useState(false)
  const [openIngridient, setOpenIngridient] = useState(false)
  const [alcohol, setAlcohol] = useState([])
  const [ingridients, setIngridients] = useState([])

  const [alcoholItem, setAlcoholItem] = useState([])
  const [ingridientsItem, setIngridientsItem] = useState([])





  useEffect(() => {
    fetch('http://localhost:4200/alcohol')
      .then(res => res.json())
      .then((arr) => {
        setAlcohol(arr)
      });
  }, [])

  useEffect(() => {
    fetch('http://localhost:4200/ingridient')
      .then(res => res.json())
      .then((arr) => {
        setIngridients(arr)
      });
  }, [])

  const addAlcohol = (e) => {
    e.preventDefault()
    setAlcoholItem({
      ...alcoholItem,
    })
  }

  const addIngridient = (e) => {
    e.preventDefault()
    setIngridientsItem([
      ...ingridientsItem,
    ])
  }

  console.log(ingridientsItem)
  return (
    <>
      <form className='form'  >
        <input type="text" name='name' placeholder='name'

        />
        <input type="text" name='image' placeholder='image'

        />
        <div >
          <ul className={styles.ingr_list}>
            <li className={styles.ingr_item}
              onClick={() => setOpenAlcohol(!openAlcohol)}
            >Алкоголь</li>

            <li className={styles.ingr_item}
              onClick={() => setOpenIngridient(!openIngridient)}
            >Ингридиенты</li>
          </ul>
          {openAlcohol && (
            <>
              <h2> Алкоголь</h2>
              <button onClick={addAlcohol}>+</button>
            </>

          )}
          {openIngridient && (
            <>
              <h2> Ингридиенты</h2>
              <button onClick={addIngridient}>+</button>
              <ul>
                {ingridientsItem.map(ingridientItem =>
                  <li>
                    <select name="ingridients"

                    >
                      {ingridients.map(ingrideint =>
                        <option value={ingrideint.name} >{ingrideint.name}</option>
                      )}
                    </select>
                    колличество в мл
                    <input type="text" />
                    <button>удалить</button>
                  </li>
                )}

              </ul>
            </>
          )}

        </div>
        <button type='submit'>
          Создать
        </button>
      </form>

    </>
  )
}

export default CocktailForm
