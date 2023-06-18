import React from 'react'

import CardAlco from '../../components/Home/CardAlco';
import CardAlcoForm from '../../components/Home/CardAlcoForm';


function Alcohol() {
    const [alcohol, setAlcohol] = React.useState([])

    React.useEffect(() => {
        fetch('http://localhost:4200/alcohol')
            .then(res => res.json())
            .then((arr) => {       
                setAlcohol(arr)
                console.log(arr)
            });
    }, [])

    return (
        <div className="container">
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