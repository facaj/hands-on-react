import React , {useState,useEffect} from 'react'
import Cards from '../Cards/Cards';
import InputGroup from '../Category/InputGroup';

const Episodes = () => {
    let [id,setID] = useState(1);
    let [info,setInfo] = useState([])
    let [results,setResults] = useState([])
    let [contagem,setContagem] = useState([])
    let {air_date,name} = info;
    let api =`https://rickandmortyapi.com/api/episode/${id}`;

    let chamada =`https://rickandmortyapi.com/api/episode`;

    useEffect(() => {
      (async function(){
        let data = await fetch(api).then((res)=>res.json());
        setInfo(data);
        
        let a = await Promise.all(
            data.characters.map((x)=>{
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
            Episódio: {name===""? "Desconhecio":name}
        </h1>
        <h5 className="text-center"> 
            Data: {air_date===""? "Desconhecio":air_date}
        </h5>
       </div>
       <div className='row'>
        <div className='col-3'>Escolha o episódio:
        <InputGroup setID={setID} total={contagem} name="Episodios"/>
        </div>
            <div className='col-8'>Personagens:
                <div className='row'>
                    <Cards page="/episodes/" results={results}/>
                </div>
            </div>
       </div>
    </div>
  )
}

export default Episodes
