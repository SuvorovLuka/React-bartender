import { useState, useEffect } from 'react'

// import CardAlco from '../../components/Home/AlcoPage/CardAlco';
import { useParams } from 'react-router-dom';

function CardDetail() {
    const { id } = useParams()
    const [alcohol, setAlcohol] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:4200/alcohol?id=${id}`)
            .then(res => res.json())
            .then((arr) => {
                setAlcohol(arr[0])
            });
    }, [id])

    return (
        <>
            {
                alcohol && (
                    <li>
                        {alcohol.name}
                    </li>
                )
            }
        </>
    )
}

export default CardDetail
