import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <div className="section">
      {<h2 className="title">{title}</h2>}
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object.isRequired,
};

export default Section;
