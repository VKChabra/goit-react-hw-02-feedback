import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="statistics">
      <p className="statistics__good">Good: {good}</p>
      <p className="statistics__neutral">Neutral: {neutral}</p>
      <p className="statistics__bad">Bad: {bad}</p>
      <p className="statistics__total">Total: {total}</p>
      <p className="statistics__positiveFeedback">
        Positive feedback: {positivePercentage}%
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
