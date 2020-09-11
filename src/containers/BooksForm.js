import React from 'react'

const BooksForm = (book) => {

    const categories = [
        'Select Category',
        'Action',
        'Biography',
        'History',
        'Horror',
        'Kids',
        'Learning',
        'Sci-Fi'
    ]
    return (
        <form action="#">
            <input type="text" />
            <select name="category" id="category">
                {
                    categories.map((cat, id) => (
                        <option key={`opt_${id}`} value={id}>{cat}</option>
                    ))
                }
            </select>
            <button type="button">Add Book</button>
        </form>

    )
}


export default BooksForm