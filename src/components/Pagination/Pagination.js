import React from 'react'
import ReactPaginate from 'react-paginate';

const Pagination = ({info, pageNumber, setPageNumber}) => {
    /*
    let next = ()=>{
        setPageNumber((x)=>x+1)
    };
    let prev = ()=>{
        if(pageNumber === 1) return;
        setPageNumber((x)=>x-1)
    }; */
  return ( <ReactPaginate className='pagination justify-content-center gap-4 my-4' 
                nextLabel="Próximo"
                forcePage={pageNumber===1? 0 : pageNumber -1}
                previousLabel="Anterior"
                nextClassName='btn btn-outline-primary'
                previousClassName='btn btn-outline-primary'
                pageClassName='page-item'
                pageLinkClassName='page-link'
                onPageChange={(data)=>{setPageNumber(data.selected + 1)}}
                activeClassName="active"
                pageCount={info?.pages} />
    /*
    <div className="container d-flex justify-content-center gap-5 my-5">
      <button onClick={prev} className="btn btn-primary">Anterior</button>
      <button onClick={next} className="btn btn-primary">Avançar</button>
    </div>
    */
  )
}

export default Pagination
