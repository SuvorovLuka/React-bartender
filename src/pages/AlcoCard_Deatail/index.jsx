import React from 'react'
import { useParams } from 'react-router-dom'
import Card from '../../components/Home/CardAlco'

function CardDetail() {
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
        // <Card />
        <h1>1</h1>
    )
}

export default CardDetail
