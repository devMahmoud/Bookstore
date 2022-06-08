const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const initBooks = [{ title: 'book1', author: 'author1', id: '1' }, { title: 'book2', author: 'author2', id: '2' }];

export function addBook(book) {
  return { type: ADD_BOOK, book };
}

export function removeBook(id) {
  return { type: REMOVE_BOOK, id };
}

export default function booksReducer(state = initBooks, action = {}) {
  switch (action.type) {
    case ADD_BOOK: return [...state, action.book];
    case REMOVE_BOOK: return state.filter((book) => book.id !== action.id);
    default: return state;
  }
}
