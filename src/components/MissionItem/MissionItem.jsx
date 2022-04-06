import { PropTypes } from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { joinMission, leaveMission } from '../../redux/missions/missions';
import './MissionItem.scss';

const MissionItem = (props) => {
  const dispatch = useDispatch();
  const {
    id, name, description, reserved,
  } = props;

  const handleJoinMission = () => {
    dispatch(joinMission(id));
  };

  const handleLeaveMission = () => {
    dispatch(leaveMission(id));
  };

  return (
    <tr id={id}>
      <td className="td-name">{name}</td>
      <td className="td-description">{description}</td>
      <td className="td-badge">
        {reserved ? (
          <Button variant="primary" className="btn-reserved" disabled>ACTIVE MEMBER</Button>
        ) : (
          <Button variant="secondary" className="btn-reserved">NOT A MEMBER</Button>
        )}
      </td>
      <td className="td-button">
        {reserved ? (
          <Button
            type="button"
            variant="secondary"
            onClick={handleLeaveMission}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            type="button"
            variant="outline-secondary"
            onClick={handleJoinMission}
          >
            Join Mission
          </Button>
        )}
      </td>
    </tr>
  );
};

MissionItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};

export default MissionItem;
