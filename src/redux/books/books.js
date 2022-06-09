import BookDataService from '../../services/BookService';

const RETRIEVE_BOOKS = 'bookstore/books/RETRIEVE_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initBooks = [{ title: 'book1', author: 'author1', id: '1' }, { title: 'book2', author: 'author2', id: '2' }];

export const retrieveBooks = () => async (dispatch) => {
  try {
    const res = await BookDataService.getAll();
    dispatch({
      type: RETRIEVE_BOOKS,
      books: res.data,
    });
  } catch (err) {
    console.log(err);
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    const res = await BookDataService.create(book);
    dispatch({
      type: ADD_BOOK,
      book: res.data,
    });
    return Promise.resolve(res.data);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const removeBook = (id) => async (dispatch) => {
  try {
    await BookDataService.remove(id);
    dispatch({
      type: REMOVE_BOOK,
      id,
    });
  } catch (err) {
    console.log(err);
  }
};

export default function booksReducer(state = initBooks, action = {}) {
  switch (action.type) {
    case RETRIEVE_BOOKS:
      return action.books;
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}
