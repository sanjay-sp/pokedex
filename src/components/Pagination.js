import React from 'react';
import './Pagination.css'

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }


  return (
    <nav className="navigation_wrapper">
      <div className='pagination'>
        {pageNumbers.map(number => (
            <p key={number} onClick={() => paginate(number)} href='javascript:' className='page-link'>
              {number}
            </p>
           
        ))}
      </div>
    </nav>
  );
};

export default Pagination;