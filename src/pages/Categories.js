import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const checkStatusHandeler = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button type="button" onClick={checkStatusHandeler}>Check status</button>
      <h3>{categories}</h3>
    </div>
  );
};

export default Categories;
