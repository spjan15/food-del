import './Loader.css';
import PropTypes from 'prop-types';
const Loader = ({ loading }) => {
    return loading ? (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    ) : null;
  };

  Loader.propTypes = {
    loading: PropTypes.bool.isRequired,  // Expect loading to be a boolean and required
  };
  

export default Loader;