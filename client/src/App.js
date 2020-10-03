import React from 'react';
import { ThemeProvider } from '@material-ui/styles';

import { theme } from './lib/theme';

import './App.css';

import { HideOnScroll, PageHeader } from './organisms';


// const mock = [
//   {title: 'Software Engineer I', company: 'Airbnb', rating: 2.4},
//   {title: 'Senior Software Engineer', company: 'Netlify', rating: 4.3},
//   {title: 'Big Data Engineer', company: 'Databricks', rating: 4.9}
// ]

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HideOnScroll />
      <PageHeader />
    </ThemeProvider>
  );
}

export default App;
