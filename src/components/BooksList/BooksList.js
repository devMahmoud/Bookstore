import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Book from '../Book/Book';
import { removeBook } from '../../redux/books/books';
import './BooksList.css';

const BookList = (props) => {
  const { books } = props;
  const dispatch = useDispatch();
  const removeBookHandeler = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <ul>
      {
        books.map((book) => (
          <li className="book-item" key={books.indexOf(book)}>
            <Book title={book.title} author={book.author} key={book.item_id} />
            <button type="button">Comments</button>
            <button type="button" onClick={() => removeBookHandeler(book.item_id)}>Remove</button>
            <button type="button">Edit</button>
          </li>
        ))
      }
    </ul>
  );
};

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default BookList;
