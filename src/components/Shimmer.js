const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {Array(15)
        .fill("")
        .map((item, index) => {
          return <div className="shimmer-card" key={index}></div>;
        })}
    </div>
  );
};

export default Shimmer;
