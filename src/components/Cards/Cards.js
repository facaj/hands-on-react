import React from 'react'
import styles from './Cards.scss'
import { Link } from 'react-router-dom'

const Cards = ({results,page}) => {
    console.log(results)
    let display;
    if(results){
        display = results.map((x)=>{
            let {id,name,image, location,status,species} = x;
            return(<Link to={`${page}${id}`} key={id} style={{textDecoration:"none"}} className={`$(styles.cards) col-3 mb-4 position-relative text-black`}>
                <div className='border border-primary rounded'>
                    <img  src={image} alt='' className={`${styles.img} img-fluid rounded`}></img>
                    <div className='content'>
                        <div className='fs-4 fw-bold mb-4'>{name} </div>
                        <div className=''>
                            <div className='fs-6'>Espécie: </div>
                            <div className='fs-5'>{species}</div>
                        </div>
                        <div className=''>
                            <div className='fs-6'>Ultima localização: </div>
                            <div className='fs-5'>{location.name}</div>
                        </div>
                    </div>
                </div>
                {(()=>{
                    if(status === "Dead"){return(<div className={`$(styles.badge) position-absolute badge bg-danger`}>{status}</div>)}
                    else if(status === "Alive"){return(<div className={`$(styles.badge) position-absolute badge bg-success`}>{status}</div>)}
                    else{return(<div className={`$(styles.badge) position-absolute badge bg-secondary`}>{status}</div>)}
                })()}
                
            </Link>)
        });
    }else{
        display = "Nenhum personagem encontrado";
    }
  return (
    < >
      {display}
    </>
  )
}

export default Cards
