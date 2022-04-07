import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

const MyProfile = () => {
  const [reservedRockets, setReservedRockets] = useState([]);
  const [reservedMissions, setReservedMissions] = useState([]);
  const rockets = useSelector((state) => state.rockets);
  const missions = useSelector((state) => state.missionsReducer);
  useEffect(() => {
    setReservedRockets(rockets.filter((rocket) => rocket.reserved === true));
    setReservedMissions(missions.filter((mission) => mission.reserved === true));
  });

  return (
    <div className="list">
      <ListGroup className="reserved-list">
        <h2 className="rocket-title">My Rockets</h2>
        {reservedRockets.map((rocket) => (
          <ListGroup.Item key={rocket.id} disabled>
            {rocket.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
      <ListGroup className="reserved-list">
        <h2 className="rocket-title">My Missions</h2>
        {reservedMissions.map((mission) => (
          <ListGroup.Item key={mission.id} disabled>
            {mission.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MyProfile;
