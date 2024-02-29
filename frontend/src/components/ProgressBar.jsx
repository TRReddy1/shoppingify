import React from "react";

const ProgressBar = ({ name, width }) => {
  return (
    <div className="progress-box">
      <div className="progress-text">
        <div className="progress-item">{name}</div>
        <div className="progress-percent">{width} % </div>
      </div>

      <div className="progress-outer">
        <div className="progress-inner" style={{ width: `${width}%` }}></div>
      </div>
    </div>
  );
};

export default ProgressBar;
