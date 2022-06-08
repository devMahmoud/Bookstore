import { useSelector } from 'react-redux';
import BooksList from '../components/BooksList/BooksList';
import AddBookForm from '../components/AddBookForm/AddBookForm';

const Books = () => {
  const booksArr = useSelector((state) => state.books);
  return (
    <div>
      <BooksList books={booksArr} />
      <AddBookForm />
    </div>
  );
};

export default Books;
