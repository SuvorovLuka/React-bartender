import React, { useState, useEffect } from 'react'

export const CocktailsCardIngridient = (ingridientItem) => {
    const [value, setValue] = useState(null)

    useEffect(() => {
        fetch(ingridientItem.ingridientItem.ingridient)
            .then(res => res.json())
            .then((arr) => {
                setValue(arr[0])
            });
    }, [])

    const volume = ingridientItem.ingridientItem.ingridientVolume


    return (
        <>
            {value && (
        <li>
            {/* <img src="" alt="" /> */}
            <h3>
                {value.name}
            </h3>
            <span>
                :{volume}
            </span>
        </li>
            )}
        </>
    )
}
