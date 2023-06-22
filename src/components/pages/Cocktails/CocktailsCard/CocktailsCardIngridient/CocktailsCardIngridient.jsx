import React from 'react'

export const CocktailsCardIngridient = (ingridient) => {
   const ingridientItem=ingridient.ingridient
    return (
        <li>
            {/* <img src="" alt="" /> */}
            <h3>
            {ingridientItem.name}
            </h3>
            <span>
                :{ingridientItem.ingridientVolume}
            </span>
        </li>
    )
}
