import React from 'react';

function DateProgress({ dates }) {
  return (
    <div className="date-progress">
      {dates.map((date, index) => (
        <div key={index} className="date-item">
          <div className="date-circle">{date.split(' ')[0]}</div>
          <p>{date.split(' ')[1]}</p>
        </div>
      ))}
    </div>
  );
}

export default DateProgress;
