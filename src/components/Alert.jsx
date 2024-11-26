import PropTypes from 'prop-types';

const Alert = ({ alert }) => {
  return (
    <div
      className={`${
        alert.error
          ? 'from-red-400 to-red-600'
          : 'from-indigo-400 to-indigo-600'
      } bg-gradient-to-r text-center p-3 rounded-xl text-white font-bold text-sm mb-10 `}
    >
      {alert.msg}
    </div>
  );
};

Alert.propTypes = {
  alert: PropTypes.shape({
    msg: PropTypes.string.isRequired,
    error: PropTypes.bool,
  }).isRequired,
};

export default Alert;
