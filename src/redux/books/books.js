import BookDataService from '../../services/BookService';

const RETRIEVE_BOOKS = 'bookstore/books/RETRIEVE_BOOKS';
const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

export const retrieveBooks = () => async (dispatch) => {
  try {
    const res = await BookDataService.getAll();
    const { data } = res;
    const books = Object.keys(data).map((key) => ({
      item_id: key,
      ...data[key][0],
    }));
    dispatch({
      type: RETRIEVE_BOOKS,
      books,
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
      book,
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

export default function booksReducer(state = [], action = {}) {
  switch (action.type) {
    case RETRIEVE_BOOKS:
      return [...action.books];
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return [...state].filter((book) => book.item_id !== action.id);
    default: return state;
  }
}
