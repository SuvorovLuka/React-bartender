import { useState, useEffect } from 'react'

import { Link, useParams, useNavigate } from 'react-router-dom';

function CardDetail() {
    const { id } = useParams()
    const [alcohol, setAlcohol] = useState(null)
    const navigate = useNavigate()

    const goBack = () => navigate(-1)

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
                    <div>
                        <button onClick={goBack}>
                            Back
                        </button>
                        <li>
                            {alcohol.name}
                        </li>
                    </div>
                )
            }
        </>
    )
}

export default CardDetail
