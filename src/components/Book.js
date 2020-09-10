import React from 'react'

const Book = (book) => {

    return (

        <li>
            <div>
                <h3>{book.category}</h3>
                <h1>{book.title}</h1>
            </div>
            <div>
                <button type="button">Delete Book</button>
            </div>
        </li>

    )
}


export default Book
