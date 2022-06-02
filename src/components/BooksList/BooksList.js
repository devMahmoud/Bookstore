import PropTypes from 'prop-types';
import Book from '../Book/Book';

const BookList = (props) => {
  const { books } = props;
  return (
    <ul>
      {
        books.map((book) => (
          <li key={book.key}>
            <Book title={book.title} author={book.author} />
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
