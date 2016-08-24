import React, { PropTypes } from 'react';
import { Link } from 'react-router';

import UserDetails from './user_details';
import UserDetailsWrapper from './user_details_wrapper';
import Styles from '../styles';

const StartOver = () => (
  <div className="col-sm-12">
    <Link to="/playerOne">
      <button type="button" className="btn btn-lg btn-danger" style={Styles.space}>
        Start Over Again
      </button>
    </Link>
  </div>
);

const Results = (props) => {
  if (props.isLoading) {
    return (
      <p>Loading</p>
    );
  }

  if (props.scores[0] === props.scores[1]) {
    return (
      <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
        <h1>Draw Game!</h1>
        <StartOver />
      </div>
    );
  }

  const winnerIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  const loserIndex = winnerIndex === 0 ? 1 : 0;

  return (
    <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offset-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails
            score={props.scores[winnerIndex]}
            info={props.playersInfo[winnerIndex]}
          />
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails
            score={props.scores[loserIndex]}
            info={props.playersInfo[loserIndex]}
          />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </div>
  );
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired,
};

export default Results;
