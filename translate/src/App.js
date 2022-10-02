import React from 'react';
import UserCreate from './components/UserCreate';
import LanguageContext from './context/LanguageContext';
import ColorContext from './context/ColorContext';
import LangugeSelector from './components/LanguageSelector';

class App extends React.Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    this.setState({ language: language });
  };

  render() {
    return (
      <div className='ui container'>
        <LangugeSelector onLanguageChange={this.onLanguageChange} />
        <LanguageContext.Provider value={this.state.language}>
          <ColorContext.Provider value='primary'>
            <UserCreate />
          </ColorContext.Provider>
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
