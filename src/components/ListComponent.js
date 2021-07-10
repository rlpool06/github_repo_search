import React from 'react'
import '../App.css'

const ListComponent = ({ name, description, language }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h2>{name}</h2>
            </div>
            <div className='card-body'>
                <p>{description}</p>
            </div>
            <div className='card-body'>
                <p>Languages: {language}</p>
            </div>
        </div>
    );
}

export default ListComponent;