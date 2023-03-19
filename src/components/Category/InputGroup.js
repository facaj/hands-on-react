import React from 'react'

const InputGroup = ({setID, total, name}) => {

  return (
    <div>
      <div className="input-group mb-3">  
  <select className="form-select" id={name} onChange={e=>setID(e.target.value)  }   >
    <option selected>Escolha...</option>
    {[...Array(total).keys()].map((x)=>{
        return <option value={x +1}>{name} - {x+1}</option>;
    })}
  </select>
</div>
    </div>
  )
}

export default InputGroup
