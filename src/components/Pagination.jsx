import React from "react"
import "../styles/Pagination.scss"
import { Link } from "react-router-dom"

const Pagination = ({ pageNumbers, activePage, paginate }) => {
    
    const isActive = (pageNumber) => activePage === pageNumber ? "pagination-link active" : "pagination-link" 
    return <>
        <div className="pagination">
            {pageNumbers.map((pageNumber) => (
                <Link to="" key={pageNumber} className={isActive(pageNumber)} onClick={() => paginate(pageNumber)}>
                    {pageNumber}
                </Link> 
            ))}
        </div>
    </>
}
export default Pagination