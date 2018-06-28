import React from 'react';
import Error404 from './Error404';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';
import NewFeedPostForm from './NewFeedPostForm';

function App(){

  const main = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '10px',
    padding: '10px',
  };

  return (
    <div>
      <Navbar/>
      <div style={main}>
        <div>
          <Profile/>
          <Bio/>
        </div>
        <Switch>
          <Route component={Error404} />
        </Switch>
        <FriendsList/>
      </div>
    </div>
  );
}

export default App;
