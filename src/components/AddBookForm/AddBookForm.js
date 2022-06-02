const AddBookForm = () => (
  <div className="form-container">
    <h3>Add Book</h3>
    <form>
      <input type="text" placeholder="Book Title" />
      <input type="text" placeholder="Book Author" />
      <button type="submit">Add</button>
    </form>
  </div>
);

export default AddBookForm;
