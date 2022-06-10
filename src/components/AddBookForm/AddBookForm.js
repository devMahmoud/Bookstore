import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';
import './AddBookForm.css';

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
      <h3>ADD NEW BOOK</h3>
      <form className="add-form" onSubmit={addBookHandeler}>
        <input className="title-input" type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input className="author-input" type="text" placeholder="Book Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button className="add-btn" type="submit">ADD BOOK</button>
      </form>
    </div>
  );
};

export default AddBookForm;
