import { CocktailsCardIngridient } from './CocktailsCardIngridient/CocktailsCardIngridient'

export const CocktailsCard = ({ cocktail }) => {

  let priceCalc = () => {
    let calcArr = cocktail.ingridients.map(ingridient =>
      (Number(ingridient.price) / Number(ingridient.volume)) * Number(ingridient.ingridientVolume)
    )

    const sum = calcArr.reduce((acc, numbers) => acc + numbers, 0)
    return sum
  }

  let valueCalc = () => {
    let calcArr = cocktail.ingridients.map(ingridient =>
      Number(ingridient.ingridientVolume)
    )
    const sum = calcArr.reduce((acc, numbers) => acc + numbers, 0)
    console.log(calcArr)
    return sum
  }

  return (

    <li>
      {<img
        src={cocktail.image}
        alt={cocktail.name} />}
      <h2>
        {cocktail.name}
      </h2>
      <ul>
        {cocktail.ingridients.map(ingridient =>
          <CocktailsCardIngridient
            key={ingridient.name}
            ingridient={ingridient}
          />
        )}
      </ul>
      <span>
        Объем:{
          valueCalc()
        } ml
      </span>
      <br></br>
      <span>
        Себес:{
          priceCalc()
        } р
      </span>
    </li>
  )
}
