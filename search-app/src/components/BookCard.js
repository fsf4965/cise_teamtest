import React from 'react';
import '../App.css';

const BookCard = (props) => {
    const  book  = props.book;

    return(
            <tr>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.journal}</td>
                <td>{book.year}</td>
                <td>{book.eprint}</td>
                <td>{book.eprinttype}</td>
                <td>{book.eprintclass}</td>
                <td>{book.pages}</td>
                <td>{book.month}</td>
                <td>{book.annote}</td> 
            </tr>
    )
};

export default BookCard;