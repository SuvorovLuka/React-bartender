import { useState, useEffect } from 'react'
import { Route, Routes, Link } from 'react-router-dom';
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

// const createAlcoCard = async ({ name, price, type, volume, image }) => {

// }

// const createAlcoCardAction = async ({ request }) => {
//     formData = await request.formData();
//     const res = fetch('http://localhost:4200/alcohol', {
//     method:'POST',
//     body:JSON.stringify({ name, price, type, volume, image })
//     })
// }

export default Alcohol;