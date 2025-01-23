import React from 'react';
import MetricsPanel from './MetricsPanel';
import ScenarioPanel from './ScenarioPanel';
import NewsTicker from './NewsTicker';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <MetricsPanel />
      <ScenarioPanel />
      <NewsTicker />
    </div>
  );
};

export default Dashboard;