import React from 'react'
import styles from "./Search.scss"
const Search = ({setPageNumber, setSearch}) => {
  return (
    <form className='d-flex justify-content-center mb-3'>
      <label>Nome do personagem: </label><input placeholder="Pesquisar nome" type="text" className={styles.input}
      onChange={(e) =>{
        setPageNumber(1);
        setSearch(e.target.value);
      } }
      ></input>
    </form>
  )
}

export default Search
