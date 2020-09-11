import React from 'react'
import Book from '../components/Book'
import { connect } from 'react-redux'



const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {}
}


const renderList = ({
    state
}) => {

    return (
        <div>
            <ul>
                {
                    state.books.map(book =>
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

const BooksList = connect(
    mapStateToProps,
    mapDispatchToProps
)(renderList)


export default BooksList
