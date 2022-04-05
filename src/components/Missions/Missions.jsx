import React from 'react';
import { useSelector } from 'react-redux';
import MissionItem from '../MissionItem/MissionItem';
import '../MissionItem/MissionItem.scss';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);

  return (
    <section className="missions-container">
      <table striped bordered hover>
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
              />
            ))
          }
        </tbody>
      </table>
    </section>
  );
};

export default Missions;
