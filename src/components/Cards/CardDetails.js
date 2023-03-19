import React , {useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'


const CardDetails = () => {
    let [fetchedData,updateFetchedData] = useState([]);
    let {name,image, location,origin,status,gender,species,type} = fetchedData;
    let {id} = useParams()

    let api =`https://rickandmortyapi.com/api/character/${id}`;
    useEffect(()=>{
        (async function(){
          let data = await fetch(api).then((res)=>res.json());
          updateFetchedData(data);
        })()
      },[api])

   
  return (
    <div className='container d-flex justify-content-center'>
        <div className='d-flex flex-column gap-3'>
            <h1 className='text-center'>{name}</h1>
            <img src={image} className='img-fluid'></img>
            {(()=>{
                    if(status === "Dead"){return(<div className={`  badge bg-danger`}>{status}</div>)}
                    else if(status === "Alive"){return(<div className={`  badge bg-success`}>{status}</div>)}
                    else{return(<div className={`  badge bg-secondary`}>{status}</div>)}
                })()}
        <div className='container'>
            <div className=''>
                <span className='fw-bold'>Sexo: {gender}</span>
            </div>
        </div>
        <div className='container'>
            <div className=''>
                <span className='fw-bold'>Localização: {location?.name}</span>
            </div>
        </div>
        <div className='container'>
            <div className=''>
                <span className='fw-bold'>Origem: {origin?.name}</span>
            </div>
        </div>
        <div className='container'>
            <div className=''>
                <span className='fw-bold'>Espécie: {species}</span>
            </div>
        </div>
        <div className='container'>
            <div className=''>
                <span className='fw-bold'>Tipo: {type === "" ? "Desconhecido": type}</span>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default CardDetails
