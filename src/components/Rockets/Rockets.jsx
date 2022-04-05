import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {
  cancelReservedRocket,
  getAllRockets,
  reserveRocket,
} from '../../redux/rockets/rockets';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Rockets.scss';

const Rockets = () => {
  const rockets = useSelector((state) => state.rockets);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllRockets());
  }, []);
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
            <Card.Text>
              {rocket.reserved && (
                <Button variant="primary" className="btn-reserved">
                  Reserved
                </Button>
              )}
              {rocket.description}
            </Card.Text>
            <Button
              variant={rocket.reserved ? 'outline-secondary' : 'secondary'}
              onClick={() => {
                if (rocket.reserved) dispatch(cancelReservedRocket(rocket.id));
                else dispatch(reserveRocket(rocket.id));
              }}
            >
              {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rockets'}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default Rockets;
