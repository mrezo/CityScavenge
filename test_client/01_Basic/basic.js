const expect = require('chai').expect;
const deepFreeze = require('deep-freeze-node');
// import * as actions from '../../client/TodoActions';
// import * as types from '../../constants/ActionTypes';
import users from '../../client/reducers/users';
import leftNav from '../../client/reducers/leftNav';

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
      users(stateBefore, action)
    ).to.eql(stateAfter);
  });

  it('should return a modified visible in state', () => {
    const stateBefore = {
      visible: false,
    };
    const action = {
      type: 'TOGGLE_NAV',
    };
    const stateAfter = {
      visible: true,
    };

    deepFreeze(stateBefore);
    deepFreeze(action);

    expect(
      leftNav(stateBefore, action)
    ).to.eql(stateAfter);
  });
});
