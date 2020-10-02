import React from 'react';
import './App.css';

import { JobList, HideOnScroll } from './organisms';


// const mock = [
//   {title: 'Software Engineer I', company: 'Airbnb', rating: 2.4},
//   {title: 'Senior Software Engineer', company: 'Netlify', rating: 4.3},
//   {title: 'Big Data Engineer', company: 'Databricks', rating: 4.9}
// ]

function App() {
  return (
    <div className="App">
      <HideOnScroll />
      <JobList />
    </div>
  );
}

export default App;
