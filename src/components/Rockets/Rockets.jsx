import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  cancelReservedRocket,
  getAllRockets,
  reserveRocket,
} from '../../redux/rockets/rockets';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRockets());
  }, []);

  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
  };

  const handleCancelReseravation = (id) => {
    dispatch(cancelReservedRocket(id));
  };

  return (
    <>
      {rockets.map((rocket) => (
        <Card className="rockets-card" key={rocket.id}>
          <Card.Img
            variant="top"
            src={rocket.rocket_img}
            className="rockets-img"
          />
          <Card.Body className="rockets-detail">
            <Card.Title>{rocket.name}</Card.Title>
            <Card.Text className="rocket-description">
              {rocket.reserved && (
                <Button variant="primary" className="btn-reserved" disabled>
                  Reserved
                </Button>
              )}
              {rocket.description}
            </Card.Text>
            {rocket.reserved ? (
              <Button
                variant="outline-secondary"
                onClick={() => handleCancelReseravation(rocket.id)}
              >
                Cancel Reseravation
              </Button>
            ) : (
              <Button
                variant="secondary"
                onClick={() => handleReserve(rocket.id)}
              >
                Reserve Rocket
              </Button>
            )}
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Rockets;
