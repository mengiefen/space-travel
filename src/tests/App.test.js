import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MyProfile from '../components/MyProfile/MyProfile';
import Rockets from '../components/Rockets/Rockets';
import Missions from '../components/Missions/Missions';
import MissionItem from '../components/MissionItem/MissionItem';
import Header from '../components/Header/Header';
import App from '../App'

it('MyProfile renders correctly when there are no items', () => {
  const tree = renderer.create(
  <Provider store={store}>
    <MyProfile />
  </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Rockets renders correctly when there are no items', () => {
  const tree = renderer.create(
  <Provider store={store}>
    <Rockets />
  </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Missions renders correctly when there are no items', () => {
  const tree = renderer.create(
  <Provider store={store}>
    <Missions />
  </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('MissionItem renders correctly when there are no items', () => {
  const tree = renderer.create(
  <Provider store={store}>
    <MissionItem />
  </Provider>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Header renders correctly when there are no items', () => {
  const tree = renderer.create(
  <Router>
    <Header />
  </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});

it('App renders correctly when there are no items', () => {
  const tree = renderer.create(
  <Router>
    <App />
  </Router>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});