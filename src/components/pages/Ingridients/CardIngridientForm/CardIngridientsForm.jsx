import { useState } from 'react'
import { useForm } from 'react-hook-form';

function CardIngridientForm({ setIngred }) {
  const {
    register,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } = useForm()

  const [data, setData] = useState({})

  const onSubmit = (value) => {
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
      reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} >
        <label>Название:
          <input placeholder='name'
            {...register('name')}
          />
        </label>

        <label>Цена:
          <input placeholder='price'
            {...register('price')}
          />
        </label>

        <label>Вес:
          <input placeholder='volume'
            {...register('volume')}
          />
        </label>

        <label>Картинка:
          <input placeholder='image'
            {...register('image')}
          />
        </label>
        <button type='submit' disabled={!isValid} >Добавить</button>
      </form>
    </>
  )
}

export default CardIngridientForm