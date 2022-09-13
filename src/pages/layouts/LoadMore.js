import React from 'react'

function LoadMore({ loadMoreProducts }) {
    return (

        <div className='center my-5 w-100'>
            <button className='main-btn  w-25 '
                onClick={() => loadMoreProducts(9)}
            >LoadMore...</button>
        </div>
    )
}

export default LoadMore