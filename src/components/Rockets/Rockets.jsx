import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
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
  const [cookie, setCookie] = useCookies(['rockets']);
  const dispatch = useDispatch();
  useEffect(() => {
    if (rockets && cookie.rockets === undefined) {
      setCookie('rockets', rockets, { path: '/' });
    } else {
      dispatch(getAllRockets());
    }
  }, []);
  const handleReserve = (id) => {
    dispatch(reserveRocket(id));
    const newCookie = cookie.rockets.map((rocket, index) => {
      if (index !== id) {
        return rocket;
      }
      return {
        ...rocket,
        reserved: true,
      };
    });
    setCookie('rockets', newCookie, { path: '/' });
  };

  const handleCancelReseravation = (id) => {
    dispatch(cancelReservedRocket(id));

    const newCookie = cookie.rockets.map((rocket, index) => {
      if (index !== id) {
        return rocket;
      }
      return {
        ...rocket,
        reserved: false,
      };
    });
    setCookie('rockets', newCookie, { path: '/' });
  };

  return (
    <>
      {cookie.rockets.map((rocket) => (
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
