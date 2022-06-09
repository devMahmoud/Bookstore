import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import BooksList from '../components/BooksList/BooksList';
import AddBookForm from '../components/AddBookForm/AddBookForm';
import { retrieveBooks } from '../redux/books/books';

const Books = () => {
  const booksArr = useSelector((state) => state.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(retrieveBooks());
  }, []);
  return (
    <div>
      <BooksList books={booksArr} />
      <AddBookForm />
    </div>
  );
};

export default Books;
