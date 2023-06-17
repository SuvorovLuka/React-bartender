import React from 'react'

import Card from '../../components/Home/Card';
import CartForm from '../../components/Home/CartForm';


function Home() {
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
            <h1>
                React-Bartender
            </h1>
            <CartForm setAlcohol={setAlcohol} />
            <ul className="catalog">
                {alcohol.map(alcohol => (
                    <Card alcohol={alcohol} key={alcohol.id} />
                ))}
            </ul>
        </div>
    );
}

export default Home;