import React from 'react'

const Book = ({
    id,
    category,
    title
}) => {

    return (

        <li>
            <div>
                <h3>{category}</h3>
                <h1>{title}</h1>
            </div>
            <div>
                <button type="button">Delete Book</button>
            </div>
        </li>

    )
}


export default Book
