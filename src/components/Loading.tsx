import React from 'react';
import './Loading.css'

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <h3>Buscando dados na Blockchain...</h3>
      <div className="spinner"></div>
    </div>
  );
};

export default Loading;
