import React from 'react'
import loading from './ajax-loader.gif'
const Spinner = () => {
    return (
        <div className="text-center">
            <img className="mb-3" src={loading} alt="spinner" />
        </div>
    )
}

export default Spinner;