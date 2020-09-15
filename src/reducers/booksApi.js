import { GET_BOOKLIST, RECIEVED_DATA, STORE_BOOK, DELETE_BOOK } from '../helpers/help';

const defaultState = {
    fetching: false,
    action: '',
    booksStore: []

}

const booksAPI = (state = defaultState, action) => {
    switch (action.type) {
        case GET_BOOKLIST: //used to fetch the total book list
            return {
                fetching: true,
                action: 'get_book_list',
                booksStore: []
            }
        case RECIEVED_DATA: //Used to confirm data received o action executer (create/destroy) and update new list into store
            return {
                fetching: false,
                booksStore: action.booksStore
            }
        case STORE_BOOK: //Used to initiate a new book storage into API (POST Action)
            return {
                fetching: true,
                action: 'store_new_book',
                book: action.book
            }

        case DELETE_BOOK: //Used to initiate a book destroy into API (PUT ACTION)
            return {
                fetching: true,
                action: 'delete_old_book',
                book: action.book
            }
        default:
            return state;
    }
};

export default booksAPI;
