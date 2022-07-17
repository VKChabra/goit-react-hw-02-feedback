const Section = ({ title, children }) => {
  return (
    <div className="section">
      {<h2 className="title">{title}</h2>}
      {children}
    </div>
  );
};

export default Section;
