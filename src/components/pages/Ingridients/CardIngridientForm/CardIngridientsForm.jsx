import { useState } from 'react'

function CardIngridientForm({ setIngred }) {
  const [value, setValue] = useState({
    name: "",
    price: 0,
    volume: 0,
    image: ""
  })

  const [data, setData] = useState({})

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch('http://localhost:4200/ingridient', {
      method: 'POST',
            body: JSON.stringify(value),
            headers: {
                'Content-Type': 'application/json'
            }
    })
    .then((response) => response.json())
    .then((result) => {
        setData(result)

        fetch('http://localhost:4200/ingridient')
          .then(res => res.json())
          .then((arr) => {
            setIngred(arr)
          });
      })
  }

  return (
    <>
      <form onSubmit={handleSubmit} >
        <span>Название</span>
        <input placeholder='name' name='name' type="text"
          onChange={e => setValue(prev => ({ ...prev, name: e.target.value }))} value={value.name}
        />

        <span>Вес</span>
        <input placeholder='price' name='price' type="number"
          onChange={e => setValue(prev => ({ ...prev, price: e.target.value }))} value={value.price}
        />

        <span>Цена</span>
        <input placeholder='volume' name='volume' type="number"
          onChange={e => setValue(prev => ({ ...prev, volume: e.target.value }))} value={value.volume}
        />

        <span>Картинка</span>
        <input placeholder='image' name='image' type="text"
          onChange={e => setValue(prev => ({ ...prev, image: e.target.value }))} value={value.image}
        />
        <button >Добавить</button>
      </form>
    </>
  )
}

export default CardIngridientForm