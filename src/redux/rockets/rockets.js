import { getAllRocketsFromAPI } from '../apiCalls/apiCalls';

const GET_ROCKETS = 'spaceTravel/Rockets/GET_ROCKETS';
const RESERVE_ROCKETS = 'spaceTravel/Rockets/RESERVE_ROCKETS';
const CANCEL_RESERVED_ROCKET = 'spaceTravel/Rockets/CANCEL_RESERVED_ROCKET';

const initialState = [];

const rocketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ROCKETS:
      if (state.length > 0) return state;
      return action.rockets;
    case RESERVE_ROCKETS:
      return state.map((rocket, index) => {
        if (index !== action.id) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: true,
        };
      });

    case CANCEL_RESERVED_ROCKET:
      return state.map((rocket, index) => {
        if (index !== action.id) {
          return rocket;
        }
        return {
          ...rocket,
          reserved: false,
        };
      });

    default:
      return state;
  }
};

export const getRocketsList = (rockets) => ({
  type: GET_ROCKETS,
  rockets,
});

export const reserveRocket = (id) => ({
  type: RESERVE_ROCKETS,
  id,
});

export const cancelReservedRocket = (id) => ({
  type: CANCEL_RESERVED_ROCKET,
  id,
});

export const getAllRockets = () => async (dispatch) => {
  const rockets = [];
  await getAllRocketsFromAPI().then((result) => {
    result.forEach((rocket) => {
      rockets.push({
        id: rocket.id - 1,
        rocket_id: rocket.rocket_id,
        description: rocket.description,
        name: rocket.rocket_name,
        rocket_img: rocket.flickr_images,
        reserved: false,
      });
    });
    dispatch(getRocketsList(rockets));
  });

  return rockets;
};

export default rocketsReducer;
