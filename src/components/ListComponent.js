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
                    <p>Description: {
                        description
                        ? <span> { description }</span>
                        : <span className='unknown'> None </span>
                    }</p>
                </div>
                <div>
                    <p>Languages: {
                        language ? <span className='exists'> { language }</span>
                        : <span className='unknown'> Unknown </span>
                    }</p>
                </div>
            </div>
        </div>
    );
}

export default ListComponent;