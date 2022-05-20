import React, { useState } from 'react';

//  GlobalStyle
import { GlobalStyle } from './global/styles/global';

//  Themes
import { ThemeProvider } from 'styled-components';
import { light } from './global/themes/light';
import { dark } from './global/themes/dark';

// Components
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  const [theme, setTheme] = useState(true);

  function handleChangeTheme() {
      setTheme(!theme);
  }
  
  return (
    <>
    <ThemeProvider theme={theme ? light : dark}>
        <Header changeTheme={handleChangeTheme}/>
        <Main/>
        <Footer/>
        <GlobalStyle/>
    </ThemeProvider>
    </>
    
  );
}

export default App;
