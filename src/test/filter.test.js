import deepFreeze from 'deep-freeze';
import filter from '../reducers/filter';
import { changeFilter } from '../actions/index';

it('test changeFilter', () => {
  const stateBefore = '';

  const stateAfter = 'New category';

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(changeFilter); // makes sure reducer is pure function

  expect(
    filter(stateBefore, changeFilter('New category')),
  ).toEqual(stateAfter);
});

it('test changeFilter to empty string', () => {
  const stateBefore = 'All';

  const stateAfter = 'All';

  /* inmmutability check */
  deepFreeze(stateBefore); // makes sure reducer is pure function
  deepFreeze(changeFilter); // makes sure reducer is pure function

  expect(
    filter(stateBefore, changeFilter('')),
  ).toEqual(stateAfter);
});
