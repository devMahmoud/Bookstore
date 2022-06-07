const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export default function booksReducer(state = { books: [] }, action = {}) {
  switch (action.type) {
    case ADD_BOOK: return state.books.push(action.book);
    case REMOVE_BOOK: return state.books.pop(action.book);
    default: return state;
  }
}

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(book) {
  return { type: REMOVE_BOOK, book };
}
