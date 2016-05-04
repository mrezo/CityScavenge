import expect from 'expect';
import * as actions from '../../client/TodoActions';
import * as types from '../../constants/ActionTypes';
import reducer from '../../reducers/todos';

describe('actions', () => {
  it('should create an action to add a todo', () => {
    const text = 'Finish docs';
    const expectedAction = {
      type: types.ADD_TODO,
      text,
    };
    expect(actions.addTodo(text)).toEqual(expectedAction);
  });
});

describe('todos reducer', () => {
  it('should return the initial state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual([
      {
        text: 'Use Redux',
        completed: false,
        id: 0,
      },
    ]);
  });

  it('should handle ADD_TODO', () => {
    expect(
      reducer([], {
        type: types.ADD_TODO,
        text: 'Run the tests',
      })
    ).toEqual(
      [
        {
          text: 'Run the tests',
          completed: false,
          id: 0,
        },
      ]
    );

    expect(
      reducer(
        [
          {
            text: 'Use Redux',
            completed: false,
            id: 0,
          },
        ],
        {
          type: types.ADD_TODO,
          text: 'Run the tests',
        }
      )
    ).toEqual(
      [
        {
          text: 'Run the tests',
          completed: false,
          id: 1,
        },
        {
          text: 'Use Redux',
          completed: false,
          id: 0,
        },
      ]
    );
  });
});
