import rocketsReducer, {
  CANCEL_RESERVED_ROCKET,
  GET_ROCKETS,
  RESERVE_ROCKETS,
} from '../redux/rockets/rockets';

describe('the rocket reducer test', () => {
  it('when action is GET_ROCKETS, return all states from store', () => {
    // arrange
    const state = [
      {
        id: 1,
        name: 'ROCKET-1',
        reserved: false,
      },
      {
        id: 2,
        name: 'ROCKET-2',
        reserved: false,
      },
      {
        id: 3,
        name: 'ROCKET-3',
        reserved: true,
      },
    ];

    const action = { type: GET_ROCKETS, rockets: state };

    // act
    const result = rocketsReducer([], action);
    // assert

    expect(result).toEqual(state);
  });

  it('when action is RESERVE_ROCKETS, return new state with reserved equals true', () => {
    // arrange
    const state = [
      {
        id: 1,
        name: 'ROCKET-1',
        reserved: false,
      },
      {
        id: 2,
        name: 'ROCKET-2',
        reserved: false,
      },
      {
        id: 3,
        name: 'ROCKET-3',
        reserved: false,
      },
    ];
    const action = { type: RESERVE_ROCKETS, id: 1 };
    // act
    const result = rocketsReducer(state, action);
    // assert
    const newState = [
      {
        id: 1,
        name: 'ROCKET-1',
        reserved: true,
      },
      {
        id: 2,
        name: 'ROCKET-2',
        reserved: false,
      },
      {
        id: 3,
        name: 'ROCKET-3',
        reserved: false,
      },
    ];
    expect(result).toEqual(newState);
  });

  it('when action is CANCEL_RESERVE_ROCKETS, return new state with reserved equals false', () => {
    // arrange
    const state = [
      {
        id: 1,
        name: 'ROCKET-1',
        reserved: true,
      },
      {
        id: 2,
        name: 'ROCKET-2',
        reserved: false,
      },
      {
        id: 3,
        name: 'ROCKET-3',
        reserved: false,
      },
    ];
    const action = { type: CANCEL_RESERVED_ROCKET, id: 1 };
    // act
    const result = rocketsReducer(state, action);
    // assert
    const newState = [
      {
        id: 1,
        name: 'ROCKET-1',
        reserved: false,
      },
      {
        id: 2,
        name: 'ROCKET-2',
        reserved: false,
      },
      {
        id: 3,
        name: 'ROCKET-3',
        reserved: false,
      },
    ];
    expect(result).toEqual(newState);
  });
});
