// App.js
import React from 'react';
import Header from './components/Header';
import LeftSidebar from './components/LeftSidebar';
import RightSidebar from './components/RightSidebar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <LeftSidebar />
          </div>
          <div className="col-md-6">
            <MainContent />
          </div>
          <div className="col-md-3">
            <RightSidebar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
