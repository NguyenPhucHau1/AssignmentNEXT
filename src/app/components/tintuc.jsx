'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
function TinTucCard({ data, language }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const sortedData = [...data].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));


  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = sortedData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  const totalPages = Math.ceil(sortedData.length / postsPerPage);


  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPageButtons = 5;

    if (totalPages <= maxPageButtons) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      let startPage = Math.max(currentPage - Math.floor(maxPageButtons / 2), 1);
      let endPage = startPage + maxPageButtons - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = endPage - maxPageButtons + 1;
      }

      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }

    return pageNumbers;
  };

  return (
    <div className="row">
      {currentPosts.map((p) => {
        const { _id, titleVN, titleEN, describeVN, describeEN, image } = p;
        const title = language === 'vi' ? titleVN : titleEN;
        const description = language === 'vi' ? describeVN : describeEN;

        return (
          <div key={_id} className="col-md-6 col-sm-12  tintuc-card">

            <div className="card mb-4">
              <div className="card-body">
                <Link className='card-a' href={`/showtintuc/${_id}`}><h3 className="card-title">{title}</h3></Link>
                <div>
                    <small>{p.tacgia} | </small>  
                    <small> {new Date(p.createdAt).toLocaleString()}</small>
                </div>
                <hr />
                <p className="card-text">{description}</p>
              </div>
              <Link className='card-a' href={`/showtintuc/${_id}`} ><img src={image} className="card-img-top" alt={title} /></Link>
            </div>

          </div>
        );
      })}

      {totalPages > 1 && (
        <nav className='container ' aria-label="Pagination">
          <ul className="pagination pagination-sm justify-content-center">
            <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
              <a onClick={() => paginate(currentPage - 1)} className="page-link"><span aria-hidden="true">&laquo;</span></a>
            </li>
            {getPageNumbers().map((number) => (
              <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                <a onClick={() => paginate(number)} className="page-link">{number}</a>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
              <a onClick={() => paginate(currentPage + 1)} className="page-link"><span aria-hidden="true">&raquo;</span></a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default TinTucCard;
