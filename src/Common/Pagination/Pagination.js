import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

const Pagination = ({ location, count, page = 1, perPage = 10 }) => {

    const pageCount = Math.ceil(count / perPage);
    const pages = [];

    for (let i = 0; i<pageCount; i++) {
        pages.push(i+1);
    }

    const getSearchWithPage = (page) => {
        const urlParams = new URLSearchParams(location.search);
    
        urlParams.set('page', page);
    
        return urlParams.toString();
      };

    console.log(location)

   return (
<div className="Pagination">
{ pages.map(page => (
    <Link 
    key={page} 
    to={{
    pathname: location.path,
    search: getSearchWithPage(page),
    }}>
    {page}
    </Link>
))}
</div>
);

};

Pagination.propTypes = {
    count: PropTypes.number.isRequired,
    page: PropTypes.number,
    perPage: PropTypes.number,
};

export default withRouter(Pagination);