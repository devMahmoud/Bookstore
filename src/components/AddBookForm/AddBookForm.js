import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const addBookHandeler = (event) => {
    event.preventDefault();
    if (!title || !author) return;
    const book = {
      title,
      author,
      item_id: uuidv4(),
      category: 'Fiction',
    };
    dispatch(addBook(book));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="form-container">
      <h3>Add Book</h3>
      <form onSubmit={addBookHandeler}>
        <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddBookForm;
