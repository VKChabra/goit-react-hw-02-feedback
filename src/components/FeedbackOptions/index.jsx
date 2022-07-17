import styles from 'components/FeedbackOptions/styles.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={styles.feedbackOptions}>
      {options.map((option, index) => (
        <button
          key={index}
          type="button"
          className={option}
          onClick={onLeaveFeedback}
        >
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
