import React from 'react'
import Book from '../components/Book'

const BooksList = () => {
    let booklist = [
        {
            id: 1,
            category: 'Horror',
            title: 'Psycho Thriller'
        },
        {
            id: 2,
            category: 'History',
            title: 'Mine Craft - Adolf Hittler'
        },
        {
            id: 3,
            category: 'Learning',
            title: 'Tools of Titans'
        }
    ]
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
