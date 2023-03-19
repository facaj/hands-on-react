import React , {useState,useEffect} from 'react'
import Cards from '../Cards/Cards';
import InputGroup from '../Category/InputGroup';

const Location = () => {
    let [id,setID] = useState(1);
    let [info,setInfo] = useState([])
    let [results,setResults] = useState([])
    let [contagem,setContagem] = useState([])
    let {name,type,dimension} = info;
    let api =`https://rickandmortyapi.com/api/location/${id}`;

    let chamada =`https://rickandmortyapi.com/api/location`;

    useEffect(() => {
      (async function(){
        let data = await fetch(api).then((res)=>res.json());
        setInfo(data);
        
        let a = await Promise.all(
            data.residents.map((x)=>{
                return fetch(x).then((res)=>res.json());
            })
        );
        setResults(a);

        let informacoes = await fetch(chamada).then((res)=>res.json());
        setContagem(informacoes.info.count)

      })()

    }, [api])
    
  return (
    <div className='container'>
       <div className='row'>
        <h1 className="text-center mb-3">
            Localização: {name===""? "Desconhecio":name}
        </h1>
        <h5 className="text-center"> 
          Dimensão:   {dimension===""? "Desconhecio":dimension}    <br></br>   
          Tipo:   {type===""? "Desconhecio":type}    
        </h5>
       </div>
       <div className='row'>
        <div className='col-3'>Escolha a localização:
        <InputGroup setID={setID} total={contagem} name="Localizações"/>
        </div>
            <div className='col-8'>Personagens:
                <div className='row'>
                    <Cards page="/location/" results={results}/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Location
