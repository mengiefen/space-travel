import missionsReducer from '../redux/missions/missions';

describe('missions reducer test ', () => {
  it('when action is join mission, return new state with reserved equals true', () => {
    // arrange
    const JOIN_MISSION = 'space-travel/missions/JOIN_MISSION';
    const action = { type: JOIN_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: false },
    ];
    // act
    const result = missionsReducer(state, action);
    // assert
    const newState = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: true },
    ];
    expect(result).toEqual(newState);
  });

  it('when action is leave mission, return new state with reserved equals false', () => {
    // arrange
    const LEAVE_MISSION = 'space-travel/missions/LEAVE_MISSION';
    const action = { type: LEAVE_MISSION, id: '2' };
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: true },
    ];
    // act
    const result = missionsReducer(state, action);
    // assert
    const newState = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: false },
    ];
    expect(result).toEqual(newState);
  });

  it('when action is leave mission, return new state with reserved equals false', () => {
    // arrange
    const state = [
      { id: '0', name: 'Thaicom', reserved: false },
      { id: '1', name: 'Telstar1', reserved: false },
      { id: '2', name: 'Iridium NEXT', reserved: true },
    ];
    const FETCH_MISSIONS = 'space-travel/missions/FETCH_MISSIONS';
    const action = { type: FETCH_MISSIONS, payload: state };
    // act
    const result = missionsReducer([], action);
    // assert
    expect(result).toEqual(state);
  });
});