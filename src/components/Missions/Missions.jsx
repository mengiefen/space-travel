import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import Table from 'react-bootstrap/Table';
import { joinMission, leaveMission, fetchMissionsFromAPI } from '../../redux/missions/missions';
import MissionItem from '../MissionItem/MissionItem';

const Missions = () => {
  const missionList = useSelector((state) => state.missionsReducer);
  const [cookie, setCookie] = useCookies(['missions']);
  const dispatch = useDispatch();

  useEffect(() => {
    if (missionList && cookie.missions === undefined) {
      setCookie('missions', missionList, { path: '/' });
    } else {
      dispatch(fetchMissionsFromAPI());
    }
  }, []);

  const handleJoinMission = (id) => {
    dispatch(joinMission(id));
    const newCookie = cookie.missions.map((mission, index) => {
      if (index !== id) {
        return mission;
      }
      return {
        ...mission,
        reserved: true,
      };
    });
    setCookie('missions', newCookie, { path: '/' });
  };

  const handleLeaveMission = (id) => {
    dispatch(leaveMission(id));
    const newCookie = cookie.missions.map((mission, index) => {
      if (index !== id) {
        return mission;
      }
      return {
        ...mission,
        reserved: false,
      };
    });
    setCookie('missions', newCookie, { path: '/' });
  };

  console.log(cookie.missions);
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
            cookie.missions.map((mission) => (
              <MissionItem
                key={mission.id}
                id={mission.id}
                name={mission.name}
                description={mission.description}
                reserved={mission.reserved}
                handleJoinMission={handleJoinMission}
                handleLeaveMission={handleLeaveMission}
              />
            ))
          }
        </tbody>
      </Table>
    </section>
  );
};

export default Missions;
