const expect = require('chai').expect;
const deepFreeze = require('deep-freeze-node');
// import * as actions from '../../client/TodoActions';
// import * as types from '../../constants/ActionTypes';
import reducer from '../../client/reducers/reducers';

// TODO example to test an action below
// describe('actions', () => {
//   it('should create an action to add a todo', () => {
//     const text = 'Finish docs';
//     const expectedAction = {
//       type: types.ADD_TODO,
//       text,
//     };
//     expect(actions.addTodo(text)).toEqual(expectedAction);
//   });
// });

describe('Reducer', () => {
  it('should return the initial state', () => {
    const stateBefore = {};
    const action = {
      type: 'NEW_ACTION',
    };
    const stateAfter = {};

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      reducer(stateBefore, action)
    ).to.eql(stateAfter);
  });

  it('should return a modified username in state', () => {
    const stateBefore = {
      username: 'Alexander',
    };
    const action = {
      type: 'CHANGE_USER_NAME',
      username: 'Hao',
    };
    const stateAfter = {
      username: 'Hao',
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      reducer(stateBefore, action)
    ).to.eql(stateAfter);
  });
});
