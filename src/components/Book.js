import React from 'react';

function Book(props) {
    return (
        <li>
            <h2>{props.title}</h2>
            <p>{props.authors}</p>
            <p>{props.description}</p>
        </li>
    )
}

export default Book;