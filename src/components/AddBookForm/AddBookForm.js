import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../../redux/books/books';

const AddBookForm = () => {
  const [title, setTitle] = useState();
  const [author, setAuthor] = useState();
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
  };

  return (
    <div className="form-container">
      <h3>Add Book</h3>
      <form>
        <input type="text" placeholder="Book Title" onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Book Author" onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit" onClick={addBookHandeler}>Add</button>
      </form>
    </div>
  );
};

export default AddBookForm;
