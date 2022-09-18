import React, { useEffect, useState } from 'react'

const App = () => {
  const [card, setCards] = useState(null)
  const [error, setError] = useState(false)
  
  useEffect(()=>{
    fetch('https://randomuser.me/api/')
    .then((result) =>{
      result.json()
      .then((data)=>setCards(data.results[0]))
      .catch((error)=> {
        console.log('Error json', error.message)
        setError(error.message)
      })
      
    })``
    .catch((error)=> {
      console.log('error', error.message)
      setError(error.message)
    })
  }, [cards])

  console.log('error', error)

  Name (`${card.nam.first}`)

  if(error) return <div>Error al obtener los datos: {error}</div>
  if(!card) return <div>Cargando..</div>
  return (
    <div>
      <div>{card.name.first}</div>
    </div>
  )
}

export default App
