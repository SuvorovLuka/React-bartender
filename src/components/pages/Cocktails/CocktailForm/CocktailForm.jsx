import React, { Fragment, useState, useEffect } from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form';


function CocktailForm() {

  const [ingridients, setIngridients] = useState([])
  const [alcohol, setAlcohol] = useState([])
  const [alcoOpen, setAlcoOpen] = useState(false)
  const [ingOpen, setIngOpen] = useState(false)

  useEffect(() => {
    fetch('http://localhost:4200/alcohol')
      .then(res => res.json())
      .then((arr) => {
        setAlcohol(arr)
      });
  }, [])

  useEffect(() => {
    fetch('http://localhost:4200/ingridient')
      .then(res => res.json())
      .then((arr) => {
        setIngridients(arr)
      });
  }, [])

  const [ing, setIngr] = useState({
    type: '',
    ingridient: '',
    ingridientVolume: ''
  })

  const {
    register,
    control,
    formState: {
      errors, isValid
    },
    handleSubmit,
    reset
  } = useForm()

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingridients"
  })

  const onSubmit = (value) => {
    console.log(value)
    // reset()
  }


  const addObj = () => {
    append(ing);
    setIngr({
      type: '',
      ingridient: '',
      ingridientVolume: ''
    })
  };

  const removeTag = (index) => () => {
    remove(index);
  };

  const openAlco = () => {
    setAlcoOpen(!alcoOpen);
    setIngOpen(false)
  }

  const openIng = () => {
    setIngOpen(!ingOpen);
    setAlcoOpen(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <label>Название:
        <input placeholder='name'
          {...register('name')}
        />
      </label>
      <label>Картинка:
        <input placeholder='image'
          {...register('image')}
        />
      </label>
      <div>
        <button onClick={() => openAlco()}>Алкоголь</button>
        <button onClick={() => openIng()}>Ингридиенты</button>
      </div>
      {alcoOpen && (
        <div >
          <h2> Алкоголь</h2>
          <select value={ing.ingridient} name="ingridient" onChange={e => setIngr(prev => ({ ...prev, ingridient: e.target.value, type: 'alcohol' }))} >
            <option value="">Алкоголь</option>
            {alcohol.map(alcohol =>
              <option key={alcohol.id}
                value={alcohol.name}
              >{alcohol.name}</option>
            )}
          </select>
          <input placeholder="мл" value={ing.ingridientVolume}
            onChange={e => setIngr(prev => ({ ...prev, ingridientVolume: e.target.value }))}
          />
          <button type="button" onClick={addObj}>
            Add Tag
          </button>
        </div>
      )}
      <div >
        {ingOpen && (
          <div >
            <h2> Ингридиенты</h2>
            <select value={ing.ingridient} name="ingridient" onChange={e => setIngr(prev => ({ ...prev, ingridient: e.target.value, type: 'ingridient' }))} >
              <option value="">Ингридиенты</option>
              {ingridients.map(alcohol =>
                <option key={alcohol.id}
                  value={alcohol.name}
                >{alcohol.name}</option>
              )}
            </select>
            <input placeholder="мл" value={ing.ingridientVolume}
              onChange={e => setIngr(prev => ({ ...prev, ingridientVolume: e.target.value }))}
            />
            <button type="button" onClick={addObj}>
              Add Tag
            </button>
          </div>
        )
        }
      </div>
      {fields.map((item, index) => (
        <Fragment key={item.id}>
          <Controller
            render={({ field }) => <p>{item.ingridient}:{item.ingridientVolume} ml</p>
            }
            name={`ingridients[${index}]`}
            control={control}
          />
          <button type="button" onClick={removeTag(index)}>
            Remove
          </button>
        </Fragment>
      ))}
      <button type='submit' disabled={!isValid}>
        Создать
      </button>
    </form>

  )
}

export default CocktailForm
