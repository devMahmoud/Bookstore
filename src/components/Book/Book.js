import PropTypes from 'prop-types';
import { CircularProgressBar } from '@tomik23/react-circular-progress-bar';
import './Book.css';

const Book = (props) => {
  const {
    title,
    author,
    category,
    percent,
  } = props;
  return (
    <div className="book-container">
      <p className="book-text">
        <span className="category-span">
          {category}
        </span>
        <br />
        <span className="title-span">
          {title}
        </span>
        <br />
        <span className="author-span">
          {author}
        </span>
      </p>
      <div className="progress-container">
        <CircularProgressBar
          colorCircle="#f1f1f1"
          colorSlice="#00a1ff"
          number={false}
          percent={percent}
          size={80}
        />
        <span>
          {percent}
          %
        </span>
      </div>
      <div className="chapter-info">
        <p>
          <span className="current-chapter">
            CURRENT CHAPTER
          </span>
          <br />
          <span className="chapter-num">
            Chapter 17
          </span>
        </p>
        <button type="button" className="update-btn">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  percent: PropTypes.number.isRequired,
};

export default Book;
