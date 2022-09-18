import { useEffect, useState} from "react"
import { useParams } from "react-router-dom"

const LocationsDetailPage= () =>{
    const params = useParams();
    const url = `https://rickandmortyapi.com/api/location/${params.locationId}`
    const [data,setData]=useState(null)

    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then((d)=>setData(d))
        .catch((e)=>console.log("error",e))
    },[url])

    if(!data) return <div>Cargando...</div>

    return(
        <div>
            {data.name}
        </div>
    ) 
}

export default LocationsDetailPage