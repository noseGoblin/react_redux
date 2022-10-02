import React from 'react';
import UserCreate from './components/UserCreate';
import { LanguageStore } from './context/LanguageContext';
import ColorContext from './context/ColorContext';
import LangugeSelector from './components/LanguageSelector';

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LangugeSelector />
          <ColorContext.Provider value='primary'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    );
  }
}

export default App;
