import React from 'react';
import './App.css';
import Header from './components/Header';
import DateProgress from './components/DateProgress';
import HabitTracker from './components/HabitTracker';
import Footer from './components/Footer';

function App() {
  const habits = [
    { name: 'Water', icon: '/images/water.jpg', progress: '2L', bgColor: '#7fe1c3' },
    { name: 'Step Counts', icon: '/images/steps.jpg', progress: '700 steps', bgColor: '#f9e080' },
    { name: 'Yoga', icon: '/images/yoga.jpg', progress: '1 hr', bgColor: '#94f9a0' },
    { name: 'Swimming', icon: '/images/swimming.png', progress: '1 hr', bgColor: '#f58f8f' },
  ];

  const dates = ['16 Tue', '17 Fri', '18 Sat', '19 Sun', '20 Mon'];

  return (
    <div className="App">
      <Header />
      <DateProgress dates={dates} />
      <HabitTracker habits={habits} />
      <Footer />
    </div>
  );
}

export default App;
1