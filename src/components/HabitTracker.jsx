import React from 'react';

function HabitTracker({ habits }) {
  return (
    <div className="habit-tracker">
      {habits.map((habit, index) => (
        <div key={index} className="habit-item" style={{ backgroundColor: habit.bgColor }}>
          <img src={habit.icon} alt={habit.name} className="habit-icon" />
          <div className="habit-info">
            <p className="habit-name">{habit.name}</p>
            <p className="habit-progress">{habit.progress}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HabitTracker;
