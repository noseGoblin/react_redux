import React from 'react';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:
          '874632318331-se56v2cjd1v00njv2jha73j8bdfb3nkk.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: 'Streamy',
      });
    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;
