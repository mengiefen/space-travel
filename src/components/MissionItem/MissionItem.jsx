import { PropTypes } from 'prop-types';
import Button from 'react-bootstrap/Button';
import './MissionItem.scss';

const MissionItem = (props) => {
  const {
    id, name, description, reserved, handleJoinMission, handleLeaveMission,
  } = props;

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
            onClick={() => handleLeaveMission(id)}
          >
            Leave Mission
          </Button>
        ) : (
          <Button
            type="button"
            variant="outline-secondary"
            onClick={() => handleJoinMission(id)}
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
  handleJoinMission: PropTypes.func.isRequired,
  handleLeaveMission: PropTypes.func.isRequired,
};

export default MissionItem;
