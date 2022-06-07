const CHECK_STATUS = 'CHECK_STATUS';

export default function categoriesReducer(state = { categories: [] }, action = {}) {
  switch (action.type) {
    case CHECK_STATUS: return state.categories.push('Under construction');
    default: return state;
  }
}

export function checkStatus(status) {
  return { type: CHECK_STATUS, status };
}
