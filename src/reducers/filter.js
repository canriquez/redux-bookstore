import { CHANGE_FILTER } from '../helpers/help';

const filter = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.filter || state;
    default:
      return state;
  }
};

export default filter;
