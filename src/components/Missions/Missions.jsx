import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import MissionItem from '../MissionItem/MissionItem';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);

  return (
    <section className="missions-container">
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
          {
            missionList.map((mission) => (
              <MissionItem
                key={mission.id}
                id={mission.id}
                name={mission.name}
                description={mission.description}
                reserved={mission.reserved}
              />
            ))
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Missions;
