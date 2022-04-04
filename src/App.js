import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Rockets from './components/Rockets/Rockets';
import Missions from './components/Missions/Missions';
import MyProfile from './components/MyProfile/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route to="/" element={<Rockets />} />
        <Route to="missions" element={<Missions />} />
        <Route to="my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
