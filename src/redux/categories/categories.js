const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';

export function checkStatus(status) {
  return { type: CHECK_STATUS, status };
}

export default function categoriesReducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS: return [...state, 'Under construction'];
    default: return state;
  }
}
