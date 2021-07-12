import React from 'react'
import '../App.css'

const ListComponent = ({ name, description, language, html_url }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <h2><a href={html_url} target='_blank' rel="noreferrer">{name}</a></h2>
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