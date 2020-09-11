import React from 'react'
import Book from '../components/Book'

const BooksList = ({ store }) => {
    return (
        <div>
            <ul>
                {
                    booklist.map(book =>
                        <Book
                            key={book.id}
                            {...book}
                        />
                    )
                }

            </ul>
        </div>
    )
}


export default BooksList
