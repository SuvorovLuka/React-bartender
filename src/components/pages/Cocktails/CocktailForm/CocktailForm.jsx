import React, { useState } from 'react'
import { CocktailFormIngridient } from './CocktailFormIngridient'
import { CocktailFormAlochol } from './CocktailFormAlochol'
import styles from './CocktailForm.module.scss'

function CocktailForm() {

  const alcArr=[]
  const ingArr=[]
  const [openAlcohol, setOpenAlcohol] = useState(false)
  const [openIngridient, setOpenIngridient] = useState(false)
  const [openAlcoholType, setOpenAlcoholType] = useState(false)



  return (
      <form className='form' >
        <legend>Выберите ингридиенты</legend>
        <input type="text" name='name' placeholder='name' />
        <input type="text" name='image' placeholder='image' />
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
            <div
              onClick={() => setOpenAlcoholType(!openAlcoholType)}
            >
              {openAlcohol && (
                <ul className={styles.ingr_list}>
                  <li className={styles.ingr_item} >vodka</li>
                  <li className={styles.ingr_item} >whiskey</li>
                  <li className={styles.ingr_item} >rom</li>
                </ul>
              )}
              <h2> Алкоголь</h2>
              <ul>
                <CocktailFormAlochol />
              </ul>
            </div>
          )}
          {openIngridient && (
            <>
              <h2> Ингридиенты</h2>
              <ul>
                <CocktailFormIngridient />
              </ul>
            </>
          )}

        </div>
        <button type='submit'>
          Создать
        </button>
      </form>
  )
}

export default CocktailForm