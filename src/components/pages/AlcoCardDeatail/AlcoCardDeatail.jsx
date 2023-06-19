import React from 'react'
import CardAlco from '../../components/Home/AlcoPage/CardAlco';

function CardDetail() {

    React.useEffect(() => {
        fetch(`http://localhost:4200/alcohol?id=${1}`)
            .then(res => res.json())
            .then((arr) => {       
                
            });
    }, [])

    return (
        <CardAlco />
    )
}

export default CardDetail
