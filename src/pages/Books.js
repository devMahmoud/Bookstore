import BooksList from '../components/BooksList/BooksList';
import AddBookForm from '../components/AddBookForm/AddBookForm';

const Books = () => (
  <div>
    <BooksList books={[{ title: 'book1', author: 'author1', key: '1' }, { title: 'book2', author: 'author2', key: '2' }]} />
    <AddBookForm />
  </div>
);

export default Books;
