import React from 'react'
import '../App.css'

const ListComponent = ({ name, description, language, html_url }) => {
    return (
        <div className='card'>
            <div className='card-body'>
                <div>
                    <h4><a href={html_url} target='_blank' rel="noreferrer">{name}</a></h4>
                </div>
                <hr/>
                <div>
                    <p>Description: {description}</p>
                </div>
                <div>
                    <p>Languages: {language}</p>
                </div>
            </div>
        </div>
    );
}

export default ListComponent;