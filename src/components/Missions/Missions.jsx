import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import {
  joinMission,
  leaveMission,
  fetchMissionsFromAPI,
} from '../../redux/missions/missions';
import MissionItem from '../MissionItem/MissionItem';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMissionsFromAPI());
  }, []);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
  };

  return (
    <Container className="missions-container">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th>Content</th>
          </tr>
        </thead>
        <tbody>
          {missionList.map((mission) => (
            <MissionItem
              key={mission.id}
              id={mission.id}
              name={mission.name}
              description={mission.description}
              reserved={mission.reserved}
              handleJoinMission={handleJoinMission}
              handleLeaveMission={handleLeaveMission}
            />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default Missions;
