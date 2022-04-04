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
        <Route path="/" element={<Rockets />} />
        <Route path="missions" element={<Missions />} />
        <Route path="my-profile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
