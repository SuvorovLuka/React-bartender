import React from 'react'
import CardIngridient from './CardIngridient/CardIngridients'
import CardIngridientForm from './CardIngridientForm/CardIngridientsForm'

function Ingridients() {
  const [ingred, setIngred] = React.useState([])
  
  React.useEffect(() => {
    fetch('http://localhost:4200/ingridient')
      .then(res => res.json())
      .then((arr) => {
        setIngred(arr)
        console.log(arr)
      });
  }, [])

  return (
    <div>
      <div>
        <h2>Ingridinets</h2>
      </div>
      <div>
        <div>
          {/* <CardIngridientForm /> */}
        </div>
        <ul className="catalog">
          {ingred.map(ingred => (
            <CardIngridient ingridient={ingred} key={ingred.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Ingridients