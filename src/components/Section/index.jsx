import styles from 'components/Section/styles.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={styles.section}>
      {<h2 className="title">{title}</h2>}
      {children}
    </div>
  );
};

export default Section;