import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EpisodesDetailPage = () => {
  const params = useParams();
  const url = `https://rickandmortyapi.com/api/article/${params.episodeId}`

  const [data, setData] = useState(null)

  useEffect(()=>{
    fetch(url)
    .then((response) => response.json())
    .then((d) => setData(d))
    .catch((e) => console.log('error', e))
    
  },[url])

  console.log('data', data)

  if(!data) return <div>Cargando ...</div>
  return (
    <div>{data.name}</div>
  )
}

export default ArticleDetailPage