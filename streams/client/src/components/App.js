import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

const One = () => {
  return (
    <div>
      PageOne
      <Link to='/two'> Nav to Page 2</Link>
    </div>
  );
};

const Two = () => {
  return (
    <div>
      PageTwo
      <Link to='/'> Nav to Page 1</Link>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path='/' exact component={One} />
          <Route path='/two' component={Two} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
