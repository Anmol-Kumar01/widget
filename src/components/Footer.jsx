import React from 'react';

function Footer() {
  const tasks = ['Reading', 'Cleaning', 'Movies', 'Cycling'];

  return (
    <div className="footer">
      {tasks.map((task, index) => (
        <div key={index} className="task-item">
          <span className="checkmark">✔</span>
          <p>{task}</p>
        </div>
      ))}
    </div>
  );
}

export default Footer;
