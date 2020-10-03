import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
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
    <Auth0Provider
      domain="hookorg.auth0.com"
      clientId="vBZIvz1tVc0v5y07Wbo8n9jrblSEGcqF"
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <HideOnScroll />
        <PageHeader />
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
