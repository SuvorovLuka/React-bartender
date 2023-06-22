import { useState ,useEffect} from 'react'
import { CocktailsCard } from './CocktailsCard/CocktailsCard'

function Cocktails(){

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
      <ul>
      {cocktails.map(cocktail=>(
      <CocktailsCard cocktail={cocktail} key={cocktail.name} />
      ))}
      </ul>
    </div>
  )
}

export default Cocktails