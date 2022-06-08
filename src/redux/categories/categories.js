const CHECK_STATUS = 'bookstore/books/CHECK_STATUS';

export function checkStatus(status) {
  return { type: CHECK_STATUS, status };
}

export default function categoriesReducer(state = { categories: [] }, action = {}) {
  switch (action.type) {
    case CHECK_STATUS: return state.categories.push('Under construction');
    default: return state;
  }
}
