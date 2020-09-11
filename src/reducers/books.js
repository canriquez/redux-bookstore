import { CREATE_BOOK, REMOVE_BOOK } from '../helpers/help'


const books = (state = [], action) => {
    switch (action.type) {
        case CREATE_BOOK:
            return [
                ...state,
                {
                    id: action.id,
                    title: action.title,
                    category: action.category
                }
            ]
        case REMOVE_BOOK:
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1, state.length)
            ]
        default:
            return state;

    }
}