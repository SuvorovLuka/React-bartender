import { useParams } from 'react-router-dom';
import { CocktailsCardIngridient } from './CocktailsCardIngridient/CocktailsCardIngridient'
import { useEffect,useState } from 'react';

function CocktailsCard({ cocktail }){

  
  
  return (
    <li className='card'>
      <div
        className='card_img'
        style={{
          backgroundImage: `url(${cocktail.image})`
          
        }}
      />
      <h2>
        {cocktail.name}
      </h2>
      <ul>
        {cocktail.ingridients.map(ingridient =>
          <CocktailsCardIngridient
            ingridientItem={ingridient}
          />
        )}
      </ul>
    </li>
  )
}

export default CocktailsCard


            // let priceCalc = () => {
            //   let calcArr = cocktail.ingridients.map(ingridient =>
            //     (Number(ingridient.price) / Number(ingridient.volume)) * Number(ingridient.ingridientVolume)
            //   )
          
            //   const sum = calcArr.reduce((acc, numbers) => acc + numbers, 0)
            //   return sum
            // }
          
            // let valueCalc = () => {
            //   let calcArr = cocktail.ingridients.map(ingridient =>
            //     Number(ingridient.ingridientVolume)
            //   )
            //   const sum = calcArr.reduce((acc, numbers) => acc + numbers, 0)
            //   return sum
            // }