import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import ListGroup from 'react-bootstrap/ListGroup';

const MyProfile = () => {
  const [reservedRockets, setReservedRockets] = useState([]);
  const rockets = useSelector((state) => state.rockets);
  useEffect(() => {
    setReservedRockets(rockets.filter((rocket) => rocket.reserved === true));
  });
  return (
    <div className="rocket-list">
      <ListGroup className="reserved-list">
        <h2 className="rocket-title">My Rockets</h2>
        {reservedRockets.map((rocket) => (
          <ListGroup.Item key={rocket.id} disabled>
            {rocket.name}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default MyProfile;
