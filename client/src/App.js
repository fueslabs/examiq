import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@material-ui/styles';
import { Router } from "@reach/router"
import { theme } from './lib/theme';

import './App.css';

import { HideOnScroll } from './organisms';
import { About, Blog, Contact, Faq, Home, Reviews, Teachers } from './templates';


// const mock = [
//   {title: 'Software Engineer I', company: 'Airbnb', rating: 2.4},
//   {title: 'Senior Software Engineer', company: 'Netlify', rating: 4.3},
//   {title: 'Big Data Engineer', company: 'Databricks', rating: 4.9}
// ]

function App() {
  return (
    <Auth0Provider
      domain="examiq.us.auth0.com"
      clientId="6X4KUOXoLsWi0DhyBmjFaQPmENLKSnhW"
      redirectUri={window.location.origin}
    >
      <ThemeProvider theme={theme}>
        <HideOnScroll />
        <Router>
          <Home path="/" />
          <About path="about" />
          <Blog path="blog" />
          <Contact path="contact" />
          <Faq path="faq" />
          <Reviews path="reviews" />
          <Teachers path="teachers" />
        </Router>
      </ThemeProvider>
    </Auth0Provider>
  );
}

export default App;
