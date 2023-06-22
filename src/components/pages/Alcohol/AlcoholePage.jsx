import { useState, useEffect } from 'react'

import CardAlco from './CardAlco/CardAlco';
import CardAlcoForm from './CardAlcoForm/CardAlcoForm';


function Alcohol() {
    const [alcohol, setAlcohol] = useState([])

    useEffect(() => {
        fetch('http://localhost:4200/alcohol')
            .then(res => res.json())
            .then((arr) => {
                setAlcohol(arr)
            });
    }, [])

    return (
        <div className="container">
            <h2>
                Alcohol
            </h2>
            <CardAlcoForm setAlcohol={setAlcohol} />
            <ul className="catalog">
                {alcohol.map(alcohol => (
                    <CardAlco alcohol={alcohol} key={alcohol.id} />
                ))}
            </ul>
        </div>
    );
}

export default Alcohol;