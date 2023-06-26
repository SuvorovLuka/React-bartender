import { useState, useEffect } from 'react'
import CocktailsCard from './CocktailsCard/CocktailsCard'
import CocktailForm from './CocktailForm/CocktailForm'

function Cocktails() {

  const [cocktails, setCocktails] = useState([])

  useEffect(() => {
    fetch('http://localhost:4200/cocktails')
      .then(res => res.json())
      .then((arr) => {
        setCocktails(arr)
      });
  }, [])


  return (
    <div>
      <CocktailForm />
      <ul className='catalog'>
        {cocktails.map(cocktail => (
          <CocktailsCard cocktail={cocktail} key={cocktail.name} />
        ))}
      </ul>
    </div>
  )
}

export default Cocktails