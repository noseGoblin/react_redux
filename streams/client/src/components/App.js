import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamShow from './streams/StreamShow';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamCreate from './streams/StreamCreate';
import StreamList from './streams/StreamList';
import Header from './Header';

const App = () => {
  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path={`/`} exact component={StreamList} />
          <Route path={`/new`} exact component={StreamCreate} />
          <Route path={`/edit`} exact component={StreamEdit} />
          <Route path={`/delete`} exact component={StreamDelete} />
          <Route path={`/show`} exact component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
