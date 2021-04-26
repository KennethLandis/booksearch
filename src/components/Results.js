import React from 'react';
import Book from './Book';

function Results(props) {
    return (
    <ul className="booklist">
        {props.booklist.map(book => {
            return (
            <Book 
                key={book.id}
                title={book.volumeInfo.title}
                authors={book.volumeInfo.authors}
                description={book.volumeInfo.description}
            />
    )})}
    </ul>
    )
}

export default Results;