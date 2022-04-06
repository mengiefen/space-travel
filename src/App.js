import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header/Header';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Routes>
    </Provider>
  );
}

export default App;
